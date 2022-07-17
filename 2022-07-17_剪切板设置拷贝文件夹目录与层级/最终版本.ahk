#SingleInstance, force
#NoEnv

main:
    SetWinDelay, -1
    ; SetKeyDelay, -1, 50
    Global Selected := "", tempdir := A_ScriptDir "\temp"
    FileCreateDir, % tempdir
    explorer := ExplorerManager()
    TITLE_TC := "ahk_class TTOTAL_CMD"
return

f1::

    ReCreateDir(tempdir)
    ; Selected := Explorer_GetSelection()
    
    if WinActive(TITLE_TC) 
        Selected := CopyGetSelection()
    else
        Selected := explorer.GetSelected()

    try {
        res := []
        loop, parse, Selected, `n, `r
        {
            sel := A_LoopField
            if RegExMatch(sel, "^\s*$")
                continue
            _:= IsDir(sel) || ErrorMsg("1所选" sel "并非文件夹")
            src := JoinPath(tempdir, FileGetName(sel))
            ; msgbox % src
            FileCreateDir, % src
            res.Push(src)
        }
        SetClipBoardPathMany(res*)
        Tip("文件夹已复制到剪切板:`n" Selected)
        ; _:= Instr(Selected, "`n")   && ErrorMsg("无法选择多个文件"))
    }
return

f3::
    ReCreateDir(tempdir)
    ; Selected := Explorer_GetSelection()\
    
    if WinActive(TITLE_TC) 
        Selected := CopyGetSelection()
    else
        Selected := explorer.GetSelected()

    Try {
        _:= Selected || ErrorMsg("sel is not dir")
        sels := []
        level := ""
        Clipboard := ""
        loop, parse, Selected, `n, `r
        {
            sel := A_LoopField
            if RegExMatch(sel, "^\s*$")
                continue
            _:= IsDir(sel) || ErrorMsg("所选[" sel "]并非文件夹")
            sels.push(sel)
        }
        InputBox, level, 输入要拷贝的目录层级, 目录:%Selected%
        _:= level || ErrorMsg("未输入层级")
        _:= isint(level) || ErrorMsg("层级输入错误, 应为数字,你输入的是:" level)
        copyls := []
        for _, sel in sels
        {
            fname := FileGetName(sel)
            temproot := tempdir "\" fname
            src := JoinPath(tempdir, fname)
            FileCreateDir, % temproot
            CreateDirLevel(sel, temproot, level)
            copyls.Push(src)
        }
        SetClipBoardPathMany(copyls*)
        Tip(copyls.Count() "个文件夹:`n" Selected "`n" level "层级目录已复制到剪切板")
    }
return

CopyGetSelection() {
    Clipboard := ""
    Send, ^c
    ClipWait, 0.5
    if ErrorLevel
        return ""
    res := Clipboard
    Clipboard := ""
    return res
}

FileGetName(path) {
    SplitPath, path, fname
    return fname
}

JoinPath(p1, p2) {
    if ( substr(p1, StrLen(p1)) != "\" )
        p1 .= "\"
    if ( substr(p2, 1, 1) = "\" )
        p2 := substr(p2, 2)
    return p1 . p2
}

IsDir(path) {
    FileGetAttrib, fattr, % path
    return InStr(fattr, "D")
}

ReCreateDir(dir) {
    FileRemoveDir, % dir, 1
    sleep 50
    FileCreateDir, % dir
}

isint(val) {
    if val is Integer
        return true
    return false
}

CreateDirLevel(sel, root,level) {
    if (not (level > 0)) 
        return 
    ls := []
    loop, files, % sel "\*", DR
    {
        dir := A_LoopFileLongPath
        part := SubStr(dir, StrLen(sel) + 2)
        ls := StrSplit(part, "\")
        if ls.MaxIndex() > level
            continue
        newdir := root "\" part
        loop, 5
        {
            FileCreateDir, % newdir
            sleep 1
            if FileExist(newdir)
                break
        }
        if not FileExist(newdir)
            ErrorMsg("创建临时文件夹失败:" newdir)
        
    }
}

Tip(txt, timeout := 2000) {
    ToolTip, % txt
    SetTimer, DestroyTip, % -timeout
    return 
    DestroyTip:
        ToolTip
        Reload
    return
}

ErrorMsg(txt) {
    msgbox % txt
    Reload
}


ExplorerManager() {
    return ClassExplorerManager
}


class ClassExplorerManager {

    GetPath(hwnd="")
    {
        if !(window := this.GetWindow(hwnd))
            return ErrorLevel := "ERROR"
        if (window="desktop")
            return A_Desktop
        path := window.LocationURL
        path := RegExReplace(path, "ftp://.*@","ftp://")
        StringReplace, path, path, file:///
        StringReplace, path, path, /, \, All
        ; thanks to polyethene
        Loop
            If RegExMatch(path, "i)(?<=%)[\da-f]{1,2}", hex)
                StringReplace, path, path, `%%hex%, % Chr("0x" . hex), All
            Else Break
        return path
    }

    GetAll(hwnd="")
    {
        return this.Get(hwnd)
    }
    ;~ win10 不适用
    GetSelected(hwnd="")
    {
        return this.Get(hwnd,true)
    }

    GetWindow(hwnd="")
    {
        ; thanks to jethrow for some pointers here
        WinGet, process, processName, % "ahk_id" hwnd := hwnd? hwnd:WinExist("A")
        WinGetClass class, ahk_id %hwnd%

        if (process!="explorer.exe")
            return
        if (class ~= "(Cabinet|Explore)WClass")
        {
            for window in ComObjCreate("Shell.Application").Windows
                if (window.hwnd==hwnd)
                    return window
        }
        else if (class ~= "Progman|WorkerW")
            return "desktop" ; desktop found
    }



    Get(hwnd="",selection=false)
    {
        if !(window := this.GetWindow(hwnd))
            return ErrorLevel := "ERROR"
        if (window="desktop")
        {
            ControlGet, hwWindow, HWND,, SysListView321, ahk_class Progman
            if !hwWindow ; #D mode
                ControlGet, hwWindow, HWND,, SysListView321, A
            ControlGet, files, List, % ( selection ? "Selected":"") "Col1",,ahk_id %hwWindow%

            base := SubStr(A_Desktop,0,1)=="\" ? SubStr(A_Desktop,1,-1) : A_Desktop
            Loop, Parse, files, `n, `r
            {
                path := base "\" A_LoopField
                IfExist %path% ; ignore special icons like Computer (at least for now)
                    ret .= path "`n"
            }
        }
        else
        {
            if selection
                collection := window.document.SelectedItems
            else
                collection := window.document.Folder.Items
            for item in collection
                ret .= item.path "`n"
        }
        return Trim(ret,"`n")
    }
}



SetClipBoardPathMany(paths*) {
    data := [0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00]
    ; msgbox % data.MaxIndex()
    hl := data.MaxIndex()
    ll := 0

    for i, path in paths 
    {
        l := StrPut(path, "UTF-16") * 2
        ll += l

        VarSetCapacity(cache, l, 0)
        StrPut(path, &cache,  "UTF-16")
        loop % l
        {
            data.push(NumGet(&cache + A_Index - 1 , "UChar")) 
        }
    }
    ll += 2
    hPath := DllCall("GlobalAlloc","uint",0x42,"uint", hl + ll)
    pPath := DllCall("GlobalLock","uint",Format("0x{:x}", hPath))
    for i, num in data
    {
        NumPut(num, pPath + (i - 1), 0, "UChar")
    }
    DllCall("GlobalUnlock","uint",Format("0x{:x}", hPath))
    ; msgbox % Format("0x{:x}", hPath) "-" Format("0x{:x}", pPath)
    DllCall("OpenClipboard","uint",0)
    DllCall("EmptyClipboard")
    DllCall("SetClipboardData","uint",0xF,"UInt", Format("0x{:x}", hPath))
    DllCall("CloseClipboard")
    DllCall("GlobalFree", "uint", Format("0x{:x}", hPath))
}
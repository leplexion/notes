
main:
    node_global := A_ScriptDir '\node_global'
    node_global_module := A_ScriptDir '\node_global\node_modules'
    node_cache := A_ScriptDir '\node_cache'

    DirCreate(node_global)
    DirCreate(node_cache)
    DirCreate(node_global_module)

    runwait '"npm" "set" "prefix" "' node_global '"'
    runwait '"npm" "set" "cache" "' node_cache '"'
    runwait 'setx "NODE_PATH" "' node_global_module '"'
    

    npm_defualt := A_AppData '\npm'
    A_Clipboard := node_global
    MsgBox '请手动删除环境变量 path 中的`n' npm_defualt '`n到路径:`n' node_global '`n该路径已复制到剪切板'

return
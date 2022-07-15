processPause(pid, onoff) {
    phandle :＝ OpenProcess (2035711, 0, pid)
    _ := onoff ? ZwSuspendProcess (phandle) : ZwResumeProcess (phandle)
    CloseHandle (phandle)
}


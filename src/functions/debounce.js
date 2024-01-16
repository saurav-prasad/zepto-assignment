let timer = null

const runDebounce = (callBack, timeOut) => {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(() => {
        callBack()
        timer = null
    }, timeOut)
}


export default runDebounce
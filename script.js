document.addEventListener("click", e => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target;
    } else {
        handle = e.target.closest(".handle");
    }
    if (handle != null) {
        onHandleClick(handle);
    }
});

const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
}, 250);

window.addEventListener("resize", throttleProgressBar);
document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);



function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        } else {
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        cb(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    }
};

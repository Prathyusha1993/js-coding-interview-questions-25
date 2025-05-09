// throttle: ensure that functins excutesa atleast once for every delay interval
function throttle(fn,delay) {
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

const logScroll = () => console.log('scrollling...');
// window.addEventListener('scroll', throttle(logScroll, 1000));
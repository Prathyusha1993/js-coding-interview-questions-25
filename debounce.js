// debounce: function delay the excution untill a pause in repeated calls
function debounce(fn,delay) {
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const handleResize = () => console.log('resized');
// window.addEventListener('resize', debounce(handleResize, 300));
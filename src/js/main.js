const iframe = document.querySelector("#iframe");

const test = () => {
    iframe.height = 2000
}

window.addEventListener('message', (event) => {
    if (event.origin !== 'https://miroslawrup7.github.io') return
        setTimeout(test, 3000);
        // console.log(iframe.height)
    

});







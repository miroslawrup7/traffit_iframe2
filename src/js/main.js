const iframe = document.querySelector("#iframe");

let iframeHeight

const test = () => {
    iframe.height = iframeHeight
}

window.addEventListener('message', (event) => {
    if (event.origin !== 'https://miroslawrup7.github.io') return
        iframeHeight = event.data
        setTimeout(test, 3000);
        // console.log(iframe.height)
    

});







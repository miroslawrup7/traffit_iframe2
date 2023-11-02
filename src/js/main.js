const iframe = document.querySelector("#iframe");

window.addEventListener('message', (event) => {
    if (event.origin !== 'https://miroslawrup7.github.io') return
        setTimeout(iframe.height = event.data, 3000);
        // console.log(iframe.height)
    

});







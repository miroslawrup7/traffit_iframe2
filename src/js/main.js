const iframe = document.querySelector("#iframe");

window.addEventListener('message', (event) => {
    if (event.origin === 'https://miroslawrup7.github.io') {
        iframe.height = event.data;
        // console.log(iframe.height)
    }

});







const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    if (event.origin === 'https://miroslawrup7.github.io/') {
        iframe.height = event.data;
        
    }

    console.log(event.origin)

});







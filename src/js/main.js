const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    // if (event.origin === 'http://miroslawrup7.github.io') {
        iframe.height = event.data;
        
    // }

});







const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    if (event.origin === 'miroslawrup7.github.io') {
        iframe.height = event.data;
        
    }

});







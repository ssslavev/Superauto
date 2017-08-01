/* globals $ jsonRequester*/

$(document).ready(function() {
    if (window.location.pathname === '/about') {
        jsonRequester.get('/api/all-adverts')
            .then((adverts) => {
                console.log('ds');
                $('.advCount')
                .replaceWith('<b>' + adverts.length.toString() + '</b>');
            });
    }
});

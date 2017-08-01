/* globals $ jsonRequester*/

$(document).ready(function() {
    if (window.location.href === 'http://localhost:3001/about') {
        jsonRequester.get('/api/all-adverts')
            .then((adverts) => {
                console.log('ds');
                $('.advCount').replaceWith(adverts.length.toString());
            });
    }
});
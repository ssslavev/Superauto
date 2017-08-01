/* globals $ jsonRequester*/

if (window.location.href === '**/about') {
    jsonRequester.get('/api/all-adverts')
    .then((adverts) => {
        console.log('ds');
        $('advCount').replaceWith(adverts.length.toString());
    });
}

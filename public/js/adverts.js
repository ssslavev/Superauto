/* globals $ jsonRequester*/
window.on('load', () => {
    jsonRequester.get('/api/all-adverts')
    .then((adverts) => {
        $('advCount').replaceWith(adverts.length.toString());
    });
});

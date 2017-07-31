/* globals jsonRequester $ */
$('#post-message').on('click', function() {
    const id = $('.detail-container').attr('data-id');
    const author = $('.detail-container').attr('data-author');

    console.log(id + 'from1');
    console.log(author);


    const message = {
        text: $('#message-area').val(),
        author: author,
        id: id,
    };


    return jsonRequester.post('/api/advert/createComment', { data: message })
        .then(() => {
            window.location.href = window.location;
        });
})
/* globals $*/

const jsonRequester = (function() {
    function send(method, url, options) {
        options = options || {};

        const headers = options.headers || {};
        const data = options.data || {};
        console.log('ajax');
        const promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                method: method,
                contentType: 'application/json',
                headers: headers,
                data: JSON.stringify(data),
                success: function(res) {
                    resolve(res);
                },
                error: function(err) {
                    reject(err);
                },
            });
        });
        return promise;
    }

    function get(url, options) {
        return send('GET', url, options);
    }

    function post(url, options) {
        return send('POST', url, options);
    }

    function put(url, options) {
        return send('PUT', url, options);
    }

    // function del(url, options) {
    //     return send('POST', url, options);
    // }

    return {
        send,
        get,
        post,
        put,
        // delete: del
    };
}());

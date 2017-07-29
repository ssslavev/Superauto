const regMatchChars = new RegExp(/^[a-zA-Z]*$/);
const regMatchCharsDesc = new RegExp(/^[a-zA-Z]+$/);
const numRegex = new RegExp('^\\d+$');
const usernameRegex = new RegExp(/^[a-zA-Z0-9]+$/);
// const regUrl = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$');

module.exports = class Validator {
    validateAdvert(advert) {
        this.advert = advert;
        if (!advert.title.match(regMatchChars) ||
            !advert.description.match(regMatchCharsDesc) ||
            !advert.price.match(numRegex)) {
            return false;
        }
        return true;
    }
    validateUser(user) {
        if (!user.username.match(usernameRegex) ||
            !user.firstName.match(regMatchCharsDesc) ||
            !user.lastName.match(regMatchCharsDesc)) {
            return false;
        }
        return true;
    }
};

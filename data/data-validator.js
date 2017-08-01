const regMatchChars = new RegExp(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/);
const regMatchCharsDesc = new RegExp(/^[a-zA-Z]+$/);
const numRegex = new RegExp('^\\d+$');
const usernameRegex = new RegExp(/^[a-zA-Z0-9]+$/);

// TO DO: make validation more precise and semantic
module.exports = class Validator {
    validateAdvert(advert) {
        this.advert = advert;
        if (!advert.title.match(regMatchChars) ||
            !advert.description.match(regMatchChars) ||
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

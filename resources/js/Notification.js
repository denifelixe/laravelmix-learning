export default class {
    constructor (message) {
        this.message = message;
    }

    asAlert() {
        alert(this.message);
    }
}
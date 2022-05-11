module.exports = isValidDate;

function isValidDate(d) {
    d = new Date(d.toString());

    if (Object.prototype.toString.call(d) === "[object Date]") {
        return !isNaN(d);
    }

    return false;
}

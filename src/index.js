module.exports = function check(str, bracketsConfig) {
    const parsedBracketsConfig = bracketsConfig.map((r) => {
        return `${r[0]}${r[i]}`;
    });
    let prevLength = str.length;
    while (str !== "") {
        parsedBracketsConfig.forEach((element) => {
            str = str.replaceAll(element, "");
        });
        if (prevLength === str.length) {
            return false;
        }
        prevLength = str.length;
    }
    return true;
};

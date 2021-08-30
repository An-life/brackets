module.exports = function check(str, bracketsConfig) {
    let a = true;
    while (a === true) {
        a = false;
        for (let i = 0; i < str.length - 1; i++) {
            for (let x = 0; x < bracketsConfig.length; x++) {
                if (str[i] === bracketsConfig[x][0] && str[i + 1] === bracketsConfig[x][1]) {
                    str = str.replace(str[i] + str[i + 1], '');
                    a = true;
                    break;
                }
            }
        }
    }
    if (str.length === 0) {
        return (true);
    } else {
        return (false);
    }
}

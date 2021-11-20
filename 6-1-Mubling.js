const accum = (str) => {
    let chars = str.split('');
    let result = [];

    for (let i = 0; i < chars.length; i++) {
        result.push(chars[i].toUpperCase() + Array(i + 1).join(chars[i].toLowerCase()));
    }
    return result.join('-');
}

console.log(accum('abcdef'));
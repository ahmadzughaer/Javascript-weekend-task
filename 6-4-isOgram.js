const isOgram = (str) => {
    let txt = str.toLowerCase();
    let duplicates = txt.split('').filter((value, index) => txt.indexOf(value) === index);
    if (duplicates.length === txt.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isOgram('hey'));
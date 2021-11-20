const countDuplicate = (str) => {
    let arr = str.toLowerCase().split('');
    let duplicates =  arr.filter((value, index) => arr.indexOf(value) !== index);
    let result = duplicates.filter((value, index) => duplicates.indexOf(value) === index);
    return result.length; 
}

console.log(countDuplicate('hello'));
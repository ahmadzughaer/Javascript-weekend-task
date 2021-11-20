const countDuplicate = (str) => {
    let txt = str.toLowerCase().split('');
    let duplicates =  txt.filter((value, index) => txt.indexOf(value) !== index);
    let result = duplicates.filter((value, index) => duplicates.indexOf(value) === index);
    return result.length; 
}

console.log(countDuplicate('hello'));
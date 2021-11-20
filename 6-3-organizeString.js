const organizeStr =(a, b) => {
   let str= a.concat(b);
    return  [...str].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(organizeStr("xxxsxyz", "abcde"));
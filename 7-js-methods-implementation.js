// implement filter method
const prices = [100, 90, 50, 60, 30];
let result = [];
const filterPrices = prices.filter((value) => {
    if (value <= 50) {
        return value;
    }
})
console.log(filterPrices);

// implement forEach method
let sum = 0;
prices.forEach((el) => {
    sum += el;
})
console.log(sum);

// implement map method
const promotion = 0.1;
const discount = prices.map((el) => el - el * promotion);
console.log(discount);




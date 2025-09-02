let price = 600;
let discount = 20;

let discountedPrice = price - (price * discount / 100);


if (discountedPrice <= 0) {
    discountedPrice = 0;
}
if (discountedPrice <= 500 && discountedPrice > 0) {
    discountedPrice += 50;
}
if (discountedPrice > 500) {
    discountedPrice -= discountedPrice * 0.10;
}

console.log("Final Price: " + discountedPrice + " Bant");
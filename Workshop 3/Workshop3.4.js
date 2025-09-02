let products = [
    { price: 100, discount: 10},
    { price: 200, discount: 20},
    { price: 300, discount: 15},
    { price: 400, discount: 5},
    { price: 500, discount: 25},
];

function calculateTotal() {
    let total = 0;
    products.forEach(product => {
        let finalPrice = product.price - (product.price * product.discount / 100);
        total += finalPrice;
    });
    console.log("Total price after discount: $" + total.toFixed(2));
}

calculateTotal();
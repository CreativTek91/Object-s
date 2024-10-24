// Task 3

const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};

// Apply a 50% discount to discountedPrice
// write your code here:
product.discountedPrice = product.price * 0.5;

console.log(`der grüne Dolphin Hut kostet jetzt nur noch ${product.discountedPrice}€ statt 22€`);
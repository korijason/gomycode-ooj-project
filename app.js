// app.js (This will test the functionality of the shopping cart)
document.addEventListener('DOMContentLoaded', () => {
    // Creating Products
    const apple = new Product(1, 'Apple', 1.00);
    const banana = new Product(2, 'Banana', 0.50);
    const orange = new Product(3, 'Orange', 1.25);

    // Creating a Shopping Cart
    const cart = new ShoppingCart();

    // Adding items to the cart
    cart.addItem(apple, 3);    // 3 Apples
    cart.addItem(banana, 5);   // 5 Bananas
    cart.addItem(orange, 2);   // 2 Oranges

    // Displaying the cart
    console.log('Cart items:');
    cart.displayCart();

    // Display the total cost
    console.log(`Total: $${cart.getTotal()}`);

    // Removing an item from the cart
    console.log('Removing 2 Bananas...');
    cart.removeItem(2);

    // Displaying the cart after removal
    console.log('Updated cart items:');
    cart.displayCart();

    // Display the updated total cost
    console.log(`Updated total: $${cart.getTotal()}`);
});

# gomycode-ooj-project
# Shopping Cart System Using Object-Oriented JavaScript

This project demonstrates a simple shopping cart system implemented using Object-Oriented JavaScript (OOJS). The application allows you to add and remove items from a cart, and calculate the total cost of items in the cart.

## File Structure

- `index.html`: The basic HTML structure for testing the cart functionality.
- `product.js`: Contains the class definition for `Product`, representing individual products.
- `shoppingCartItem.js`: Contains the class definition for `ShoppingCartItem`, which ties a product with its quantity.
- `shoppingCart.js`: Contains the class definition for `ShoppingCart`, which manages the cart and its items.
- `app.js`: A script to test adding/removing items from the cart, and calculating totals.
- `README.md`: Documentation explaining how to use the project.

## Features

- **Product Class**: Represents a product with an id, name, and price.
- **ShoppingCartItem Class**: Represents an item in the cart with a reference to a product and its quantity.
- **ShoppingCart Class**: Manages the cart, including adding/removing items and calculating the total cost.

## How to Use

1. **Create Products**: You can create products by instantiating the `Product` class with an id, name, and price.
2. **Create a Shopping Cart**: The `ShoppingCart` class manages your cart. You can add or remove items.
3. **Add Items**: Use the `addItem()` method to add items to the cart.
4. **Remove Items**: Use the `removeItem()` method to remove items by product id.
5. **View Cart**: Use the `displayCart()` method to print the items in the cart to the console.
6. **Calculate Total**: The `getTotal()` method calculates the total cost of all items in the cart.

## Example

```javascript
const apple = new Product(1, 'Apple', 1.00);
const cart = new ShoppingCart();
cart.addItem(apple, 3);
cart.displayCart(); // Displays the cart with 3 apples
console.log(cart.getTotal()); // Displays the total cost

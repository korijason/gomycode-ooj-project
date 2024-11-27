// shoppingCartItem.js
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;    // Reference to a Product object
        this.quantity = quantity;  // Quantity of the product
    }

    // Method to calculate the total price of the item (product price * quantity)
    calculateTotal() {
        return this.product.price * this.quantity;
    }
}

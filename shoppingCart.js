// shoppingCart.js
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold all ShoppingCartItem objects
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the product already exists in the cart
        let existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            // If product exists, just update the quantity
            existingItem.quantity += quantity;
        } else {
            // If product doesn't exist, create a new ShoppingCartItem and add it
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get the total cost of all items in the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
    }

    // Method to display the cart items (for testing purposes)
    displayCart() {
        this.items.forEach(item => {
            console.log(`${item.product.name} x ${item.quantity} - $${item.calculateTotal()}`);
        });
    }
}



export const addItemToCart = (totalItemCount, cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    totalItemCount++;
    if (existingCartItem) {
        const newCartItems = cartItems.map(
            cartItem => (cartItem.id === cartItemToAdd.id) ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        return { totalItemCount: totalItemCount, cartItems: newCartItems };
    }
    return {
        totalItemCount, cartItems: [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    };
}
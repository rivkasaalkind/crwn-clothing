export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(item => item.id == cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => item.id == cartItemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }

    else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
}

export const removeItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(item => item.id == cartItemToRemove.id);

    if (existingCartItem.quantity == 1)
        return clearItemFromCart(cartItems, cartItemToRemove);
    else
        return cartItems.map(item => item.id == cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => !(item.id == cartItemToRemove.id));
}

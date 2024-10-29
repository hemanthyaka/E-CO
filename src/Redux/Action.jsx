// /* eslint-disable no-undef */
// export function Deposite(amount){
//     return {type:'deposite', payload: amount}
// }

// export function Withdraw(amount){
//     return {type:'withdraw', payload: amount}
// }

// export function NameUpdate(fullName){
//     return {type:'nameUpdate', payload:fullName}
// }

// export function MobileUpdate(mobile){
//     return {type:'mobileUpdate', payload:mobile}
// }



export function AddProduct(product) {
    return { type: "Add_Product", payload: product };
}

export function RemoveProduct(product) {
    return { type: "Remove_Product", payload: product };
}


export function AddToCart(product) {
    return { type: "Add_To_Cart", payload: product };
}


export function RemoveFromCart(productId) {
    return { type: "Remove_From_Cart", payload: productId };
}

export function IncrementQuantity(productId) {
    return { type: "Increment_Quantity", payload: productId };
}

export function DecrementQuantity(productId) {
    return { type: "Decrement_Quantity", payload: productId };
}

export const resetCart = () => ({
    type: 'Reset_Cart',
  });
  


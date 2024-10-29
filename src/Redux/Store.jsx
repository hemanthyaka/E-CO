// /* eslint-disable default-case */
// import { combineReducers, createStore} from 'redux';
// // import thunk from 'redux-thunk'

// const initialState = {
//     userId : 1,
//     FullName : "",
//     MobileNumber : null,
//     Balance : 0
// }


// const AccountReducer = (state = initialState, action) =>{

//     switch(action.type){
//      case 'deposite':
//         return {...state, Balance: state.Balance + Number(action.payload)};
//      case 'withdraw':
//         return {...state,  Balance: state.Balance - Number(action.payload)};
//     case 'nameUpdate':
//         return {...state, FullName : action.payload};
//     case 'mobileUpdate':
//         return {...state, MobileNumber : action.payload};
//     default:
//         return state;
//     }
// }

// const TransactionReducer = (state=[], action)=>{
//    switch(action.type){
//     case 'Add_Transaction':
//         return [...state,{id:action.payload.id, amount:action.payload.amount, type:action.payload.type, date:action.payload.date}]
//     default :
//      return state
//    }
// }

// // const data = {
// //     user_data : {

// //     }
// // }

// // const FetchReducer = (state=data, action) => {
// //     switch(action.type){
// //         case 'Add':
// //             return [...state, {}]
// //     }
// // }

// const RootReducer = combineReducers({
//     account : AccountReducer,
//     transaction : TransactionReducer,
// })



// const Store = createStore(RootReducer)


// export default Store;


import { combineReducers, createStore } from 'redux';

// Store.jsx

const initialCartState = {
    items: [],
    lastAddedProductId: null,
};

const CartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'Add_To_Cart': {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // Item already exists; increment quantity
                const updatedItems = [...state.items];
                updatedItems[itemIndex].quantity += 1;
                return { ...state, items: updatedItems, lastAddedProductId: action.payload.id };
            }
            // Item doesn't exist; add with quantity 1
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }], lastAddedProductId: action.payload.id };
        }
        case 'Remove_From_Cart': {
            const updatedItems = state.items.filter(item => item.id !== action.payload);
            return { ...state, items: updatedItems, lastAddedProductId: null };
        }
        case 'Increment_Quantity': {
            const updatedItems = state.items.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { ...state, items: updatedItems };
        }
        case 'Decrement_Quantity': {
            const updatedItems = state.items
                .map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0);
            return { ...state, items: updatedItems };
        }
        case 'Reset_Cart': {
            return initialCartState;
        }
        default:
            return state;
    }
};

const Root = combineReducers({
    cart: CartReducer,
});

const Store = createStore(Root);

export default Store;

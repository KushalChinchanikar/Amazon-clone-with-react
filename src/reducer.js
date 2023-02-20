export const initialState = {
    basket: [{
        id:"12321",
        title:"The Lean Startup: How constant innovation creates",
        price:11.96,
        rating:5,
        image:"https://m.media-amazon.com/images/I/51uJbi2wpIL._AC_SY200_.jpg"
    },],
    user: null,
};

function reducer(state, action){
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case "REMOVE_FROM_BASKET":
            return { state };
            break;
        default:
            return state;
    }

}

export default reducer;
const InitialState = {
    'GET_CARDS': []
};

export const Cards = (state = InitialState, action) => {

    switch (action.type) {
        case 'GET_CARDS':
            return { ...state, GET_CARDS};
        case 'ADD_CARDS':
            return { ...state, GET_CARDS: [...state.GET_CARDS,...action.payload]};
        default:
            return state;
    }

}   
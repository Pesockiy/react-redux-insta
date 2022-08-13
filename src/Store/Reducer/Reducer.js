const InitialState = {
    'ADD_OBJECT': 3,
    'COUNT': 1
};

export const Reducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'ADD_OBJECT':
            return { ...state, 'ADD_OBJECT': action.payload };
        case 'add':
            return { ...state, 'ADD_OBJECT': state.ADD_OBJECT * 2};
        case 'COUNT':
            return {...state, 'COUNT': +action.payload};
        default:
            return state;
    }

}
const appReducer = (state = initialState, action) => {
    const reducerFunction = appObject[action.type];
    return reducerFunction ? reducerFunction(state, action) : state;
};

export default appReducer;
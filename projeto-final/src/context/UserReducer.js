const reducer = (globalState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "READ_USERS":
            return {
                ...globalState,
                users: action.payload,
            };
            case "ADD_USER":
                return {
                    ...globalState,
                    users: [...globalState.users, action.payload],
    };
}
};

export default reducer;
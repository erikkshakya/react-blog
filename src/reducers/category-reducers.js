export const categoryListReducer = (
    state = {loading: true, category: []},
    action
) => {
    switch (action.type) {
        case 'CATEGORY_LIST_REQUEST':
            return {loading: true};
        case 'CATEGORY_LIST_SUCCESS':
            return {loading: false, category: action.payload};
        case 'CATEGORY_LIST_FAIL':
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};
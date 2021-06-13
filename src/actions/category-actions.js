import * as api from '../api/catergory-api'

export const listCategory = () => async (dispatch) => {
    dispatch({
        type: 'CATEGORY_LIST_REQUEST',
    });
    try {
        const { data } = await api.fetchCategories();
        dispatch({
            type: 'CATEGORY_LIST_SUCCESS',
            payload: data,
        });
    } catch (error) {
        dispatch({ type: 'CATEGORY_LIST_FAIL', payload: error.message });
    }
};
export const TOGGLE_FAVORIE = 'TOGGLE_FAVORIE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORIE,
        mealId: id
    }
}

export const setFilters = (filterSettings) => {
    return {
        type: SET_FILTERS,
        filters: filterSettings
    }
}
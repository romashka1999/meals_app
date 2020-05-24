export const TOGGLE_FAVORIE = 'TOGGLE_FAVORIE';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORIE,
        mealId: id
    }
}
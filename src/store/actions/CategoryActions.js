const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = (categories) => {
    return {
        type: LOAD_CATEGORIES,
        categories: categories
    }
}
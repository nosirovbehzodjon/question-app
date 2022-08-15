import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORIES,
    CHANGE_CATEGORY,
    CHANGE_QUESTIONS,
    CHANGE_SCORE,
} from "../actions/actionsTypes";

const initialState = {
    question_amount: 50,
    question_category: "",
    categories: [],
    questions: [],
    score: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AMOUNT:
            return {
                ...state,
                question_amount: action.payload,
            };
        case CHANGE_CATEGORY:
            return {
                ...state,
                question_category: action.payload,
            };
        case CHANGE_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload],
            };
        case CHANGE_QUESTIONS:
            return {
                ...state,
                questions: [...action.payload],
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORIES,
    CHANGE_CATEGORY,
    CHANGE_QUESTIONS,
    CHANGE_SCORE,
} from "./actionsTypes";

export const categoryChange = (data) => ({
    type: CHANGE_CATEGORY,
    payload: data,
});

export const amountChange = (data) => ({
    type: CHANGE_AMOUNT,
    payload: data,
});

export const scoreChange = (data) => ({
    type: CHANGE_SCORE,
    payload: data,
});

export const categoriesChange = (data) => ({
    type: CHANGE_CATEGORIES,
    payload: data,
});

export const questionsChange = (data) => ({
    type: CHANGE_QUESTIONS,
    payload: data,
});

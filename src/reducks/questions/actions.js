export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const fetchQuestionsAction = (questions) => {
    return {
        type: "FETCH_QUESTIONS",
        payload: questions
    }
}

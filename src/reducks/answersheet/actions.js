export const FETCH_ANSWERSHEET = "FETCH_ANSWERSHEET";
export const fetchAnswersheetAction = (answersheet) => {
    return {
        type: "FETCH_ANSWERSHEET",
        payload: answersheet
    }
}

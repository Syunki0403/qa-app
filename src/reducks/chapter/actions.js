export const FETCH_CHAPTERS = "FETCH_CHAPTERS";
export const fetchChaptersAction = (chapters) => {
    return{
        type: "FETCH_CHAPTERS",
        payload: chapters
    }
}
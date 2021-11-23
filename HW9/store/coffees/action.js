

export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export const setData = (coffees) => ({
    type: SET_DATA,
    payload: coffees
});





const COFFEES_API = "https://coffee.alexflipnote.dev/random";
const WORDS_API="https://random-words-api.vercel.app/word"

export const getRandomCoffees = async (dispatch) => {

    dispatch(setLoading(true));
    dispatch(setError(false));
    // dispatch(setData([]))

    try {
        const response = await Promise.all([fetch(COFFEES_API), fetch(WORDS_API)]);
        const [wordsResult, imageResult]= await Promise.all(response.map((response)=>response.json()));

        // if (!response.ok) {
        //     throw new Error('any error')
        // }




        dispatch(setData({
            words: wordsResult.data[0],
            url: imageResult[0].url
        }));
    } catch (e) {
        console.error(e);
        dispatch(setError(true))
    }

    dispatch(setLoading(false))
}
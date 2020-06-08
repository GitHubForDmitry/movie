const url = `https://api.themoviedb.org/3/search/movie?query=marvel&api_key=${process.env.REACT_APP_API_KEY}&page=2`
export const getData = async() => {
    const response = await fetch(url);
    const data = response.json();

    return data;
};

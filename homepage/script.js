async function getMovie () {

    const response = await fetch("https://api.themoviedb.org/3/movie/617126/videos?api_key=8320fb88b286e59aa704ba7cece11625")
    const data = await response.json();
    console.log(data);

}

getMovie();
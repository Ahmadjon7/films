"use strict"

movies.splice(50);

const AllMovies = movies.map((movies) => {
    return{
     title:movies.title,
     year:movies.year,
     lang:movies.language,
     categoty:movies.categories,
     id:movies.imdbId,
     time:`${Math.floor(movies.runtime/60)}h ${movies.runtime%60}m`,
     summary:movies.summary,
     link:`https://www.youtube.com/embed/${movies.youtubeId}`,
     maxImg:movies.bigThumbnail,
     minIMG:movies.smallThumbnail,
     reyting:movies.imdbRating

    }
}
    )
    console.log(AllMovies)

//-----------Normalize all movies-------/
//----------Render all movies --------/


function renderAllMovies(){
    AllMovies.forEach((el) => {
        const card = createElement('div','card shadow',`
        <img src="${el.minIMG}" alt="img" class="card-img">
        <div class="card-body">
            <h4 class="card-title">${el.title}</h4>
            <ul class="card-list list-unstyled">
                <li>
                    <strong>Year: ${el.year}</strong>
                </li>
                <li>
                    <strong>Language: ${el.lang}</strong>
                </li>
                <li>
                    <strong>Rating: ${el.reyting}</strong>
                </li>
                <li>
                    <strong>Category: ${el.categoty}</strong>
                </li>
                <li>
                    <strong>Runtime: ${el.time}</strong>
                </li>
            </ul>
            <div class="social d-flex">
                <button class="btn btn-danger">Trailers</button>
                <button class="btn btn-primary">Read more ...</button>
                <button class="btn btn-warning">Add bookmark</button>
            </div>
        </div>`)
        $('.wrapper').appendChild(card)
    })
}
renderAllMovies()
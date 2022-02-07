
$.get("https://api.themoviedb.org/3/configuration?api_key=" + TMDBKey).done(function (data) {
    console.log(data);
});


document.getElementById('search-button').addEventListener('click', function () {
    let movieInput = $('#userInput').val()
    console.log(movieInput)
    $('.movieCard').empty();


    $.get(`https://api.themoviedb.org/3/search/movie?api_key=36bae576330e105013948f7fc0b734c0&language=en-US&query=${movieInput}&page=1&include_adult=false`).done(function (data) {
        console.log(data)

        let filmCard = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="http://image.tmdb.org/t/p/w154${data.results[0].poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data.results[0].original_title}</h5>
                <p class="card-text">${data.results[0].overview} (${data.results[0].release_date})</p>
                
            </div>
    </div>`

        $('.movieCard').append(filmCard);

    })
});

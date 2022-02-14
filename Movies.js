// $(window).on('load', function () {
//     setTimeout(function() {
//         $('#loading').hide()
//     },2000)
// });

$.get("https://api.themoviedb.org/3/configuration?api_key=" + TMDBKey).done(function (data) {
    console.log(data);
});


document.getElementById('search-button').addEventListener('click', function () {
    let movieInput = $('#userInput').val()
    console.log(movieInput)
    $('.movieCard').empty();
    const glitchURL = "https://tartan-quill-libra.glitch.me/movies";

    $.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDBKey}&language=en-US`).done(function (data) {
        console.log(data);
        $.ajax({
            type: 'POST',
            url: glitchURL,
            data: JSON.stringify(data)
        })
    })



    let filmCard =
        `
<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="http://image.tmdb.org/t/p/original${data.results[0].poster_path}" alt="Card image cap">

        < div class= "card-body" >
        < h5 class= "card-title" >${data.results[0].original_title} < /h5>
    <p class="card-text">${data.results[0].overview} (${data.results[0].release_date})</p>

</div>
</div>
    `

    $('.movieCard').append(filmCard)
})

// const starRatings = [...document.getElementsByClassName('rating-star')]

// function rateMovie(stars) {
//     const starClassActive = "rating-star fas fa-star";
//     const starClassInactive = "rating-star far fa-star";
//     let i;
//     console.log(stars.length)
//     stars.map((star) => {
//         $('.rating-star') = () =>
//             i = stars.indexOf(star);
//         if ($(this).className === starClassInactive) {
//             for (i; i >= 0; --i) {
//                 stars[i].className === starClassActive;
//             }
//         }
//         else
//         {
//             for (i; i > stars.length; ++i) stars[i].className === 'starClassInactive';
//
//         }
//     })
// }
// rateMovie(starRatings);
// $.get(`
// https://api.themoviedb.org/3/person/${data.results.person_id}/images?api_key=${TMDBKey}`).done(function (data) {
//     console.log(data)
// })

document.getElementById('search-button').addEventListener('click', function () {
    let movieInput = $('#userInput').val()
    console.log(movieInput)
    $('.movieCard').empty();
    const glitchURL = "https://tartan-quill-libra.glitch.me/movies";

    $.get(`https://tartan-quill-libra.glitch.me/movies?id=287`).done(function (data) {
        console.log(data);
        // $.ajax({
        //     type: 'POST',
        //     url: glitchURL,
        //     data: JSON.stringify(data)
        // })


        let filmCard =
            `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="http://image.tmdb.org/t/p/original${data[0].poster_path}" alt="Card image cap">
    <div class= "card-body w-5" >
    <h5 class= "card-title" >${data[0].title} </h5>
    <p class="card-text">${data[0].overview}</p>
    </div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">
  EDIT
</button>    </div>
 <div class="editForm">
        <label for="title">title</label>
        <input type="text" id="title" value=${data[0].title}>
        <label for="description">description</label>
        <textarea id="description" cols="30" rows="10">${data[0].overview}</textarea>
        <button id="${data[0].id}" type="button" onclick="editMe(${data[0].id})">submit</button>
    </div>
    `
        $('.movieCard').append(filmCard)
    })
})


// const datum = {
//     title: $('#title').val(),
//     overview: $('#descripton').val()
// }

    function editMe(id){
        console.log($('#title').val());
        fetch(`https://tartan-quill-libra.glitch.me/movies`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: $('#title').val(),
                    overview: $('#descripton').val()
                }
            )
        })
            .then(response => response.json())
            .then(json => {
                $('#card-title').innerText = `${json.title}`
                $('#card-text').innerText = `${json.overview}`
            })
    }






// menggunakan Jquery

// $("#button-search").on('click',function(){
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=557c821a&s="+$(".input-movie").val(),
//   success: (result) => {
//     const movies = result.Search;
//     let card = "";
//     movies.forEach((m) => {
//       card += showCard(m)
//     });
//     $(".movie-container").html(card);


//     //tombol detail
//     $(".modal-button-info").on("click", function(){
//       $.ajax({
//       url:"http://www.omdbapi.com/?apikey=557c821a&i="+ $(this).data("imdbid"),
//         success: mi =>{
//           console.log(mi)
//           const movieInfo= showInfo(mi)
//             $(".modal-body-info").html(movieInfo);
//         },
//         error:(e)=>{
//           console.error('apalagi nieeh errornya '+e.response1)
//         }
//       })
//     });
//   },

//   error: (e) => {
//     console.error("kumaha ieu tehh eror wae"+e.response);
//   },
// });
// menggunakan Jquery


// fetch API
//memunculkan card
const tombol = document.querySelector('#button-search');

tombol.addEventListener('click',function(){
  const inputKeyword = document.querySelector('.input-movie');
  fetch('http://www.omdbapi.com/?apikey=557c821a&s='+inputKeyword.value)
  .then(response => response.json())
  .then(response =>{
    const movies = response.Search;
    let card = '';
    movies.forEach(m => {card += showCard(m)})
    const cardContainer = document.querySelector(".movie-container")
    cardContainer.innerHTML=card;

//menampilkan kotak detail

    const buttonInfo = document.querySelectorAll('.modal-button-info')
    buttonInfo.forEach(btn => {
    btn.addEventListener('click' , function(){
      const imdbID = this.dataset.imdbid;
      fetch('http://www.omdbapi.com/?apikey=557c821a&i=' + imdbID).then(response => response.json())
        .then(response => { 
        const detailBox =showInfo(response)
        const modalBody = document.querySelector('.modal-body-info')
        modalBody.innerHTML = detailBox;
    })  
  })
})
//menampilkan kotak detail 


  })
})

// fetch API

function showCard(m){
 return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top"/>
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <p class="card-text text-muted">${m.Year}</p>
                    <button type="button" class="btn btn-primary modal-button-info" data-bs-toggle="modal" data-bs-target="#modalBox" data-imdbid="${m.imdbID}">more info</button>
                    </div>
                </div>
                </div>`;
}

function showInfo(m){
  return `<div class="container-fluid">
              <div class="row">
                <div class="col -md-3">
                  <img src="${m.Poster}" alt="gammbar" class="img-fluid" />
                </div>
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                    <li class="list-group-item"><strong>${m.Director}</strong></li>
                    <li class="list-group-item"><strong>${m.Actors}</strong></li>
                    <li class="list-group-item"><strong>${m.Writter}</strong></li>
                    <li class="list-group-item"><strong>Sinopsis</strong><br />${m.Plot}</li>
                  </ul>
                </div>
              </div>
            </div>`;
}
// })
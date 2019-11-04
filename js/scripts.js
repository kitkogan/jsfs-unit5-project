
// const searchDiv = document.getElementById('#search-container');
const galleryDiv = document.getElementById('gallery');
const cardArray = [];
const imageArray = []; 
// const cardInfo = document.getElementsByClassName('.card-info-container');
// const cardDiv = document.getElementsByClassName('.card');
let modalDiv = document.getElementsByClassName('.model-container');
const modalInfo = document.getElementsByClassName('modal-info-container');
const ModalBtnDiv = document.getElementsByClassName('modal-btn-container');
const url = 'https://randomuser.me/api/?results=12&nat=gl';
let html = '';



fetch(url)
  .then(response => {
    return response.json()
  })

  .then(data => {
    appendToDom(data.results); 
    searchFilter(data.results)
    
  })

  .catch(err => {
    throw(err);
    
  }) // API accessed, data fetched. Screen displays data or error is thrown

function appendToDom(result) {
  for (let i=0; i<result.length; i++) {

    let card = document.createElement('div');
    card.className = 'card'
    html = `<div class="card-img-container">
<img class="card-img" src=${result[i].picture.thumbnail} alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">${result[i].name.first} ${result[i].last}</h3>
              <p class="card-text">${result[i].email}</p>
              <p class="card-text cap">${result[i].location.city}, ${result[i].location.state}</p>
          </div>`;

      card.innerHTML = html;
      galleryDiv.append(card);
  // card div for info/image created. retrieved data appended to DOM.

      card.addEventListener('click', () => {
        cardInfo(result, i);
      });
    
  } 
}

function cardInfo(result, index) {
  modalDiv.css('display', 'block');

  modalInfo.append(`<img class="modal-img" src=${result[index].picture.thumbnail} alt="profile picture">`);
  modalInfo.append(`<h3 id="name" class="modal-name cap">${result[index].name.first, $}{result[index].name.first}, ${result[index].name.last} </h3>`);
  modalInfo.append(`<p> class="modal-text cap"> ${result[index].email} </p>`);
  modalInfo.append(`<p class="modal-text cap"> ${result[index].location.city} </p> <hr>`);
  modalInfo.append(`<p class="modal-text cap"> ${result[index].cell} </p>`)
    let location = result[index].location;
  modalInfo.append(`<p class="modal-text cap"> ${location.street}, ${location.city}, ${location.state} ${location.postcode} </p>`)
    let date = result[index].dob.date;
  modalInfoappend(`<p class="modal-text cap">Birthday: ${date.substring(5,7)}/${date.substring(8,10)}/${date.substring(0,4)}</p>`)

}

  function searchFilter(result) {
    let searchInput = document.querySelector('#search-input');
    const card = document.querySelectorAll('.card');
    let searchSubmit = document.querySelector('#search-submit');
        searchSubmit.addEventListener('click', event => {
        event.preventDefault();
        for (let i=0;  i<result.length; i++)
          if (result[i].name.first.toUpperCase().includes(searchInput.value.toUpperCase()) ) {
            card[i].style.display = 'flex';
          } else {
            card[i].style.disply = 'none';
          }
    });
  }


  modalDiv.css('display', 'none'); // hide modal on page load
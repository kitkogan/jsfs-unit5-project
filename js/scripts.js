
// const searchDiv = document.getElementById('#search-container');
const galleryDiv = document.getElementById('gallery');
// const cardArray = [];
// const imageArray = []; 
// const cardInfo = document.getElementsByClassName('.card-info-container');
// const cardDiv = document.getElementsByClassName('.card');
// const modalDiv = document.getElementsByClassName('.model-container');
// const modalInfo = document.getElementsByClassName('modal-info-container');
// const ModalBtnDiv = document.getElementsByClassName('modal-btn-container');
const url = 'https://randomuser.me/api/?results=12&nat=gl';
let html = '';

//       url = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location';


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
              <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="name" class="card-name cap">first last</h3>
              <p class="card-text">email</p>
              <p class="card-text cap">city, state</p>
          </div>`

      card.innerHTML = html;
      galleryDiv.append(card);
  // card div for info/image created. retrieved data appended to DOM.

      card.addEventListener('click', () => {
        cardInfo(result, i);
      });
    
  } 
}

  function searchFilter(result) {
    let searchInput = document.querySelector('#search-input');
    const card = document.querySelectorAll('.card');
    let searchSubmit = document.querySelector('#search-submit');
        searchSubmit.addEventListener('click', event => {
        event.preventDefault();
        for (let i=0;  i < result.length; i++)
          if (result[i].name.first.toUpperCase().includes(searchInput.value.toUpperCase()) ) {
            card[i].style.display = 'flex';
          } else {
            card[i].style.disply = 'none';
          }
    });
  }


  modalDiv.css('display', 'none'); // hide modal on page load
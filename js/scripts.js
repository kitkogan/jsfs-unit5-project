
// const searchDiv = document.getElementById('#search-container');
const galleryDiv = document.querySelector('#gallery');
const searchDiv = document.querySelector('.search-container');
const body = document.querySelector('body');
let result = [];
// let cardArray = [];
// let imageArray = []; 
// const cardInfo = document.getElementsByClassName('.card-info-container');
// const cardDiv = document.getElementsByClassName('.card');
// let modalDiv = $('.modal-container');
let modalInfo = $('.modal-info-container');
modalBtnDiv = $('modal-btn-container');
// let html = '';

grabUserArray('https://randomuser.me/api/?results=12&nat=gb')
  .catch( err => console.log(err) );

 async function grabUserArray(url) {
  const userArray = await fetch(url); 
  const userArrayJSON = await userArray.json();
  userArrayJSON.result
    .forEach( user => {
      createCard(user);
      result.push(user)
    });

}

function createCard(user) {
    const card = document.createElement('div');
    card.className = 'card'
    card.innerHTML = `
    <div class="card-img-container">
    <img class="card-img" src=${result[i].picture.thumbnail} alt="profile picture">
  </div>
  <div class="card-info-container">
    <h3 id="name" class="card-name cap">${result[i].name.first} ${result[i].last}</h3>
    <p class="card-text">${result[i].email}</p>
    <p class="card-text cap">${result[i].location.city}, ${result[i].location.state}</p>
  </div>`;

  card.addEventListener('click', function() {
      createModal(user);
  });

}

function createModal(user)

  const modal = document.createElememnt('div');
  modal.classList = 'modal-container';


function toggleCard(result, index) {
  let prevBtn = $('#modal-prev');
  let nextBtn = $('modal-next');

  prevBtn.on('click', event => {
  index--;

    if (index >= 0) {
      modalInfo.empty();
      modalInfo.append(`<img class="modal-img" src=${result[index].picture.thumbnail} alt="profile picture">`)
      modalInfo.append(`<h3 id="name" class="modal-name cap"> ${result[index].name.first}, ${result[index].name.last} </h3>`)
      modalInfo.append(`<p class="modal-text"> ${result[index].email} </p>`)
      modalInfo.append(`<p class="modal-text cap"> ${result[index].location.city} </p> <hr>`);

      modalInfo.append(`<p class="modal-text"> ${result[index].cell} </p>`)
      let location = result[index].location;
      modalInfo.append(`<p class="modal-text"> ${location.street}, ${location.city}, ${location.state} ${location.postcode} </p>`)
      let date = reslut[index].dob.date;
      modalInfo.append(`<p class="modal-text">Birthday: ${date.substring(5,7)}/${date.substring(8,10)}/${date.substring(0,4)}</p>`);
    }
    
    else if (index > 0) {
        index = 0;
    }
  });

  nextBtn.on('click', e => {
    index++;
    if (index <= 11) {
      modalInfo.empty();
      modalInfo.append(`<img class="modal-img" src=${result[index].picture.thumbnail} alt="profile picture">`)
      modalInfo.append(`<h3 id="name" class="modal-name cap"> ${result[index].name.first}, ${result[index].name.last} </h3>`)
      modalInfo.append(`<p class="modal-text"> ${result[index].email} </p>`)
      modalInfo.append(`<p class="modal-text cap"> ${result[index].location.city} </p> <hr>`);

      modalInfo.append(`<p class="modal-text"> ${result[index].cell} </p>`)
      let location = result[index].location;
      modalInfo.append(`<p class="modal-text"> ${location.street}, ${location.city}, ${location.state} ${location.postcode} </p>`)
      let date = result[index].dob.date;
      modalInfo.append(`<p class="modal-text">Birthday: ${date.substring(5,7)}/${date.substring(8,10)}/${date.substring(0,4)}</p>`);
    }
    else if (index > 11) {
      index = 11;
    }
    })


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
  searchFilter(data.results)

  modalDiv.css('display', 'none');

  }


const galleryDiv = document.querySelector('#gallery');
const searchDiv = document.querySelector('.search-container');
const body = document.querySelector('body');
let results = [];

getUsers('https://randomuser.me/api/?results=12&nat=gl') // url for API requests to get 12 random users from anywhere in the world
  .catch( err => console.log(err) );

 async function getUsers(url) {
  const users = await fetch(url); 
  const usersJson= await users.json();
  usersJson.results
    .forEach( user => {
      createCard(user);
      results.push(user);
    });

} // initiates API request for user info 
    // gets info or logs error
    // uses JSON to handle results
    // creates a div to push and store user info to

function createCard(user) {
    const card = document.createElement('div');
    galleryDiv.appendChild(card);
    card.className = 'card'
    card.innerHTML = `
    <div class="card-img-container">
    <img class="card-img" src=${user.picture.medium} alt="profile picture">
  </div>
  <div class="card-info-container">
    <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
    <p class="card-text">${user.email}</p>
    <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
  </div>`;

  card.addEventListener('click', function() {
    createModal(user);
  });

} // appends user info to card div-- user name, photo, email, and location will display on card
    // opens modal window on click event

function createModal(user) {

  const modal = document.createElement('div');
  modal.classList = 'modal-container';
  body.appendChild(modal); // appends user info to modal div

  const birthday = new Date(user.dob.date);
  let dob = birthday.getDate();
  let mob = birthday.getMonth();
  let yob = birthday.getFullYear();
 
  if(dob < 10) {
    dob = '0' + dob;

  }

  if(mob < 10 ) {
    mob = '0' + mob;

  } // tells program how to create and dsiaplay user birthday

  const index = results.indexOf(user);
  var html = ''; 

  html = `
  <div class="modal">
  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
  <div class="modal-info-container">
      <img class="modal-img" src="${user.picture.large}" alt="profile picture">
      <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
      <p class="modal-text">${user.email}</p>
      <p class="modal-text cap">${user.location.city}</p>
      <hr>
      <p class="modal-text">${user.phone}</p>
      <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
      <p class="modal-text">Birthday: ${mob}-${dob}-${yob}</p>
  </div>
  <div class="modal-btn-container">` // gives program instructions for what info should be displayed in modal-- photo, name, email, city, phone number, address, and DOB

  if(index !== 0) {
    html += `<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>`;
  }
    if(index !== 11) {
      html += ` <button type="button" id="modal-next" class="modal-next btn">Next</button>`;
    }
  html += `</div> </div>`; // gives program instructions for modal button behavior-- will advance forward on 'Next" and backward on "Prev"

  modal.innerHTML = html; 
                            


const modalBtnClose = document.querySelector('#modal-close-btn');
modalBtnClose.addEventListener('click', removeModal);

const prevBtn = document.querySelector('#modal-prev');
const nextBtn = document.querySelector('#modal-next');

if(prevBtn) {
  prevBtn.addEventListener('click', () => {
    removeModal();
    createModal(results[index - 1]);
  });
}

if(nextBtn) {
  nextBtn.addEventListener('click', () => {
    removeModal();
    createModal(results[index + 1]);
  });
}
 function removeModal() {
   body.removeChild(modal);
 } // sets up click event handlers for modal buttons and gives program instructions for how buttons should function when clicked
 
}

const form = document.createElement('form');
form.setAttribute('action', '#');
form.setAttribute('method', 'get');
searchDiv.appendChild(form);
searchDiv.innerHTML = `
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
`; // Sets up search form functionality and appends search input and submit elements to the DOM

const searchBtn = document.querySelector('#search-submit');
searchBtn.addEventListener('click', searchUserList); // event handler for search button


function searchUserList() {
  const searchInput = document.querySelector('#search-input').value;
  const userList = document.querySelectorAll('.card h3');
  const userDiv = document.querySelectorAll('.card');

  for(let i = 0; i < userList.length; i++) {
    if(userList[i].textContent.toUpperCase().includes(searchInput.toUpperCase())) {
      userDiv[i].style.display = 'flex';
    }
    else {
      userDiv[i].style.display = 'none';
    }
  } // program instructions for page behavior on retrieval of search values from list of employees
      // If found, matches from user list will display --otherwise none will display
}




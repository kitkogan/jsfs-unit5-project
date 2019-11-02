// const searchInput = document.getElementById('#search-input');
// const searchSubmit = document.getElementbyId('#search-submit');
// const searchDiv = document.getElementById('#search-container');
// const galleryDiv = document.getElementbyId('#gallery');
// const cardArray = [];
// const imageArray = []; 
// const cardInfo = document.getElementsByClassName('.card-info-container');
// const cardDiv = document.getElementsByClassName('.card');
// const modalDiv = document.getElementsByClassName('.model-container');
// const modalInfo = document.getElementsByClassName('.model-info-container');
// const ModalBtnDiv = document.getElementsByClassName('.modal-btn-container');
 const url = 'https://randomuser.me/api/?results=12';

//       url = 'https://randomuser.me/api/?results=12&inc=picture,name,email,location';


fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {

    console.log(data)
  })
  .catch(err => {
    console.log(err)
    
  })
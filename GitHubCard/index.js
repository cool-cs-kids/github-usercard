import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

let gitHubData = {};
axios
  .get('https://api.github.com/users/tryingtokeepup')
  .then((response) => {
    gitHubData = response.data;
    console.log(gitHubData);
  })
  .catch((error) => console.log(error))
  .finally(console.log('data is coming through'));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCardMaker(gitHubData) {
  // first, create all elements using createElement
  const cardContainer = document.createElement('div');
  const img = document.createElement('img');
  const cardInfoContainer = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const profileA = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  // second, attach classes to the elements with classList

  cardContainer.classList.add('card');
  // no img class  to put on img div
  cardInfoContainer.classList.add('card-info');
  nameH3.classList.add('name');
  usernameP.classList.add('username');

  // third, append the child nodes to cardContainer div with .appendChild
  cardContainer.appendChild(img);
  cardContainer.appendChild(cardInfoContainer);
  // console.log(cardContainer);
  cardInfoContainer.appendChild(nameH3);
  cardInfoContainer.appendChild(usernameP);
  cardInfoContainer.appendChild(locationP);
  cardInfoContainer.appendChild(profileP);
  profileP.appendChild(profileA);
  cardInfoContainer.appendChild(followersP);
  cardInfoContainer.appendChild(followingP);
  cardInfoContainer.appendChild(bioP);

  console.log(cardContainer);
  return cardContainer;
}

gitHubCardMaker({});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// let gitHubData = {};
// axios
//   .get('https://api.github.com/users/tryingtokeepup')
//   .then((response) => {
//     gitHubData = response.data;
//     console.log(gitHubData);
//   })
//   .catch((error) => console.log(error))
//   .finally(console.log('data is coming through'));

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

// first, get the data from Github
// lets query select the .cards div

const cardsDiv = document.querySelector('.cards');
console.log(cardsDiv);
const gitHubCardMaker = (user) => {
  return axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response.data);
      const newCard = cardMaker(response.data);
      cardsDiv.appendChild(newCard);
    })
    .catch('failed!!!!');
};

gitHubCardMaker('tryingtokeepup');
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['stepbystepdayo', 'bigknell', 'dustinmyers'];
followersArray.forEach((follower) => {
  gitHubCardMaker(follower);
});
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

function cardMaker(gitHubData) {
  // first, create all elements using createElement

  console.log('Hey, I got the GitHub Data, YOO!!!! ', gitHubData);

  // console.log('this is my img, =>', gitHubData.avatar_url);
  const cardContainer = document.createElement('div');
  const img = document.createElement('img');
  img.src = gitHubData.avatar_url;
  const cardInfoContainer = document.createElement('div');
  const nameH3 = document.createElement('h3');
  // console.log('this is my name, =>', gitHubData.name);

  nameH3.textContent = gitHubData.name;
  const usernameP = document.createElement('p');
  usernameP.textContent = gitHubData.login;
  const locationP = document.createElement('p');
  locationP.textContent = gitHubData.location || 'fantasy land';
  const profileP = document.createElement('p');
  profileP.textContent = 'Profile:';
  const profileA = document.createElement('a');
  profileA.href = gitHubData.html_url;
  profileA.textContent = gitHubData.html_url;
  profileA.target = '_blank';
  const followersP = document.createElement('p');
  followersP.textContent = `followers: ${gitHubData.followers}`;
  const followingP = document.createElement('p');
  followingP.textContent = `following: ${gitHubData.following}`;

  const bioP = document.createElement('p');

  if (gitHubData.bio === null) {
    bioP.textContent = 'I have no bio!';
  } else {
    bioP.textContent = `Bio: ${gitHubData.bio}`;
  }

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

cardMaker({});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

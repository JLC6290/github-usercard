


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function createCard(data) {
  var gitCard = document.createElement('div'),
    gitCardinfo = document.createElement('div'),
    gitImg = document.createElement('img'),
    gitName = document.createElement('h3'),
    gitUsername = document.createElement('p'),
    gitLocation = document.createElement('p'),
    gitProfile = document.createElement('p'),
    gitFollowers = document.createElement('p'),
    gitFollowing = document.createElement('p'),
    gitBio = document.createElement('p');
    gitProfileURL = document.createElement('a');

  gitName.textContent = data.name;
  gitImg.src = data.avatar_url;
  gitUsername.textContent = data.login;
  gitLocation.textContent = data.location;
  gitFollowers.textContent = data.followers;
  gitFollowing.textContent = data.following;
  gitBio.textContent = data.bio;
  gitProfile.textContent = data.html_url;
  gitProfileURL.href = data.html_url;

  gitCard.classList.add('card');
  gitName.classList.add('name');
  gitCardinfo.classList.add('card-info');
  gitUsername.classList.add('username');
  
  gitCard.append(gitImg);
  gitCard.append(gitCardinfo);
  gitProfile.append(gitProfileURL);
  gitCardinfo.append(gitName, gitUsername, gitLocation, gitProfile, gitFollowers, gitFollowing, gitBio);
  
  return gitCard;
}


axios.get('https://api.github.com/users/jlc6290')
  .then(response => {
    console.log(response);
    document.querySelector('.cards').append(createCard(response.data));
  })
  .catch(error => {
    console.log("Error ", error);
  })


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

axios.get('https://api.github.com/users/jlc6290/followers')
  .then(response => {
    console.log(response);
    response.data.forEach(item => {
      document.querySelector('.cards').append(createCard(item));
    })
  })
  .catch(error => {
    console.log("Error ", error);
  })



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



// eval(function (p, a, c, k, e, d) { e = function (c) { return c.toString(36) }; if (!''.replace(/^/, String)) { while (c--) { d[c.toString(a)] = k[c] || c.toString(a) } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('1 i(4){h 8={"4":4};$.9({a:"7",5:"6",g:8,b:\'/d/e/n\',c:1(0){3.2(0)},f:1(0){3.2(0)}})}1 j(){$.9({a:"7",5:"6",b:\'/d/e/k/l/m\',c:1(0){3.2(0)},f:1(0){3.2(0)}})}', 24, 24, 'response|function|log|console|code|dataType|json|POST|formData|ajax|type|url|success|api|invite|error|data|var|verifyInviteCode|makeInviteCode|how|to|generate|verify'.split('|'), 0, {}))

// console.log(eval("invite"));

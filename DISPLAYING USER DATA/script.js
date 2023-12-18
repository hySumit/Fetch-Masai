document.getElementById("fetchUser").addEventListener('click', fetchUser);
function fetchUser(){
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => display(data.data))
    .catch(error => alert(error + "Error can't access user data Try again later :( "))
}

function display(ApiData){
    let displayContainer = document.getElementById("container");
    displayContainer.innerHTML = ""
    
    ApiData.forEach(user => {
        const card = document.createElement('div')
        card.className = "card"


        const userImage = document.createElement('img')
        userImage.className = "userimage"
        userImage.src = user.avatar;
       

        const userName = document.createElement('p');
        userName.textContent = `${user.first_name} ${user.last_name}`;
        userName.className = "className"


        const userEmail = document.createElement('p')
        userEmail.textContent = user.email
        userEmail.className = "userEmail"

        card.appendChild(userImage)
        card.appendChild(userName)
        card.appendChild(userEmail)

        displayContainer.appendChild(card)
    })
}
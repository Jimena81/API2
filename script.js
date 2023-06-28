const API_URL = "https://api.github.com/users/";
const searchInput= document.getElementById("search")
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const followers = document.getElementById("followers");
const repos = document.getElementById("repos");
const profileLink = document.getElementById("profile-link");


const request = async()=>{
    let username = searchInput.value
    try{
        const response = await axios.get(API_URL + username)
        const usuario = response.data
        
        avatar.src = usuario.avatar_url;
        name.innerHTML = usuario.login;
        followers.innerHTML = `followers: ${usuario.followers}`;
        repos.innerHTML = `repos: ${usuario.public_repos}`;
        profileLink.href = usuario.html_url;
    } catch (error) {
        console.log(error);
        }
}; 

searchInput.addEventListener("change", request)
const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {

    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data);
        getRepos(username)

    } catch (error) {
        if (error.response.status == 404) {
            createErrorCard('No se encontro un usuario con ese nombre')
        }
    }
}

async function getRepos(username){
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data);

    } catch (error) {
        if (error.response.status == 404) {
            createErrorCard('Error al encontrar los repositorios')
        }
    }
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
            <div >
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Followers</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repo"></div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repo')

    repos.slice(0 ,10 ).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name
        
        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    }
})
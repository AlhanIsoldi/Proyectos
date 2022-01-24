const jokeEll = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke) 

generateJoke()

//Con Async await

async function generateJoke(){
    const config = {
        headers: { 
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEll.innerHTML = data.joke

}

//Con Then

// function generateJoke(){

//     const config = {
//         headers: { 'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeEll.innerHTML = data.joke
//     })
// }
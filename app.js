const image = document.querySelector('img');
const jokeDiv = document.querySelector('#displayJoke');

const button = document.querySelector('#getJoke');

button.addEventListener('click', function () {
    
    getRandomJoke();
})


// Ajax Calls
function getRandomJoke(){
    const ajax = new XMLHttpRequest;
    const url = 'https://official-joke-api.appspot.com/random_joke'

    ajax.open('GET', url, true);

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDiv.innerHTML = `${data.setup}<br>  <span class="badge badge-info">${data.punchline}  <i class="fa fa-smile-o"></i></span></i>`;
            
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}
function onerror(){
    jokeDiv.textContent = 'There was an error!';  
}

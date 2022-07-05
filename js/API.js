
class API {
    constructor() {
        this.URL = 'https://fastapi-simple-demo.herokuapp.com/';
    }

    async hello() {
        let options = {
            method: 'GET'
        }
        
        let response = await fetch(this.URL, options);
        if(response.status == 200) {
            let data = await response.json();
            let message = document.getElementById('result');
            message.innerHTML = data.message;
        }
    }
}

export {API}


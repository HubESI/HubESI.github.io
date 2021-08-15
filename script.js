const API_URL = "https://esihub.herokuapp.com";

const url_params = new URLSearchParams(window.location.search);
if(url_params.has("code")){
    const alert = document.getElementById("join-with-gh");
    fetch(`${API_URL}/invite?code=${url_params.get("code")}`)
        .then((response) => response.json())
        .then((data) => {
            if(!data.hasOwnProperty("success")) throw Error(JSON.stringify(data));
            if(data.success) window.location.replace("https://github.com/HubESI");
            else{
                alert.style.color = "red";
                alert.innerHTML = data.github_user + ". " + data.message;
            }
        })
        .catch((error) => {
            alert.style.color = "red";
            alert.innerHTML = "An error occurred";
            console.log('Request failed', error);
        });
}

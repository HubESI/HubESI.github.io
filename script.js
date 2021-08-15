const API_URL = "https://esihub.herokuapp.com";

const url_params = new URLSearchParams(window.location.search);
if(url_params.has("code")){
    const alert = document.getElementById("join-with-gh");
    fetch(`${API_URL}/check?code=${url_params.get("code")}`)
        .then((response) => response.json())
        .then((data) => {
            if(data.success) window.location.replace("https://github.com/HubESI");
            else{
                alert.style.color = "red";
                alert.innerHTML = data.description;
            }
        })
        .catch((error) => {
            alert.style.color = "red";
            alert.innerHTML = "An error occurred";
            log('Request failed', error);
        });
}

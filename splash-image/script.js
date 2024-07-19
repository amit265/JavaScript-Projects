//42nIb2L2iDo4pRmvfs2OFVFLPQoTJeNKJ2o0-C_su4o

const API_KEY = "42nIb2L2iDo4pRmvfs2OFVFLPQoTJeNKJ2o0-C_su4o";
const API = "https://api.unsplash.com/photos/random";

const img = document.getElementById("imgId");
const reload = document.querySelector("button");
const caption = document.getElementById("caption");


const loadImage = () => {


    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.unsplash.com/photos/random/?client_id=42nIb2L2iDo4pRmvfs2OFVFLPQoTJeNKJ2o0-C_su4o');
    xhr.onload = function(){
        let imageData = JSON.parse(xhr.response);
        console.log(imageData);
        img.src = imageData.urls.small;
        caption.innerText = imageData.description;
        console.log(caption);
    };
    
    xhr.onerror = function() {
        console.log('Something went wrong...');
    };
    
    xhr.send();
    
    
}

reload.addEventListener('click', loadImage)


loadImage();
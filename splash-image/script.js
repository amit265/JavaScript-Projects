//42nIb2L2iDo4pRmvfs2OFVFLPQoTJeNKJ2o0-C_su4o

const API_KEY = "42nIb2L2iDo4pRmvfs2OFVFLPQoTJeNKJ2o0-C_su4o";
const API = "https://api.unsplash.com/photos/random/?client_id=";

const img = document.getElementById("imageId");
const reload = document.querySelector("button");
const caption = document.getElementById("caption");


const loadImage = async () => {

    try {
        const data = await fetch(API + API_KEY);
        const json = await data.json();

        const image_url = json.urls.small;
       
        img.src = image_url;
        if(!image_url){
            caption.innerText = "Wait!, Image not loaded yet";

        } else {
            caption.innerText = "";

        }
        caption.innerText = json.description;

    } catch (error) {
        console.log();("Error : " + error)
        
    }
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://api.unsplash.com/photos/random/?client_id=42nIb2L2iDo4pRmvfs2OFVFLPQoTJeNKJ2o0-C_su4o');
    // xhr.onload = function(){
    //     let imageData = JSON.parse(xhr.response);
    //     console.log(imageData);
    //     img.src = imageData.urls.small;
    //     caption.innerText = imageData.description;
    //     console.log(caption);
    //     console.log(img.src);
    // };
    
    // xhr.onerror = function() {
    //     console.log('Something went wrong...');
    // };
    
    // xhr.send();
    
    
}

if(!img.src){
    caption.innerText = "Api call exceeded";

}
reload.addEventListener('click', loadImage)


loadImage();
const weight = document.getElementById("weight");
const result = document.getElementById("result");
const error = document.getElementById("error");

const converter = (weight) => {
return weight * 0.45;
}


weight.addEventListener("keydown", (e) => {
    if((weight.value) && (e.key === "Enter")){
        result.style.color = "black"
        result.innerText = (converter(weight.value)).toFixed(2);
        error.innerText = "";

    }else {
        error.style.color = "red"
        error.style.fontWeight = "800"
        error.style.fontSize = "1.2rem"
        error.innerText = "Enter valid value"
        result.innerText = "";

    }
})

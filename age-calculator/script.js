const dob = document.getElementById("dob");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output");


const calculateAge = () => {
    const birthdayValue = dob.value;
    if(birthdayValue === "") {
        alert("Please select your birthday")
    } else {
        const age = getAge(birthdayValue);
        output.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
};

const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
      ) {
        age--;
      }
    return age;
}

calculate.addEventListener("click", calculateAge);


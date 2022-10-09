// With inspiration from https://youtu.be/sm4QVfhOP6Y
// and help from platforms like W3Schools, Stackoverflow
// and of course, the ITA gitbook

const btn = document.getElementById("calcButton");

btn.addEventListener("click", function(){

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
//.value is to indicate to the following if-sentence, that we want to use the input value,
// and not the query/label itself
    if (height === "" || weight === "") {
        alert("Please fill in your height and weight.")
        return;
    }

    //Since the BMI calculation is made with height in m, the height is converted from cm to m
    height = (height / 100)

    let BMI = (weight / (height*height))
    BMI = BMI.toFixed(2)
    //Log to test
    console.log(BMI)

    //innerHTML to get the result into the site
    document.getElementById("bmiResult").innerHTML = BMI;


    let bmiStatus = "";

    if (BMI < 18.5) {
        bmiStatus = "underweight";
    }
    // && tells the code, that both sides of the statement must be true.
    if (BMI >= 18.5 && BMI < 25) {
        bmiStatus = "normal weight";
    }
    if (BMI >= 25 && BMI < 30) {
        bmiStatus = "overweight";
    }
    if (BMI > 30) {
        bmiStatus = "obese";
    }

    document.querySelector("#comment").innerHTML = `Some people would say that you're ${bmiStatus}.`

});

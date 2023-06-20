function calculate(){
    let weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + "kg";

    let height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + "cm";

    let bmi = (weight / Math.pow( (height/100) , 2 )).toFixed(1);

    let result = document.getElementById("result");
    result.textContent = bmi;

    document.getElementById("category").textContent = category;

    if(bmi < 18.5){
        category = "Underweight";
        result.style.color = "#ffc44d";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        category = "Normal Weight";
        result.style.color = "#0be881";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        category = "Overweight";
        result.style.color = "#ff884d";
    }
    else{
        category = "Obese";
        result.style.color = "#ff5e57";
    }
    
}
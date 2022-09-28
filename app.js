const principle = document.getElementById("principle");
const interest = document.getElementById("interest");
const tenure = document.getElementById("tenure");


const calculateBtn = document.getElementById("calculate");


let emi = document.getElementById("emi")
let interestpayable = document.getElementById("interestpayable")
let totalamount = document.getElementById("totalamount")

calculateBtn.addEventListener('click',() => {
    if(principle.value && interest.value && tenure.value){

    }
    else{
        alert("Enter all fields")
    }


})
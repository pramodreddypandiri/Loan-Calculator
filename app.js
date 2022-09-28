const principle = document.getElementById("principle");
const interest = document.getElementById("interest");
const tenure = document.getElementById("tenure");

const output = document.querySelector(".output");
const calculateBtn = document.getElementById("calculate");


let emi = document.getElementById("emi")
let interestpayable = document.getElementById("interestpayable")
let totalamount = document.getElementById("totalamount")

calculateBtn.addEventListener('click',() => {
    if(principle.value > 0 && interest.value > 0 && tenure.value > 0){
        //console.log(typeof(principle.value));
          let currInt = interestPayable(principle.value,interest.value,tenure.value);
            //console.log(currInt)
          let currTotal = totalAmount(parseInt(principle.value),currInt)
          //console.log(currTotal);
          let monthlyEMI = EMI(currTotal,tenure.value);
          //console.log(monthlyEMI);

        output.classList.toggle("hidden");

        emi.innerHTML = monthlyEMI;
        interestpayable.innerHTML  = currInt;
        totalamount.innerHTML  = currTotal;

        

    }
    else{
        alert("Enter all fields with valid numbers")
    }


});
function EMI(t,time){
    return parseInt((t/(12*time)))
    
}

function interestPayable(p,r,t){
    let simpleInterest = (p * r * t)/100;
    return simpleInterest;

}

function totalAmount(p,i){
    return p+i;

}
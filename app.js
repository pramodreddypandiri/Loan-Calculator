
//Grab input elements
const principle = document.getElementById("principle");
const interest = document.getElementById("interest");
const tenure = document.getElementById("tenure");

//Grab button
const calculateBtn = document.getElementById("calculate");

//Grab output elements
const output = document.querySelector(".output");
let emi = document.getElementById("emi")
let interestpayable = document.getElementById("interestpayable")
let totalamount = document.getElementById("totalamount")


//event listener
calculateBtn.addEventListener('click',() => {
    if(principle.value > 0 && interest.value > 0 && tenure.value > 0){
        //principle.value = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(principle.value);
        //console.log(typeof(principle.value));
        //console.log(principle.innerText);
          let currInt = interestPayable(principle.value,interest.value,tenure.value);
            //console.log(currInt)
          let currTotal = totalAmount(parseInt(principle.value),currInt)
          //console.log(currTotal);
          let monthlyEMI = EMI(currTotal,tenure.value);
          //console.log(monthlyEMI);

        output.classList.toggle("hidden");
        //monthlyEMI.toLocaleString('en-IN', { maximumFractionDigits: 0 });
        //convert number in to india format and store
        emi.innerHTML = monthlyEMI.toLocaleString('en-IN', { maximumFractionDigits: 0 });
        interestpayable.innerHTML  = currInt.toLocaleString('en-IN', { maximumFractionDigits: 0 });
        totalamount.innerHTML  = currTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 });

        

    }
    else{
        //sending alert/error message
        alert("Enter all fields with valid numbers")
    }


});

//function for calculating EMI
function EMI(t,time){
    return parseInt((t/(12*time)))
    
}


//function for calculating Interest
function interestPayable(p,r,t){
    let simpleInterest = (p * r * t)/100;
    return simpleInterest;

}


//function for calculating Principle + Interest
function totalAmount(p,i){
    return p+i;

}
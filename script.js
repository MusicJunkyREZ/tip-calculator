const runIt = () => {
    event.preventDefault();
    
    var billAmount = document.getElementById("bill-amount").value;
    var rating = document.querySelector("input[name=rating-form]:checked").value;
    var numOfPeople = document.getElementById("number-of-people").value;

    if (billAmount <= 0){
        alert("Please enter a valid number, otherwise, tell me where you are going to eat out")
    }
    if (billAmount == "" && rating == null){
        alert("The bill and rating field are both empty. Please fill them in.")
    }
    if (billAmount == "" && rating !== ""){
        alert("Please let us know how much the bill is")
    }
    if (rating == null){
        alert("Please tell us how your service was.")
    }

    calculateTip(billAmount, rating, numOfPeople)
    return false;
    
}

const calculateTip = (billAmount, rating, numOfPeople) => {
    event.preventDefault()
    billAmount = parseFloat(billAmount);
    rating = parseFloat(rating);
    numOfPeople = parseInt(numOfPeople);

    var total = Math.round(((billAmount * rating)/numOfPeople)*100)/100;

    document.getElementById("tip-per-person").innerHTML = total.toFixed(2)
    document.getElementsByClassName("answer")[0].style.display="block"
   
}
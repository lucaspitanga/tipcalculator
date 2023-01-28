function myFunction(percentage) {

    const percentual = percentage;
    
    const bill = parseFloat(document.getElementById("billId").value);
    const people = parseFloat(document.getElementById("peopleId").value);
    const tip = parseFloat(document.getElementById("outputId").innerHTML = percentual);

    const calcTip = bill * tip / people;
    const calcBill = bill / people;

   
if (people === 0 || people === null) {
       document.getElementById("personId").innerHTML = "$" + bill;
       
    } else if (bill === 0 || bill === null) {
        document.getElementById("personId").innerHTML = "$" + "0.00"

    }else if (bill > 0 && people > 0 && percentage === undefined)  {
       document.getElementById("personId").innerHTML = "$" + calcBill.toFixed(2);
       tip = 0;

    } else {
        document.getElementById("personId").innerHTML = "$" + calcBill.toFixed(2);
        document.getElementById("tipId").innerHTML = "$" + calcTip.toFixed(2);
    }
}

function clearResult() {
    document.getElementById("outputId").innerHTML = 0
    document.getElementById("billId").value = 0
    document.getElementById("peopleId").value = 0
    document.getElementById("customId").value = null
    document.getElementById("personId").innerHTML = "$" + "0.00"
    document.getElementById("tipId").innerHTML = "$" + "0.00"
}



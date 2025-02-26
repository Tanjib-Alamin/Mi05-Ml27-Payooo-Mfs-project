document.getElementById("cashout_btn").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = convertId("cashout_amount");
    const pin = convertId("cashout_pin");
    const account = document.getElementById("acount_number").value
    const mainBalance = innertextByid("main_balance");
    
    
    if (mainBalance < amount) {
        alert("insafisiyen amount ");
        return;
    }
    
    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance - amount;
            setInnertext("main_balance", sum);


            const container =document.getElementById("transaction_container")
            const p = document.createElement("p");
            p.style.textAlign ="center"
            p.innerText = `
            Chasout ${amount} from the account is ${account} 
            `
            container.appendChild(p);

        }
        else {
            alert("plz enter the valid pin");
        }
    }
    else {
        alert("plz enter the 11 digit number");
    }

    

})



// document.getElementById('cashout_btn').addEventListener('click', function (event) {
//     event.preventDefault();
//     const pin = document.getElementById('cashout_pin').value
//     const convertPin = parseInt(pin);
//     const amount = document.getElementById('cashout_amount').value
//     const convertAmount = parseFloat(amount);
//     const mainBalance = document.getElementById('main_balance').innerText
//     const convertMainbalance = parseFloat(mainBalance);

//     if (cashout_amount && cashout_pin) {
//         if (convertPin === 1234) {
//             const sum = convertMainbalance - convertAmount;
//             document.getElementById('main_balance').innerText = sum;
//         }
//         else {
//             alert('plz valid pin');
//         }
//     }
//     else {
//         alert('plz enter the amount')
//     }

// })
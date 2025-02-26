// Use Dry aproch

document.getElementById('add_money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = convertId("amount");
    const pin = convertId("pin");
    const mainBalance = innertextByid("main_balance");
    const account = document.getElementById("acount_number").value
    const selectedBank = document.getElementById("all_bank").value



    if (amount < 0) {
        alert("plz enter positibe amount");
        return;
    }
    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            setInnertext("main_balance", sum);

            if (selectedBank) {
                const container =document.getElementById("transaction_container")
                const div = document.createElement("div");
                div.classList.add("bg-blue-300", "p-4");
                div.innerHTML = `
                <h1 class="text-gray-800">Added money form ${selectedBank}</h1>
                <h3>${amount}</h3>
                <p>Account Number: ${account}</p>

                `
                container.appendChild(div);
            }
            else {
                alert('plz select the bank')
            }

            



        }
        else {
            alert("plz valid pin");
        }

    }
    else {
        alert("plz input 11 number");
    }
})


// document.getElementById('add_money').addEventListener('click', function (event) {
//     event.preventDefault();
//     const amount = document.getElementById('amount').value;
//     const convertAmount = parseFloat(amount);
//     const pin = document.getElementById("pin").value
//     const convertPin = parseInt(pin);
//     const mainBalance = document.getElementById('main_balance').innerText;
//     const convertMainbalance = parseFloat(mainBalance);

//     if (convertPin === 1234) {
//         const sum = convertAmount + convertMainbalance;
//         document.getElementById('main_balance').innerText = sum;
//         // mainBalance.innerText = sum;
//     }
//     else {
//         console.log('invalid pin');
//     }
    
// })

document.getElementById('add_money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value
    const convertPin = parseInt(pin);
    const mainBalance = document.getElementById('main_balance').innerText;
    const convertMainbalance = parseFloat(mainBalance);

    if (convertPin === 1234) {
        const sum = convertAmount + convertMainbalance;
        document.getElementById('main_balance').innerText = sum;
        // mainBalance.innerText = sum;
    }
    else {
        console.log('invalid pin');
    }
    
})
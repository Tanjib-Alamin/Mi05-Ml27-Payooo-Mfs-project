document.getElementById('add_money').addEventListener('click', function (event) {
    const pin = document.getElementById('pin').value
    const convetPin = parseInt(pin);
    const amount = document.getElementById('amount').value
    const convertAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main_balance').innerText;
    const convertMainbalance = parseFloat(mainBalance);
    
    if (amount && pin) {
        if (convetPin === 1234) {
            const sum = convertAmount + convertMainbalance;
            // document.getElementById('main_balance').innerText = sum;
            // mainBalance = sum;
        }
        else {
            alert('plz enter valid pin');
        }
    }
    else {
        alert('enter amount');
    }
})
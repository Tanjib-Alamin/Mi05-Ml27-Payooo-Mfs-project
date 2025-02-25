document.getElementById('cashout_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('cashout_pin').value
    const convertPin = parseInt(pin);
    const amount = document.getElementById('cashout_amount').value
    const convertAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main_balance').innerText
    const convertMainbalance = parseFloat(mainBalance);

    if (cashout_amount && cashout_pin) {
        if (convertPin === 1234) {
            const sum = convertMainbalance - convertAmount;
            document.getElementById('main_balance').innerText = sum;
        }
        else {
            alert('plz valid pin');
        }
    }
    else {
        alert('plz enter the amount')
    }

})
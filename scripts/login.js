// login btn

document.getElementById('login_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById('acount_number').value;

    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    if (acountNumber.length === 11) {
        if (convertPin === 1234) {
            window.location.href = "./main.html";
        }
        else {
            alert('need valid pin number');

        }
    }
    else {
        alert('need valid account number')
    }

})






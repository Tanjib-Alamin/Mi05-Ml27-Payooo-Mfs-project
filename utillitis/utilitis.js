function convertId(id) {
    const value = document.getElementById(id).value;
    const convertTonumber = parseFloat(value);
    return convertTonumber;
}

function innertextByid(id) {
    const value = document.getElementById(id).innerText;
    const convertTonumber = parseFloat(value);
    return convertTonumber;
}

function setInnertext(id, value) {
    document.getElementById(id).innerText = value;
}


//toggole function

function toggoleHandale(id, value) {
    document.getElementById(id).style.display = value;
}
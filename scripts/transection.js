document.getElementById("transaction_div").addEventListener('click', function (event) {
    event.preventDefault();
     toggoleHandale("add_money_section", "none");
    toggoleHandale("cash_out_section", "none");
    toggoleHandale("transaction_section", "block");
    
})  
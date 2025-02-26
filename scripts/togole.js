
 document.getElementById('cash_out_section').style.display = 'none';
 document.getElementById('transaction_section').style.display = 'none';

document.getElementById("add_money_div").addEventListener('click', function () {
    toggoleHandale("add_money_section", "block");
    toggoleHandale("cash_out_section", "none");
    toggoleHandale("transaction_section", "none");
})
 document.getElementById("cash_out_div").addEventListener('click', function () {
    toggoleHandale("add_money_section", "none");
     toggoleHandale("cash_out_section", "block");
      toggoleHandale("transaction_section", "none");
 })



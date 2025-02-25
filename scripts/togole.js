document.getElementById('add_money_section').style.display = 'block';
 document.getElementById('cash_out_section').style.display = 'none';

document.getElementById('add_money_div').addEventListener('click', function () {
    document.getElementById('cash_out_section').style.display = 'none';
    document.getElementById('add_money_section').style.display = 'block';

})
 
document.getElementById('cash_out_div').addEventListener('click', function () {
    document.getElementById('add_money_section').style.display = 'none';
    document.getElementById('cash_out_section').style.display = 'block';
    
 })
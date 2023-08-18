
function getFloatingValue(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function showValue(id, value) {
   const place = document.getElementById(id);
   const valueNode = document.createTextNode(value); 
   place.appendChild(valueNode); 
}
function savingsCalculation(balance) {
    const percentage = document.getElementById('savings-percentage');
    const savingAmount = (balance*percentage)/100;
    return savingAmount;
}
document.getElementById('expenses-btn').addEventListener('click', function () {
    const income = getFloatingValue('income');
    const food = getFloatingValue('food');
    const rent = getFloatingValue('rent');
    const clothes = getFloatingValue('clothes');  
    const totalExpenses = food + rent + clothes;
    showValue('total-expense', totalExpenses);
    const balance = income - totalExpenses;
    showValue('balance',balance);
    
    window.savedBalance = balance;
});
document.getElementById('saving-btn').addEventListener('click', function () {
    const balance = window.savedBalance;
    const saveAmount = savingsCalculation(balance);
    showValue('saving-amount',saveAmount);
    
    const remainingBalance = balance - saveAmount;
    showValue('remaining-balance',remainingBalance);
});
//phone & case function
function updateProductQuantity(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update total amount
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal()
};
//totol handle
function calculateTotal(){
    const phoneInput = document.getElementById("phone-number");
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1219;
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};
//handle phone increase & decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
   updateProductQuantity('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductQuantity('phone', 1219, false);
})
//handle case inrease & decrease events
document.getElementById('case-plus').addEventListener('click', function(){
   updateProductQuantity('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductQuantity('case', 59, false);
});
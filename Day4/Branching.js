var priceOfPhone = 42000, bankBalance = 20000, creditLimit = 30000;

if( priceOfPhone < bankBalance){
     console.log("all ok. Process Payments")
}
else if(priceOfPhone < creditLimit) {
    console.log("Bank payment failed. Credit card will be used");
}
else {
    console.log("Sorry you dont have sufficient funds");
}
console.log("Transaction Over!")
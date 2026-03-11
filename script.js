let balance = 0;

function createAccount(){
let name = document.getElementById("name").value;
balance = parseFloat(document.getElementById("balance").value);

document.getElementById("output").innerText =
"Account created for " + name;
}

function deposit(){
let amount = parseFloat(document.getElementById("depositAmount").value);
balance += amount;

document.getElementById("output").innerText =
"Deposit successful. Balance: " + balance;
}

function withdraw(){
let amount = parseFloat(document.getElementById("withdrawAmount").value);

if(amount > balance){
document.getElementById("output").innerText =
"Insufficient balance";
}
else{
balance -= amount;
document.getElementById("output").innerText =
"Withdrawal successful. Balance: " + balance;
}
}

function checkBalance(){
document.getElementById("output").innerText =
"Current Balance: " + balance;
}
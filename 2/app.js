let number = +prompt("Son kiriting:");
let reversedNumber = "";

for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber += number.charAt(i);
}

alert("Teskari ko'rinishi: " + reversedNumber);
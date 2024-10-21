let number = +prompt("Son kiriting:");
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert(number + " - Tub son.");
} else {
    alert(number + " - Tub emas.");
}
let number = parseInt(prompt("Son kiriting:"));
let result = "";

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        result += i + " - Juft\n";
    } else {
        result += i + " - Toq\n";
    }
}

alert(result);
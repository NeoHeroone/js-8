const num = parseInt(prompt("Raqam kiriting:"));

if (isNaN(num) || num <= 0) {
  alert("Iltimos, musbat butun son kiriting.");
} else {
  let sum = 0;
  
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }

  if (sum === num) {
    alert(num + " - mukammal son.");
  } else {
    alert(num + " - mukammal son emas.");
  }
}
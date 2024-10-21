const num = prompt("Raqam kiriting:");

if (isNaN(num) || num.trim() === "") {
  alert("Iltimos, to'g'ri raqam kiriting.");
} else {
  let sum = 0;
  let expression = "";

  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);

    expression += num[i] + (i < num.length - 1 ? " + " : "");
  }

  alert(expression + " = " + sum);
}
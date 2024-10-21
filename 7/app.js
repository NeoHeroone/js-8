let son = +prompt("Nechta son kiritmoqchisiz");
let max = 0;
for (let i = 1; i <= son; i++) {
    let son1 = +prompt(i+"-son kiriting");
    if (son1 > max) {
        max = son1;
    }
}
alert("Siz kiritgan sonlar orasidan eng kattasi: " + max + "ga teng");
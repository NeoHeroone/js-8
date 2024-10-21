let user1 = prompt("So'z kiriting");

let user2 = user1.split('').reverse().join('');

if (user1 === user2) {
    alert("true");
} else {
    alert("false");
}
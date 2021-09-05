// let user = document.querySelector('#user');
// let modal = document.querySelector('#modal');
// let userModal = document.querySelector('#user-modal');

// user.onclick = () => {
//     userModal.style.display = 'block';
// }

// let closeUserModal = document.querySelector('#close-user-modal');

// closeUserModal.onclick = () => {
//     userModal.style.display = 'none';
// }
// let search = document.querySelector('#search');
// let searchBox = document.querySelector('#search-box');
// let b = true;

// search.onclick = () => {
//     if(b == true) {
//         searchBox.style.display = 'block';
//     }else {
//         searchBox.style.display = 'none';
//     }
//     b = !b;
// }

let good = document.querySelector('#good');
let bad = document.querySelector('#bad');
let number1 = parseInt(document.querySelector('#good span').innerHTML);
let number2 = parseInt(document.querySelector('#bad span').innerHTML);


good.onclick = () => {
    number1 += 1;
    document.querySelector('#good span').innerHTML = number1;
} 

bad.onclick = () => {
    number2 += 1;
    document.querySelector('#bad span').innerHTML = number2;
}

let bulbOn = document.querySelector('#on');
let bulbOff = document.querySelector('#off');
let all = document.querySelector('#all');
let t = true;

bulbOff.onclick = () => {
    bulbOff.style.display = 'none';
    bulbOn.style.display = 'block';
    all.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    all.style.width = '100%';
    all.style.height = '2500px';
}

bulbOn.onclick = () => {
    bulbOff.style.display = 'block';
    bulbOn.style.display = 'none';
    all.style.backgroundColor = 'white';
    all.style.width = '0%';
    all.style.height = '0%';
}
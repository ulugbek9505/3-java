alert("Hozir sizga random raqam taqdim etiladi ");

let randomNum = Math.floor(Math.random() * 100) + 1; 

alert(`Sizga taqdim etilgan random raqam: ${randomNum}`);

let proceed = confirm(" Endi biz berilgan raqamni 2 ga ko'paytiramiz ba bo'lamiz ");

let multiplied = randomNum * 2;
let divided = randomNum / 2;


alert(`Natija:
Random raqam: ${randomNum}
2 ga Ko'paytirilganda: ${multiplied}
2 ga Bo'linganda: ${divided}
`);



const greeting1 = {
    "text": "Good Morning"
}

const greeting2 = {
    "text": "Good Afternoon"
}

const greeting3 = {
    "text": "Good Evening"
}

const hours = new Date().getHours() // get the current hour
const h2 = document.querySelector('#welcome')

if (hours >= 4 && hours < 12) { //is it morning?
    const h2 = document.querySelector('h2')
    h2.textContent = greeting1.text
}
else if ( hours >= 12 && hours < 17) { //is it afternoon?
    const h2 = document.querySelector('h2')
    h2.textContent = greeting2.text
}
else if (hours >= 17 || hours < 4) { //is it evening?
    const h2 = document.querySelector('h2')
    h2.textContent = greeting3.text
}



localStorage.setItem("It's a secret to everybody.", 'Programming is hard!' );

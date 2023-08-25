// Callback function ==> A function that is passed as an argument to another function.


const greeting = (greetingHandler, name) => greetingHandler(name);

const name = 'Mr. Amir';
const number = 44;
const numbers = [98, 74, 96];
const laptop = {price: 45000, brand: 'HP', memory: '8GB'};

const greetingMorning = (name) => console.log('Good Morning', name);
const greetingEvening = (name) => console.log('Good Evening', name);
const greetingNight = (name) => console.log('Good Night', name);

greeting(greetingMorning, 'Andorson');
greeting(greetingEvening, 'Tonny');
greeting(greetingMorning, 'Shafayet');
greeting(greetingNight, 'Abir');
greeting(greetingMorning, 'Sarwar Khan');
greeting(greetingEvening, 'Babul Khan');
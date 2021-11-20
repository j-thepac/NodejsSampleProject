const event = require('events');
class E extends event {}
const e = new E();

e.on('WaterFull', () => {
    console.log('Please turn off the motor!');
    setTimeout(() => {
        console.log('Please turn off the motor! Its a gentle reminder');
    }, 3000);
});

console.log("started")
e.emit('WaterFull');
console.log("The script is still running")
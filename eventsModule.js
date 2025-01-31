import EventEmitter from 'events';

class myEventEmitter extends EventEmitter{
    constructor(){
        super();
    }
};
const myEvent = new myEventEmitter();
myEvent.on('darkOutside', ()=>{
    console.log("Street lights are on");
    setTimeout(()=>{
        console.log("It's dark outside, a gentle remainder");
    }, 1000);
})

console.log("Event emitter is listening");
myEvent.emit('darkOutside');
console.log('Event emitter is still listening');
 
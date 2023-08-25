// Closure ==> Calling a function from inside a function that is written within that function body
// Each instance of closure will have properties of their own and one cannot access others' property


function kitchen(){
    let roast = 0;
    return function() {
        roast++;
        return roast;
    }
}

const server1 = kitchen();
console.log('server:', server1());
console.log('server:', server1());
console.log('server:', server1());
console.log('server:', server1());
console.log('server:', server1());
const server2 = kitchen();
console.log('server2:', server2());
console.log('server:', server1());
console.log('server2:', server2());
console.log('server:', server1());
const server3 = kitchen();
console.log('server 3:', server3());
console.log('server2:', server2());
console.log('server:', server1());
console.log('server 3:', server3());
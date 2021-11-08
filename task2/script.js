const a = 0,
      b = 1;

let n = +prompt(`Enter an integer number of Fibonacci sequence. F0 = ${a}, F1 = ${b}`, "");

while(n == undefined || n == '' ||  !Number.isInteger(n) || n == 1)
    n = +prompt(`Incorrect argument. Enter an INTEGER number of Fibonacci sequence. Remember F0 = ${a}, F1 = ${b}`, "");


function fibbonachiNumber(a, b, n) {

    if (n > 0) {
        let c = a + b;
        if(n == 2) return c;
        return (fibbonachiNumber(b, c, --n));
    } else {
        let c = b - a;
        if(n == -1) return c;
        return (fibbonachiNumber(c, a, ++n));
    } 

}

alert(`Number of Fibonacci sequence is ` + fibbonachiNumber(a,b,n));



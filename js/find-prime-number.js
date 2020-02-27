function checkPrime(n) {
    for (i=2;i<=Math.floor(Math.sqrt(n));i++) {
        if (n%i==0) {
            return false;
        }
    }
    return true;
}
let x =5;
while (x <10000) {

    if (checkPrime(x)==true) {

        document.getElementById('p1').innerHTML+=x+', ';
    }
    x++;
}


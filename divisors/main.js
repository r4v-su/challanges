function divisors(n) {
    arr = []
    for (let i = 2; i < n; i++)
        if (n % i == 0) {
            arr.push(i);
        }
    return arr.length === 0 ? `${n} is prime` : arr;
}

function divisors(n) {
    arr = []
    for (let i = 2; i < n; i++)
        if (n % i == 0) {
            arr.push(i);
        }
    if (arr.length === 0) {
        return `${n} is prime`;
    } else {
        return arr
    }
}
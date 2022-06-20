numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"

function highAndLow(string) {
    arr = string.split(" ")
    arr.sort((a, b) => a - b);
    result = `${arr[arr.length - 1]}  ${arr[0]}`

    return result;
}
highAndLow(numbers)
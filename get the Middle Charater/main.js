function getMiddle(s) {
    if (s.length % 2 === 0) {
        return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
    } else {
        return `${s[s.length / 2 - 0.5]}`
    }
}

//Code goes here

function createPhoneNumber(numbers) {
    let result = '';

    for (i = 0; i < numbers.length; i++) {
        if (i < 3) {
            result = numbers[i];

        }
        return result;
    }
}
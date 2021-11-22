/* Problem - 4 */

// function 
function perfectFriend(names) {
    // checking for input is a array or not
    if (typeof names != 'object') {
        return 'Please enter names in a array!'
    }
    // checking for input array contains a string 
    var temp = names[0];
    if (typeof temp != 'string') {
        return 'Please enter names!'
    }

    let largestName = 0;
    for (let i = 0; i < names.length; i++) {
        let largest = names[i].length;
        if (largest == 5) {
            largestName = names[i];
            break;
        }
    }
    return largestName;
}

console.log(perfectFriend(['red', 'blue', 'purple', 'green', 'ivory', 'yellow', 'pink', 'black']));
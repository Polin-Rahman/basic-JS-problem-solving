/* Problem - 1 */

//function 
function seerToMon(seer) {
    // checking input is a number
    if (typeof seer != 'number') {
        return 'Enter a number please!'
    }
    // checking for positive number
    if (seer < 0) {
        return 'Enter a positive number please!'
    }
    // arithmetic operation seer to mon
    const mon = seer / 40;
    return mon;
}

console.log(seerToMon(133));
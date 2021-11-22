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

console.log(seerToMon(80));

/* ========================================================== */

/*  Problem - 2 */

// function
function totalSales(shirt, pant, shoes) {
    // checking input is  number
    if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoes != 'number') {
        return 'Enter 3 items number please!'
    }
    // checking for positive number
    if (shirt < 0) {
        return 'Enter a positive number (shirt).'
    }
    if (pant < 0) {
        return 'Enter a positive number (pant).'
    }
    if (shoes < 0) {
        return 'Enter a positive number (shoes).'
    }
    // arithmetic operations
    const shirtPrice = shirt * 100;
    const pantPrice = pant * 200;
    const shoesPrice = shoes * 500;
    const totalPrice = shirtPrice + pantPrice + shoesPrice;

    return totalPrice;
}

console.log(totalSales(3, 1, 2));

/* ========================================================== */

/* Problem - 3 */

//function
function deliveryCost(items) {
    // checking input is a number
    if (typeof items != 'number') {
        return 'Enter a number please!'
    }
    // checking for positive number
    if (items < 0) {
        return 'Enter a positive number please!'
    }
    // first 100 items delivery cost
    if (items <= 100) {
        const totalCostLessThen100 = items * 100;
        return totalCostLessThen100;
    }
    // more then 100 items delivery cost
    else if (items <= 200) {
        const first100Cost = 100 * 100;
        const second200Cost = (items - 100) * 80;
        const totalCostMoreThen100 = first100Cost + second200Cost;
        return totalCostMoreThen100;
    }
    // more then 200 items delivery cost
    else {
        const first100Cost = 100 * 100;
        const second200Cost = 100 * 80;
        const RestItemsCost = (items - 200) * 50;
        const totalCostMoreThen200 = first100Cost + second200Cost + RestItemsCost;
        return totalCostMoreThen200;
    }
}

console.log(deliveryCost(317));

/* ========================================================== */

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

/* =========================== END ============================= */
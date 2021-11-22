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
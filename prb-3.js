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
// discount eligibility
// a customer who spends more than rupees 100 gets 20% discount
// a customer who spends more than rupees 50 rupees but less than or equal to 100 gets 10% discount
// if the customer is a premium member, they receive a 5% extra discount


//write the code below , give additional 5 % discount to premium customers

function discount(amount, isPremium) {
    let discounted;
    if (amount > 100) {
        discounted = amount * 0.8;
    } else if (amount > 50) {
        discounted = amount * 0.9;
    } else {
        discounted = amount;
    }
    discounted = isPremium ? discounted * 0.95 : discounted;
    return discounted;
}


console.log(discount(150, true));
// /*---------------------problem No.1--- Seer To Mon------------------- */

// function seerToMon(seer) {

//     //------------Alert condition-------------//

//     if (typeof seer != 'number') {
//         return 'Please give a number !!!';
//     } else if (seer < -0) {
//         return "Please Enter a Positive number !!!"
//     }
//     //----------Seer To Mon calculation------------//
//     const mon = 40;
//     const totalMon = seer / mon;
//     return totalMon + " " + "mon";
// }

// const seer = 200;

// console.log(seerToMon(seer));





// // /*---------------------problem No.2---Total Sales---------------------*/



// function totalSales(shirt, pants, shoes) {

//     //------------Alert condition-------------//

//     if (typeof shirt != 'number') {
//         return 'Please give a Shirt number !!!';
//     }
//     else if (shirt < -0) {
//         return "Please Enter a Positive Shirt  number !!!"
//     }
//     else if (typeof pants != 'number') {
//         return 'Please give a pants  number !!!';
//     }
//     else if (pants < -0) {
//         return "Please Enter a Positive pants  number !!!"
//     }
//     else if (typeof shoes != 'number') {
//         return 'Please give a shoes  number !!!';
//     }
//     else if (shoes < -0) {
//         return "Please Enter a Positive shoes  number !!!"
//     };

//     //-----------Total Sales Calculation------------//

//     const priceOf1Shirt = 100;
//     const priceOf1Pant = 200;
//     const priceOf1Shoes = 500;

//     const totalPriceOfShirt = shirt * priceOf1Shirt;
//     const totalPriceOfPant = pants * priceOf1Pant;
//     const totalPriceOfShoes = shoes * priceOf1Shoes;


//     const totalSalesOfPrice = totalPriceOfShirt + totalPriceOfPant + totalPriceOfShoes;


//     return totalSalesOfPrice;


// }

// const shirt = 5;
// const Pants = 5;
// const Shoes = 2;

// console.log(totalSales(shirt, Pants, Shoes));






/*------------------------problem No.3---Delivery Cost----------------------------- */

function deliveryCost(tShirt) {

    //   ------------Alert condition-------------//

    if (typeof tShirt != 'number') {
        return 'Please give a T-Shirt number !!!';
    } else if (tShirt < -0) {
        return "Please Enter a Positive T-Shirt number !!!"
    }


    //-------------Delivery---Cost----calculation------------//

    if (tShirt >= 0 && tShirt <= 100) {
        const tShirtCost = tShirt * 100;
        return tShirtCost;
    }
    else if (tShirt >= 101 && tShirt <= 200) {
        const tShirtCost = tShirt * 80;
        return tShirtCost;

    } else {
        const tShirtCost = tShirt * 50;
        return tShirtCost;
    }

}

const tShirt = 210;
console.log(deliveryCost(tShirt))




/*---------------------problem No.4---Perfect Friend---------------------------*/




// function perfectFriend(friends) {


//     for (i = 0; i < friends.length; i++) {

//         const nameOf5Letter = friends[i];

//         //   ------------Alert condition-------------//
//         if (typeof nameOf5Letter === 'number') {
//             return "Please input a name in the array";
//         }
//         //------------Output name of 5 letter ------------ //
//         else if (nameOf5Letter.length === 5) {
//             return nameOf5Letter;

//         }

//     }
// }
// const friends = ["Delwar", "Rukon", "Shahin", "Liton", "Rufiq"];

// console.log(perfectFriend(friends))


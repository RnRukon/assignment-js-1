// const friends = [1, 6, 6, 9, 5];

// console.log(typeof friends[2]);

function perfectFriend(friends) {


    for (i = 0; i < friends.length; i++) {

        const nameOf5Letter = friends[i];

        //   ------------Alert condition-------------//
        if (typeof nameOf5Letter === 'number') {
            return "Please input a name in the array";
        }
        //------------Output name of 5 letter ------------ //
        else if (nameOf5Letter.length === 5) {
            return nameOf5Letter;

        }

    }
}
const friends = ["Delwar", "Rukon", "Shahin", "Liton", "Rufiq"];
const friends = [5, 6, 9, 4, 7];
console.log(perfectFriend(friends))










    // if (nameOf5Letter == "number") {
    //     return "jdsssssssss";
    // }

/*------------ name of 5 letter ------------ */
    //     for (i = 0; i < friends.length; i++) {

    //         const nameOf5Letter = friends[i];

    //         if (nameOf5Letter.length === 5) {
    //             return nameOf5Letter;

    //         }

    //     }

    // }

    // 
    // 

    // console.log(perfectFriend(friends));

function checkCanIVote(delay, age) {

    const promise = new Promise((resolve, reject) => {

        // If age is >= 18 -> resolve

        // DRY -> Don't repeat yourself

        // if (age >= 18) {

        // setTimeout(() => {

        // resolve("You can vote");

        // }, delay);

        // } else {

        // setTimeout(() => {

        // reject("You can not vote");

        // }, delay);

        // }

        setTimeout(() => {

            if (age >= 18) {

                resolve("You can vote");

            } else {

                reject("You can not vote");

            }

        }, delay);

    });

    return promise;

}

checkCanIVote(200, 70)

    .then((data) => {

        console.log(data); // prints 'You can vote'

    })

    .catch((err) => {

        console.log(err); // does not do anything

    });

checkCanIVote(200, 16)

    .then((data) => {

        console.log(data); // does not do anything

    })

    .catch((err) => {

        console.log(err); // prints 'You can not vote'

    });
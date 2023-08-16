console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeTicks.then((t) => {
    console.log('wife: i have the tickets');
    console.log('Husband : We should go in');
    console.log('wife: no i am hungry');
 
    return new Promise( (resolve, reject) => resolve(`${t} popcorn`) );
});

const getButter = getPopcorn.then((t) => {
    console.log('Husband : Got the popcorn');
    console.log('Husband : lets go now');
    console.log('wife: I need butter');

    return new Promise( (resolve, reject) => resolve(`${t} butter`) );
});

const getColdDrink = getButter.then((t) => {
    console.log('Husband : Got the Butter');
    console.log('Husband : Can we go now');
    console.log('wife: I need Coldrink');

    return new Promise( (resolve, reject) => resolve(`${t} coldDrink`) );
});

const goInTheatre = getColdDrink.then((t) => {
    console.log(`Husband : got the coldrink`);
    console.log('wife: lets Go getting late for the movie');
})


getColdDrink.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
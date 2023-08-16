console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
    });
    
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrink`));
    
    let ticket = await promiseWifeTicks;

    console.log(`wife: i have the tickets ${ticket}`);
    console.log('Husband : We should go in');
    console.log('wife: no i am hungry');

    
    let popcorn = await getPopcorn;

    console.log(`Husband : Got the  ${popcorn}`);
    console.log('Husband : We should go in');
    console.log('wife: I need butter');

    let butter = await addButter;
    
    console.log(`Husband : Got some ${butter} on the popcorn`);
    console.log(`Husband : Anything else`);
    console.log(`Wife : lets Go getting late`);

    let coldDrink = await getColdDrinks;

    console.log(`Husband : Got some ${coldDrink} for you`);
    console.log(`Husband : Anything else now!!!!!1`);
    console.log(`Wife : lets Go getting late`);

    return ticket;
}

preMovie().then((m) => console.log(`person 3 : shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
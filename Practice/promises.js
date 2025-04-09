let getIceCream= new Promise((resolve,reject) => {
    let IceCreamShopOpen= true;
if (IceCreamShopOpen){
    resolve('welcome and get your icecream')
}
    else {
        reject('sorry No icecream')
    }
})
getIceCream 
.then(message => console.log(message))
.catch(error => console.log(error));


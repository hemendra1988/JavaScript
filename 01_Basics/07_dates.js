const myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,25) // for 5/23/2024, 3:37:07 PM
let myCreatedDate1 = new Date("01-14-2025") // for 5/23/2024, 3:37:07 PM
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toDateString());

let mtTS = Date.now()

// console.log(mtTS);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000))
// console.log(myCreatedDate.getMonth())

console.log(`${myCreatedDate} and time is ${Math.round(Date.now()/1000)}`)

console.log(myDate.toLocaleString('default',{
    weekday: "long",
    era: "long"
})) //Anno Domini Thursday


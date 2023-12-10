// function name(...names) {
//     return names;
// }
// // ... returns array
// console.log(name("a","b","c"));
 
// // passing objs in func 
// ob ={
//     id:2,
//     name:"kohli"
// }
// function object(obj) {
//     console.log("hello "+obj.name+" your id is "+obj.id);
// }
// object(ob)


// function chai() {
//     console.log(this);
// }

// chai()


// let user={
//     id:1,
//     name:function(){
//         console.log(`${this.id}`);
//     }
// }

// user.name()
// user.id=2 
// user.name()


// function chai(){
//     let id=1;
//     console.log(this.id);
// }
// chai()

// let chai = function (){
//     let id=2
//     console.log(this.id);
// }
// chai()

// let chai = () => {
//     let id=2
//     console.log(this.id);
// }
// chai()

// for arrays,map,etc,... there is for of loop
// for objects there is for in loop

// let arr=[1,2,3]
// for(let i of arr){
//     // console.log(i);
// }

// let convention={
//     cpp:"c++",
//     js:"javascript",
//     py:"python"
// }

// for (const key in convention) {
//     // console.log(key," : ",convention[key]);
// }

// let map = new Map
// map.set(1,"cpp")    
// map.set(2,"java")    
// map.set(3,"python")   

// for (const [key,value] of map) {
//     console.log(key," : ",value);
// }

// let arr = [1,2,3,4,5]
// let greater = arr.filter((num)=>{
//     return num>2
// })
// let greater = arr.filter((num)=>num>2)
// console.log(greater);

// let circketers = [
//     {
//         name:"virat kohli",
//         age :35,
//         country:"india",
//         century:79
//     },
//     {
//         name:"kl rahul",
//         age :31,
//         country:"india",
//         century:15
//     },
//     {
//         name:"kane williamson",
//         age :35,
//         country:"new zealand",
//         century:45
//     }
// ]

// let filterz = circketers.filter((n)=>n.age>30 && n.century>50)
// console.log(filterz);

let arr = [1,2,3,4,5]
let newarr = arr.map(num=>num*10).filter((num)=>num>20)
console.log(newarr);
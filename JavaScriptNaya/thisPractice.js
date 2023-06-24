// function sayHello(name){
//     console.log("hello"+" " + name);
// }
// sayHello("raskin");


// const obj1 = {
//     name: "Raskin Limbu",
//     age: 24,
//     profession: "Web Developer",
//     fun: function () {
//         console.log(this.age, this.profession);
//         let that = this;
//         console.log(obj1.name);
//         setInterval(() => {
//             console.log(that.name, that.age);
//         }, 2000);

//     }
// }
// console.log(obj1.fun());

// const obj = {
//     name: "Raskin Limbu",
//     age: 24,
//     profession: "Web Developer",
//     fun: function () {
//         setTimeout(function(){
//             console.log('The name is'+" "+  this.name);
//         }, 2000);
//     }
// }
// obj.fun()

const obj = {
    name: "Raskin Limbu",
    age: 24,
    profession: "Web Developer",
    fun: function () {
        setTimeout(() => {
            console.log("The age is"+" "+this.age);
        }, 2000);
    }
}
obj.fun() 
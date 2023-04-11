// Task 1

function addNumberClosure(number){
        function addToNumber(val){
            return val + number
        }
        return addToNumber
}

let five = addNumberClosure(5)
let result = five(10)
console.log(result);


//Task 2

// function searchArray(arr , value){

//     function search(arr , value, index){
//         if(index >= arr.length){
//             return false
//         }
//         if(arr[index]===value){
//             return true
//         }
//         return search(arr , value , index +1)
//     }
//     return searchArray(arr , value , 0)
// }
// let arr = [1,2,3,4,5,6,7,8]
// console.log(searchArray(arr,5));
// console.log(searchArray(arr,9));



//Task 8

// function saveObjectToLocalStorage(obj) {
    
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {

//         localStorage.setItem(key, JSON.stringify(obj[key]));
//       }
//     }
  
    
//     const retrievedObj = {};
//     for (const key in obj) {
//       if (localStorage.getItem(key)) {
//         retrievedObj[key] = JSON.parse(localStorage.getItem(key));
//       }
//     }
  
//     return retrievedObj;
//   }
  
  
//   const myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
  
//   saveObjectToLocalStorage(myObject);
  
  
//   const retrievedObject = saveObjectToLocalStorage(myObject);
  
//   console.log(retrievedObject);


// Task 7

// function getObjectFromLocalStorage(key) {
//     const retrievedObj = localStorage.getItem(key);
//     return JSON.parse(retrievedObj);
//   }

// const myObject = { name: "Don", age: 35, city: "New York" };


// localStorage.setItem("myKey", JSON.stringify(myObject));

// const retrievedObject = getObjectFromLocalStorage("myKey");

// console.log(retrievedObject);

// task 6


// function saveObjectToLocalStorage(key, obj) {
//     const serializedObj = JSON.stringify(obj);
//     localStorage.setItem(key, serializedObj);
// }

// const myObject = { name: "Hello", age: 20, city: "Karachi" };


// saveObjectToLocalStorage("myKey", myObject);


//Task 5

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }

// let myElement = document.getElementById("myy")
// changeBackgroundColor(myElement , "red")


//Task 3

// function paragraph(text){
//   let para = document.querySelector("body")
//   para.innerHTML = "<p>"+text+"</p>" 
  
// }
// console.log(paragraph("This is Paragraph"))


//Task 4

// function addListItem(text) {
//   let li = document.createElement("li");
//   let text = document.createTextNode(text);
//   li.appendChild(text);
//   let ul = document.getElementById("myList");
//   ul.appendChild(li);
// }


  
  
  























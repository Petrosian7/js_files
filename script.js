// function multipleNums(a, b) {
//     let res = a ** b;
//     return res;
// }
// let res = multipleNums(2, 4);
// console.log(res);

// function multipleNums(a, b) {
//         let res = Math.pow(a, b)
//         return res;
//     }
//     let res = multipleNums(4, 4);
//     console.log(res);

//tveri bazmapatkum  //Math.pow Method


// const arr = [23, 45,{name: 'Edgar'}, 'bye', [24, 'Hello'], ['name', 378], 700, 1];
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (Array.isArray(arr[i][j])) {
//                     for (let k = 0; k < arr[i][j].length; k++) {
//                         newArr.push(arr[i][j][k]);
//                     }
//                 } else {
//                     newArr.push(arr[i][j]);
//                 }
//             }
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);

                // const arr = [23, 45,{name: 'Edgar'}, 'bye', [24, 'Hello'], ['name', 378], 700, 1];
                // const x = arr.flat(Infinity);
                // console.log(x);

//mi qami array mek arrayum  //Flat Method


// const arr = [2, 5, 6, 9];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
// }
// console.log(newArr);


// const arr = [2, 5, 6, 9];
// let newArr = [];
// arr.forEach((el) => {
//     newArr.push(el * 2);
// });
// console.log(newArr);

// const arr = [2, 5, 6, 10];
// let newArr = [];                                                                                                                                                 })
// arr.forEach(el => newArr.push(el * 2));                                          
// console.log(newArr);
//callback

// const arr = [2, 5, 6, 10];
// const newArr = arr.map(el => el * 2); 
// console.log(newArr);

// arrayi [i] bazmapatkel 2-ov  //forEach and Map Methods



// 
// 
// const arr1 = [1, 2, [3], [4, 5], 6, []];

// const flattened = arr1.flatMap(el => el);

// console.log(flattened);
// 
// 


// const arr = ['Java', 'JavaScript', 'C++', 'C#', 'Python', 'React', 'Angular'];
// let newArr = [];
// arr.forEach((el) => {
//     if (el.length >= 4) {
//         newArr.push(el);
//     }
// });
// console.log(newArr);

// const arr = ['Java', 'JavaScript', 'C++', 'C#', 'Python', 'React', 'Angular'];
// let newArr = arr.filter(el => el.length > 4);
// console.log(newArr);

//Stringi erkarutyun   //Filter Method


// const data = prompt("Input");
// const arr = ['Java', 'JavaScript', 'C++', 'C#', 'Python', 'React', 'Angular'];
// for (let i = 0; i < arr.length; i++) {
//     if (data === arr[i]){
//         console.log(i);
//     }
// }

// const data = prompt("Input");
// const arr = ['Java', 'JavaScript', 'C++', 'C#', 'Python', 'React', 'Angular'];
// arr.forEach((el, i) => {
//     if(el === data) {
//         console.log(i);
//     }
// });


// const data = prompt("Input");
// const arr = ['Java', 'JavaScript', 'C++', 'C#', 'Python', 'React', 'Angular'];
// const idx = arr.indexOf(data);
// console.log(idx);

//forEach and IndexOf Methods

// const arr1 = [ 10, 'John', true];
// const arr2 = ['Hello',952, false];
// const newArr = arr1.concat(arr2);
// console.log(newArr);

//Arrays Concat Method

// var arr = [10, 'John', true, 'Hello', 952, false];
// var newArr = arr.slice(2);
// console.log(newArr); 

// var arr = [10, 'John', true, 'Hello', 952, false];
// var newArr = arr.slice(2, 5);
// console.log(newArr); 

//Arrays Slice Method


// const arr = [10, 'John', true, 'Hello', 952, false];
// arr.reverse();
// console.log(arr); 

// const arr = [10, 'John', true, 'Hello', 952, false];
// arr.sort();
// console.log(arr);   

//Arrays Reverse and Sort Methods


// const arr = [6, 10, true, 'Hello', 952, false];
// function mySort(a, b) {
//     return a - b;
// }
// arr.sort(mySort);
// console.log(arr);

// const arr = [6, 10, true, 'Hello', 952, false];
// arr.sort((a, b) => {
//     return a - b;
// } );
// console.log(arr);

// const arr = [6, 'Hello', true, 952, false, 10];
// function mySort(a, b) {
//     if(a > b){ return 1;}
//     if(a < b){ return -1;}
// }
// arr.sort(mySort);
// console.log(arr);

//Arrays Sort  Method


// const arr = [ -20, 6, 10, true, 'Hello', 952, false, -1, 0];
// arr.forEach(function(elem, i) {
//   console.log(i + " = " + elem);
// });


// const arr = [ -20, 6, 10, true, 'Hello', 952, false, -1, 0];
// const newArr = arr.filter(el => el >= 0);
// console.log(newArr);

//forEach and Filter Methods

// for (var j = 0; j < 5; j++) {
//     console.log(j);
//     }
//     console.log(j);

// let sum = 21;
// if (sum < 20) {
// console.log('if executed');
// } else if (sum === 21) {
// console.log('else if executed');
// } else {
// console.log('else executed');
// }
// console.log('statement end');

// var arr = ['a', 1, 'b', 2, 'c', 3];
// var length = arr.length;
// var result = '';
// for (var i = 0; i < length; i++ ) {
// if (typeof arr[i] === 'number') {

// }
// result += arr[i];
// }

// console.log(result);

// var arr = ['a', 1, 'b', 2, 'c', 3];
// var length = arr.length;
// var result = 0;
// for (var i = 0; i < length; i++ ) {
// if (typeof arr[i] !== 'number') {
//    break;
// }
// result += arr[i];
// }

// console.log(result);

// const arr = [2, 5, 4, 3, 6, 11, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 1) {
     
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// function twoOldestAges2(ages){
//     return ages.sort(function(a,b){return a-b;}).slice(-2);
//   }
    

//    const arr = [1, 2, 10, 8];
//   function twoAges(arr) {
//     let newArr = [];
//     const newArr = arr.sort((a, b) => b - a);
//     return [newArr[1], sortedArr[0]];
//   }
// const arr = [1, 2, 10, 8];
// function getOlder(arr) { 
// 	let newArr = []; 
// 	for (let i = 0; i < arr.length; i++) { 
// 		if (arr.length <= 0) { 
// 			newArr.push(arr[i]); 
		// } else  { 
		// 	if (newArr[newArr.length-1].age === arr[i].age) { 
		// 		newArr.push(arr[i]); 
		// 	} 
		// 	if (arr[i].age > newArr[newArr.length-1].age) { 
		// 		newArr = []; 
		// 		newArr.push(arr[i]); 
		// 	} 
// 		} 
// 	} 
// }
// console.log(newArr);


// const dataUser = prompt("input name and age");

// function Book(title, pubYear, price) {
// 	this.title = title;
// 	this.pubYear = pubYear;
// 	this.price = price;
// }
// 	let book_info = new Book("The Great GatsBy", 2015, "$1000")
// 	console.log(book_info);

// 	Book.prototype.show = function(title, pubYear,price) {
// 		console.log(`Book Info: Book Name: ${this.title} Book price: ${this.price} Book Year: ${this.pubYear}`);
// }
// book_info.show();



// const el = document.getElementById("time");
const date = new Date();

const date1 = date.toLocaleDateString("en-US");
const arr = ["time", "time1", "time2", "time3"];
for(let i = 0; i < arr.length; i++) {
	const el = document.getElementById(arr[i]);
	el.innerHTML = date1;
}















































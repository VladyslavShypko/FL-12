// task1 

const array1 = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
const maxElement = (arr) => Math.max(...arr);

console.log(maxElement(array1));

//task2 

const array2 = [1, 2, 3];
const copyArray = (arr) => [...arr];

const copiedArray = copyArray(array2);
console.log(array2, copiedArray);
console.log(array2 === copiedArray);

//task3

const id = Symbol('id');
const addUniqueId = (obj) => {
	let newObj = {};
	//a random number in the range of 100
	newObj[id] = Math.floor(Math.random() * 101);
	return Object.assign(newObj, obj);
}
let createdObject = addUniqueId({
	name: 123
});
console.log(createdObject);

//task4

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
const regroupObject = (oldObj) => {
	let {name, details} = oldObj; 
	return {
		university: details.university,
		user: {
			age: details.age,
			firsName: name,
			id: details.id
		}
	}
}
console.log(regroupObject(oldObj));

//task5

const array3 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
const findUniqueElements = (arr) => {
	[...arr] = new Set(arr);
	return arr;
}
console.log(findUniqueElements(array3));

//task6

const phoneNumber = '0123456789';
const hideNumber = (phoneNum) => {
	const lengthNumber = phoneNum.length;
	return phoneNum.slice(-4).padStart(lengthNumber, "*");
}
console.log(hideNumber(phoneNumber));

//task7

const add = (a = require(), b = require()) => a + b;
const require = () => {
	throw new Error('Missing property');
}
console.log(add(1, 3));
//console.log(add(1));

// task8

const callApi = (url) => {
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const arr = data.map(user => user.name).sort();
			console.log(arr);
		}).catch((error) => {
			console.error('Error:', error);
		});
}

callApi('https://jsonplaceholder.typicode.com/users');

//task 9

async function callApi2(url) {
	try {
		let response = await fetch(url);
		let data = await response.json();
		let arr = data.map(user => user.name).sort();
		console.log(arr);
	} catch (error) {
		console.error('Error:', error.message);
	}

}
callApi2('https://jsonplaceholder.typicode.com/users');

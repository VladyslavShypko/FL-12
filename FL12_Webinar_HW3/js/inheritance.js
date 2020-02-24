// task 2
class Employee {
	constructor(obj) {
		this.id = obj.id;
		this.firstName = obj.firstName;
		this.lastName = obj.lastName;
		this.birthday = obj.birthday;
		this.salary = obj.salary;
		this.position = obj.position;
		this.department = obj.department;
		Employee._employees.push(this);
	}
	get age() {
		let arr = this.birthday.split('/').reverse();
		return Math.floor(((new Date - new Date(arr[0], arr[1] - 1, arr[2])) / 1000 / (60 * 60 * 24)) / 365.25);
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	static _employees = [];
	static get EMPLOYEES() {
		return Employee._employees;
	}
	quit = () => {
		if (Employee._employees.indexOf(this) >= 0) {
			Employee._employees.splice(Employee._employees.indexOf(this), 1);
		}
	}
	retire = () => {
		console.log('It was such a pleasure to work with you!');
		this.quit();
	}
	getFired = () => {
		console.log('Not a big deal!');
		this.quit();
	}
	changeDepartment = (newDepartment) => {
		this.department = newDepartment;
	}
	changePosition = (newPosition) => {
		this.position = newPosition;
	}
	changeSalary = (newSalary) => {
		this.salary = newSalary;
	}
	checkAction = (obj, str) => {
		for (let i in obj) {
			if (i === 'salary') {
				this.changeSalary(obj[i]);
				console.log(str);
			} else if (i === 'position') {
				this.changePosition(obj[i]);
				console.log(str);
			} else if (i === 'department') {
				this.changeDepartment(obj[i]);
				console.log(str);
			}
		}
	}
	getPromoted = (benefits) => {
		this.checkAction(benefits, 'Yahooo!');
	}
	getDemoted = (punishment) => {
		this.checkAction (punishment, 'Damn!');
	}
}

class Manager extends Employee {
	constructor(obj) {
		super(obj);
		this.position = 'manager';
	}
	get managedEmployees() {
		return Employee._employees.filter((emp) => emp.department === this.department && emp.position !== 'manager');
	}
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
	constructor(obj) {
		super(obj);
		this.department = 'hr';
	}
}

class SalesManager extends Manager {
	constructor(obj) {
		super(obj);
		this.department = 'sales';
	}
}

// task 3

const promoter = (manager) => ({
	promote(indexEmployees, newSalary) {
		manager.managedEmployees.find((emp) => emp.id === indexEmployees).getPromoted({salary: newSalary})
	}
});
function ManagerPro(manager, action) {
	if (manager instanceof Manager) {
		return Object.assign(manager, action(manager));
	}
}

// Run example

const salesManager = new SalesManager({
	id: 1,
	firstName: 'John',
	lastName: 'Doe',
	birthday: '10/04/1994',
	salary: 5000
});
const hrManager = new HRManager({
	id: 2,
	firstName: 'Bob',
	lastName: 'Doe',
	birthday: '10/04/1994',
	salary: 5000
});
const blueCollarWorkerOne = new BlueCollarWorker({
	id: 3,
	firstName: 'Mary',
	lastName: 'Doe',
	birthday: '29/07/1996',
	salary: 5000,
	position: 'office worker',
	department: 'sales'
});
const blueCollarWorkerTwo = new BlueCollarWorker({
	id: 4,
	firstName: 'Jane',
	lastName: 'Doe',
	birthday: '29/07/1996',
	salary: 5000,
	position: 'office worker',
	department: 'hr'
});

console.log(Employee.EMPLOYEES);
console.log(salesManager.getPromoted({
	salary: 7500
}));
console.log(salesManager.salary);
console.log(blueCollarWorkerTwo.birthday);
console.log(blueCollarWorkerTwo.fullName);
console.log(blueCollarWorkerTwo.age);
const managerPro = ManagerPro(salesManager, promoter);
managerPro.promote(3, 6000);
console.log(blueCollarWorkerOne.salary);
blueCollarWorkerTwo.getFired();
console.log(Employee.EMPLOYEES);

const checkBenefits = (obj, str) => {
		for (let i in obj) {
			if (i === 'salary') {
				console.log(str);
				this.changeSalary(obj[i]);
			} else if (i === 'position') {
				console.log(str);
				this.changePosition(obj[i]);
			} else if (i === 'department') {
				console.log(str);
				this.changeDepartment(obj[i]);
			}
		}
};

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
		return Math.floor( ( (new Date - new Date(arr[0], arr[1]-1, arr[2])) / 1000 / (60 * 60 * 24) ) / 365.25 );
	}
    get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

    static _employees = [];
    static get EMPLOYEES() {
		return this._employees;
	}
	quit = () => {
		let idIndex = Employee._employees.indexOf(this);
		if (idIndex >= 0) {
			Employee._employees.splice(idIndex, 1);
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
	getPromoted = (benefits) => {
		checkBenefits(benefits, 'Yahooo!');
	}
	getDemoted = (punishment) => {
		checkBenefits(punishment, 'Damn!');
}

class Manager extends Employee {
	constructor(obj) {
		super(obj);
		this.position  = 'manager';
	}
	get managedEmployees() {
		 return Employee.employees.filter(emp => emp.department === this.department && emp.position !== 'manager');
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


let employee1 = new Employee({id: 1, firstName: 'Vlad', lastName: 'Shypko', birthday: '25/07/1996', salary: 500, position: 'worker', department: 'worker'});
let employee2 = new Employee({id: 2, firstName: 'Vlad', lastName: 'Shypko', birthday: '29/07/1996', salary: 500, position: 'worker', department: 'worker'});
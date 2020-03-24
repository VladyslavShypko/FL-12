 const list = document.getElementById('list_pools');
const average = document.getElementById('average');
//const dangerEmployee = document.getElementById('dangerEmployee');

fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
     .then(response => response.json())
     .then(employees => distributionEmployees(employees));


 class Employee {
     constructor(worker) {
         this.name = worker.name;
         this.performance = worker.performance;
         this.lastVacationDate = worker.last_vacation_date;
         this.salary = worker.salary;
         this.id = worker.id;
     }
     createDomElem() {
         let li = document.createElement('li');
         li.innerHTML = this.name;
         return li;
     }
     
 }

 class Leaf extends Employee {
     constructor(worker) {
         super(worker);
     }
 }

 class Composite extends Employee {
     constructor(worker) {
         super(worker);
         this.listEmployees = [];
         this.pool = worker.pool_name;
         this.worker = worker;
     }
     Add(subject) {
         this.listEmployees.push(subject)
     }
      createDomElem() {
          let ul = document.createElement('ul');
          ul.innerHTML = `<b>${this.name} have ${this.pool}</b>`;
          this.listEmployees.forEach(employee => {
             ul.append(employee.createDomElem());
          });
           return ul;
      }
     getAverage() {
        return this.listEmployees.map(employee => employee.salary).reduce((a, b) => a + b)/(this.listEmployees.length);
                  }
     averageData() {
         let p = document.createElement('p');
         p.innerHTML = `${this.pool} average salary are <b>${this.getAverage()}</b>`;
        return p;
     }
//     dangerousEmployee () {
//         let p = document.createElement('p');
//       this.listEmployees.forEach(employee => {
//           if(employee.salary > this.getAverage() && employee.performance === 'low') {
//              p.innerHTML = `dangerous employee from ${this.pool}`;
//               return p;
//              }
//     });
// }
 }
 const distributionEmployees = (employees) => {
         let tree = new Composite(employees[0]);
         let leaf, composite;
         const createPool = (pool) => {
             for (let i = 1; i < employees.length; i++) {
                 if (pool.id === employees[i].rm_id) {
                     if (!employees[i].pool_name) {
                         leaf = new Leaf(employees[i]);
                         pool.Add(leaf);
                     } else {
                          if(composite){
                             average.append(composite.averageData());
                            }
                         composite = new Composite(employees[i]);
                         pool.Add(composite);
                         createPool(composite);
                     }
                 }
             }
         }   
    createPool(tree);
    list.append(tree.createDomElem());
 }
class Employee{
    constructor(name, dept, salary){
        this.dept = dept;
        this.name = name;
        this.salary = salary;
        this.cast = 'Indian';
    }

    getName(){
        return this.name;
    }

    getDepartment(){
        return this.dept;
    }

    getSalary(){
        return this.salary;
    }
}

class Manager extends Employee{
    constructor(name, dept, salary){
        super();
        this.dept = dept;
        this.name = name;
        this.salary = salary;
    }

    // Method overloading doesn't support in JavaScript. 
    getSalary(salary){
        return salary;
    }

    // If method have same name it will overwrites the previous method.
    getSalary(){
        return this.salary;
    }

    getCast(){
        return this.cast;
    }

}

var mgr1 = new Manager('Narayan', 'IT', '1lakh');

console.log("===>", mgr1.getName());
console.log("===>", mgr1.getDepartment());
// This function will get call from the manager's prototype.
console.log("===>", mgr1.getSalary());
// This will access variable Cast from the Employee class.
console.log("===>", mgr1.getCast());
function Employee(name, dept, salary){
    this.dept = dept;
    this.name = name;
    this.salary = salary;
    this.cast = 'Indian'
}

Employee.prototype.getName = function(){
    return this.name;
}

Employee.prototype.getDepartment = function(){
    return this.dept;
}

Employee.prototype.getSalary = function(){
    return this.salary;
}

// Manager is a type of employee and hence it will inherit the Employee class.
function Manager(name, dept, salary){
    this.dept = dept;
    this.name = name;
    this.salary = salary;
}

Manager.prototype = new Employee(this.name, this.dept);

// Method overloading doesn't support in JavaScript. 
Manager.prototype.getSalary = function(salary){
    return salary;
}
// If method have same name it will overwrites the previous method.
Manager.prototype.getSalary = function(){
    return this.salary;
}

Manager.prototype.getCast = function(){
    return this.cast;
}

var mgr1 = new Manager('Narayan', 'IT', '1lakh');

console.log("===>", mgr1.getName());
console.log("===>", mgr1.getDepartment());
// This function will get call from the manager's prototype.
console.log("===>", mgr1.getSalary(123));
// This will access variable Cast from the Employee class.
console.log("===>", mgr1.getCast());
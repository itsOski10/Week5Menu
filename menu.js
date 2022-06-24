class Employees {
    constructor (firstName,LastName,id){
        this.firstName = firstName;
        this.LastName = LastName;
        this.id = id;
    }

    getFullName (){
        return this.firstName + " " + this.LastName;
    }

    getID(){
        return this.id;
    }


    
}

class Departments {
    constructor(departName){
        this.departName = departName;
        this.employees = [];
    }
    addEmpoyee (employee) {
        if ( employee instanceof Employees){
            this.employees.push(employee);

        } else {
             throw new Error(`Only add Employees. Input is not a employee: ${employee}`);
        }
    }

    describe(){
        return this.employees.length
    }

}


class Menur {
    constructor (){
        
    }
}
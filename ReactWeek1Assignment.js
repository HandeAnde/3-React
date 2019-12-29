    class Student {
        constructor(name, email, community){
            this.name = name;
            this.email = email;
            this.community = community;
        }
    };

    class Bootstrap {
        constructor(name, level, students=[]){
            this.name=name;
            this.level=level;
            this.students=students;
        }
        registerStudent(studentToRegister){
            if(this.students.filter(x=>x.email === studentToRegister.email).length>0){
                console.error(`${studentToRegister.email} is already a registered account`);
            } else{
                this.students.push(studentToRegister);
                console.log(`${studentToRegister.name} has registered with the email: ${studentToRegister.email}`);
            }
            return this.students;
    }
}
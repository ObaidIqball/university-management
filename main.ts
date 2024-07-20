class Person {
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age ;
    }
}
    class Student extends Person{
        rollNumber: string;
        courses: Course[] = [];

        constructor (name:string,age: number,rollNumber:string){
            super(name, age)
            this.rollNumber = rollNumber
        }
    registerForCourses(course: Course){
        this.courses.push(course);
    }
        
    
    }

    class Instructor extends Person {
        salary: number;
        courses: Course[] = [];
        
        constructor (name:string,age:number,salary:number) {
            super(name,age)
            this.salary = this.salary
        }
    assignCourse(course: Course){
        this.courses.push(course);
    }
        
    
    }
    
    const std1= new Student("HAMZAH",18,"1234");
    const std2= new Student("ali",22,"1254");

    const inst1 = new Instructor("raza",35,45000);
    const inst2 = new Instructor("aun",38,25000);

    class Course {
        id: number;
        name:string;
        students: Student[] = [];
        Instructors: Instructor[] = [];
        constructor (id:number,name:string) {
            this.id = id;
            this.name = name;

        }
        addstudent(std:Student){
            this.students.push(std)

        }
        setInstructor(Instructor:Instructor){
            this.Instructors.push(Instructor)

        }
    } 

    class Department{
        name:string;
        courses:Course[] = [];
        constructor(name:string){
            this.name = name;
        }
        addCourse (course:Course){
            this.courses.push(course);

        }

    }
    const course1 = new Course(1,"block chain",);
    const course2 = new Course(2,"metaverse");
    course1.addstudent(std1)
    course1.addstudent(std2)
    course2.addstudent(std1)

course1.setInstructor(inst1)
course2.setInstructor(inst2)
console.log(course1.students);
const d1 = new Department("Computer science");
d1.addCourse(course1);
console.log(d1.courses[0]);
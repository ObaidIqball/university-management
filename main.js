var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    Student.prototype.registerForCourses = function (course) {
        this.courses.push(course);
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.salary = _this.salary;
        return _this;
    }
    Instructor.prototype.assignCourse = function (course) {
        this.courses.push(course);
    };
    return Instructor;
}(Person));
var std1 = new Student("HAMZAH", 18, "1234");
var std2 = new Student("ali", 22, "1254");
var inst1 = new Instructor("raza", 35, 45000);
var inst2 = new Instructor("aun", 38, 25000);
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.Instructors = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addstudent = function (std) {
        this.students.push(std);
    };
    Course.prototype.setInstructor = function (Instructor) {
        this.Instructors.push(Instructor);
    };
    return Course;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var course1 = new Course(1, "block chain");
var course2 = new Course(2, "metaverse");
course1.addstudent(std1);
course1.addstudent(std2);
course2.addstudent(std1);
course1.setInstructor(inst1);
course2.setInstructor(inst2);
console.log(course1.students);
var d1 = new Department("Computer science");
d1.addCourse(course1);
console.log(d1.courses[0]);

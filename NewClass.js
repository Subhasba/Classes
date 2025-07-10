class School {
    constructor(name) {
        this.school = name
    }
    display() {
        console.log(`School Name:${this.school}`);
    }
}
class Clazz {
    constructor(name) {
        this.clazz = name;
    }
    display() {
        console.log(`Class:${this.clazz}`);
    }
}
class Section {
    constructor(name) {
        this.section = name;
    }
    display() {
        console.log(`Section:${this.section}`);
    }
}
class Student {
    constructor(name, age) {
        this.student = name;
        this.studentage = age;
    }
    display() {
        console.log(`Student Name : ${this.student}`);
        console.log(`Student Age : ${this.studentage}`);
    }
}
const school = new School("Antony School")
const clazz = new Clazz(11)
const clazz2 = new Clazz(12)
const section = new Section("A")
const sec2 = new Section("B")
const student = new Student("Subha", 18)
const student2 = new Student("Dhivya", 18)
school.display();
clazz.display();
section.display();
student.display();
clazz2.display();
sec2.display();
student2.display();

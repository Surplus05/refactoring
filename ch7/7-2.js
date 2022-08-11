export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  addCourse(courses) {
    this.#courses.push(courses);
  }
  removeCourse(course) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      console.log("course does not exist!");
      return;
    }
    this.#courses.splice(index);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
const course = new Course("리팩토링", true);
ellie.addCourse(course);
console.log("course added. current course : " + ellie.courses.length);
ellie.removeCourse(course);
console.log("course removed. current course : " + ellie.courses.length);
console.log("try to remove course again, it will be throw an error");
ellie.removeCourse(course);

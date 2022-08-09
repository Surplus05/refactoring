class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}
let defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });

export function getDefaultOwner() {
  // 불변성 유지 1. spread operator
  // it used shallow copy so could be danger
  // return { ...defaultOwner };
  return defaultOwner;
}

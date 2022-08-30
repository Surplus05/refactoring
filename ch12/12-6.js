class Employee {
  #name;
  constructor(name) {
    this.#name = name;
    this.#type = type;
  }

  get type() {
    return "employee";
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  // static validateType(arg) {
  //   if (!["engineer", "manager", "salesperson"].includes(arg)) {
  //     throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  //   }
  // }

  static createEmployee(name, type) {
    // Employee.validateType(type);
    switch (type) {
      case "engineer":
        return new Engineer(name, type);
      case "manager":
        return new Manager(name, type);
      case "salesperson":
        return new Salesperson(name, type);
      default:
        throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}
class Manager extends Employee {
  get type() {
    return "manager";
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

const ellie = new Engineer("엘리", "engineer");
const bob = new Manager("밥", "manager");

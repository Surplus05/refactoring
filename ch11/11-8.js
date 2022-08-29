export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
    // private 로 숨길 필요 있음.
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEngineer(name) {
    return new Employee(name, "E");
  }
  static createMarketer(name) {
    return new Employee(name, "M");
  }
}

const employee = Employee.createEngineer("Kim");

class Organization {
  #data;
  #name;
  #country;

  constructor(data) {
    // 백엔드와 통신 or 외부모듈인 경우 매개변수로 객체를, 내부에서 쓴다면 name, country 처럼 쓰는 것이 좋다.
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get rawData() {
    return { ...this.#data }; // 얕은복사, clone Deep 등 청사진 선택 가능.
  }
}
const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);

const customerRepository = new CustomerRepository();

const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);
class Order {
  constructor(number, custmoer) {
    this._number = number;
    this._customer = custmoer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return fundCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}

// 불변성은 좋으나 데이터가 변화할 때 마다 인스턴스를 만드는 경우 갱신이 어려울 수 있음.
// 이러한 경우 인스턴스보다는 참조를 사용하자.
// 고유한 id 별로 하나의 인스턴스만 만들어지는것을 보장하는 경우 리포지토리 패턴을 사용하는것이 좋다.

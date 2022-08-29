// 예제 1

function setWidth(value) {
  this._width = value;
}

function setHeight(value) {
  this._height = value;
}


// 예제 2
class Concert {
  regularBook(customer) {}
  PremiumBook(customer) {}
  // 로직이 비슷하다면 재사용성이 떨어지는게 아닌지 ?
  // 내부로직을 함수로 추출해 flag 사용
  // 단 외부에서 쓰지 않아야 함.
  #book(customer, isPremium)
}

// 예제 3
function switchOn();
function switchOff();

class Person {
  get name() {}
  // r/w 를 고려해서 잘 캡슐화 하자.
  // w 를 못하게 하려면 setter는 제거하고
  // setter 는 반드시 객체 불변성을 지켜주어야 함.
  // set 을 통해 객체불변성을 유지하자.
}

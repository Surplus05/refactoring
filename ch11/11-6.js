targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan, currentTemperature) {
  // currentTemperature = thermostat.currentTemperature; 외부 의존성이 높은 나쁜코드
  // ...
}

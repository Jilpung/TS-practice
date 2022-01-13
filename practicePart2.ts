//public, private, protected, static

type Car = {
  wheel : '4개',
  color : string
}
type Bike = {
  wheel : '2개',
  color : string
}

function 함수4(x : Car | Bike){
  if (x.wheel === '4개'){
    console.log('이 차는 ' + x.color)
  } else {
    console.log('이 바이크는 ' + x.color)
  }
}
let name2 :string = 'kim';
let age : number = 50;
let married :null = null;

let users :string[] = ['kim', 'lee', 'park'];

let users1 :{member1:string, member2:string} = {member1 : 'kim', member2:'park'};

let singer : {s : string, n:string} = {s: 'kim', n: 'start'};

// let project = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }

let project : {
  member:string[], 
  days:number, 
  started:boolean
} = {
  member : ['kim','park'], 
  days: 30, 
  started:true,
};

//유니온 타입: 타입2개이상의 타입
let 회원 :number | string = 123;
let 회원들 : (number | string)[]  = [1, '2', 3];
let 이름 :any | unknown; //똑같음, 모든 타입 다 들어올 수 있음(JS를 쓰고 싶을때)

// let 학교 = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
// =>
let 학교: {score: (number | boolean)[], teacher: string, friend: string | string[]} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function sayHi(x? :string ){
  if (x) {
    console.log('안녕하세요 ' + x)
  } else {
    console.log('왜입력안함')
  }
} 

function letter(x:string | number) : number{
  return x.toString().length
}

function marry(x:number, y:boolean, z:string) :string|void {
  let score:number = 0;
  score += x;
  if(y === true){
    score += 500
  }
  if(z==='상'){
    score +=100
  }
  if(score>=600){
    return '결혼가능'
  }
}

function 클리닝함수(a :(number|string)[]){

  let 클리닝완료된거 :number[] = [];

  a.forEach((b)=>{
    if (typeof b === 'string') {
      클리닝완료된거.push(parseFloat(b))
    } else {
      클리닝완료된거.push(b)
    }
  })

  return 클리닝완료된거
}

console.log( 클리닝함수([123,'3']) )

function 만들함수( x :{subject : string | string[]} ){
  if (typeof x.subject === 'string') {
    return x.subject
  } else if (Array.isArray(x.subject) ){
    return x.subject[x.subject.length - 1]
  } else {
    return '없쪄'
  }
}

console.log( 만들함수( { subject : ['english', 'art'] }  ) )


type Animal = string | number | undefined
let 동물 :Animal = 123;

type Girlfriend = {

}
const 여친 = {
  name:'엔버'
} 

type Users = {
  name:string,
  phone:number,
  email:string,
  adult:boolean
}

function rcp(a:'가위'|'바위'|'보'):('가위'|'바위'|'보')[]{
  return ['가위']
}

type 함수타입 = (a:string) => number;

let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x:number):number{
    return x + 1
  },
  changeName : ():void => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function 만들함수1(a :string, func1 :함수타입1, func2 :함수타입2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수1('010-1111-2222', cutZero, removeDash) 

class car {
  model:string;
  price:number;
  constructor(a:string, b:number){
    this.model = a;
    this.price = b;
  }
  tax() :number {
    return this.price*0.1
  }
}

class Word{
  num;
  str;

  constructor(...param:any){
    let 숫자들 :number[] = [];
    let 문자들 :string[] = [];

    param.forEach((i:any)=>{
      if (typeof i ==='string') {
        문자들.push(i)
      } else {
        숫자들.push(i)
      }
    })

    this.num = 숫자들;
    this.str = 문자들;
  }
}


let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park'] 


interface Pro { brand: string, serialNumber: number, model:string[]}
let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Bagoni {product:string, price:number}
interface Card extends Bagoni {card:boolean}
let 장바구니: Bagoni[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

interface Obje {
  plus: (a:number, b:number)=>number,
  minus: (a:number, b:number)=>number
}
let 오브젝트3:Obje ={
  plus(a,b){
    return a+b
  },
  minus(a,b){
    return a-b
  }
}

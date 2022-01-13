//1.
// let person = { student : true, age : 20 }

// function 함수({student, age}){
//   console.log(student, age)
// }
// 함수({ student : true, age : 20 })

//=> type 지정해보기

interface Person {student:boolean, age:number};

let person:Person = { student : true, age : 20 }

function 함수({student, age}){
  console.log(student, age)
}

함수({ student : true, age : 20 })

//2.
function 최댓값(...x : number[]) {
  let result = 0;
  x.forEach((i)=>{
    if (result < i) {
      result = i
    }
  })
  return result;
}
console.log(최댓값(4,6,3,2)) 

//3.
//함수( { user : 'kim', comment : [3,5,4], admin : false } )
//type UserType = {
//   user : string,
//   comment : number[],
//   admin : boolean
// }
// function 함수({user, comment, admin} :UserType) :void{
//   console.log(user, comment, admin)
// }
// 함수({ user : 'kim', comment : [3,5,4], admin : false })   => 답

function 함수1({user, comment, admin}:{user:string, comment:number[], admin:boolean}){
  console.log({user, comment, admin})
}
함수1( { user : 'kim', comment : [3,5,4], admin : false } )

//4. 
// 함수( [40, 'wine', false] )

type 어레이 = (number | string | boolean)[]

function 함수3([a, b, c]:어레이){
  console.log(a, b, c)
}
함수3( [40, 'wine', false] )

//5.
class User1 {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터: number){
    User1.x += 파라미터
  }

  static printX(){
    console.log(User1.x)
  }
}

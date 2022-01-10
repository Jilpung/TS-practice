/* 타입 및 변수 지정 연습 */

let naming : string | number = 'kim';

let lasttName : string[] = ['kim', 'lee' ];

type MyType = string | number;

function name1 (x :number) : number {
  return x * 2
}

type Member = {
  [key: string]: string,
};
let john : Member = {name : 'kim'}

class User {
  name:string;
  constructor(name){
    this.name =name;
  }
}
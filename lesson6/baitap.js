// bài 2

let name = 'AAA';
let age = 20;
let isGood =true;

console.log(age+10); // =30
console.log(age%3);  // =2
console.log(name+'BBB'); // = AAABBB
console.log(!isGood); // = false

console.log(name=='aaa' && age>=20); // =false
console.log(name !='aaa' && isGood); // = true
console.log(!(age<10) && !isGood); // = false

// bài 3

let a =10;
let b=20;
let c=30;
let d='40';

console.log(a+b+c) // =60
console.log(a-b/c) //=28/3
console.log(a-b*c) //=-590
console.log(d - (a * b) - c);// -190
console.log(a + b + c + d); // 6040
console.log(d + a + b + c); // 40102030 
console.log(d + a - b + c); //4020
console.log(a - b + d - c); //-1070
console.log(d + a - b + c); //4020
console.log(d - c + a - b); //0
console.log(a * b + d * c); //1400

// bài 4

let x= true;
let y = false;
z=10;

console.log(x && y); // flase
console.log(x && !y); // true
console.log(x && z == 10); // true

console.log(!(x && z == 10)); // false
console.log(!(x && z == 50)); // true

console.log(x && y && z == 10); // false
console.log(x && !y && z == 10); //  true
console.log(x || y || z == 10); // true
console.log((x && y) || z != 10); // false
console.log(!(x && z == 10) || y); // false

//bài 5

let a1=1;
let b1='2';
let c1=3;
let d1='4';

console.log(b1 + d1); //24
console.log(a1 + b1 + c1 + d1); //1234
console.log(a1 - b1 + c1 - d1); //-2
console.log(a1 - b1 - c1 + d1); // -44
console.log((b1 + d1) - (a1 + c1)); // 20
console.log((a1 + b1) - (c1 + d1) ); //-22
console.log(a1 * c1 + b1 * d1); //11
console.log(-b1 + d1); //-24
console.log(-b1 - d1); //-6
console.log(-(b1 + d1)); //-24

// bài 6

let age1 = 25;
let isMarried =false;
let isRich = true ;

console.log(age > 25 && isMarried && isRich); //false
console.log((age <= 25 || isMarried) && isRich); //true
console.log((age > 10 || isRich) && isMarried); //false
console.log(!(age >= 15 && isMarried) && isRich); //true
console.log(!(age <= 20) || !(isMarried && isRich)); //true
console.log((age > 8 && !isMarried) || isRich); //true
console.log(!(age < 8 && !isMarried) || isRich); //true
console.log((age == 8 && isMarried) || !isRich); //false



// let myArray=[]
// let n= Number(prompt("Nhập vào số n"))
// for(let i=0; i<n;i++){
//     myArray[i]=Math.floor(Math.random() * 11)
    
// }
// console.log(myArray)


// // bài 2: Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// let myArray=[1,2]
// let n= Number(prompt("n="))
// while(myArray.length<n){
//     myArray.unshift(0)
// }
// console.log(myArray)


// bài 3:Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa 
// phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1

// let myArray=[1,2,3,4]
// while(myArray.length>1){
//     myArray.pop()
// }
// console.log(myArray)



// 1. Khai báo 1 mảng gồm các số bất kỳ. 
// Tính tích của các phần tử trong mảng đó.
// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Tính giá trị trung bình của mảng.
// Lọc ra các số nguyên tố trong mảng.
// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// Nhập vào số n cho đến khi n là 1 số trong mảng s.
// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.

// let myArray= [1,2,3,4,5]

// // yêu cầu 1
// tich=1
// for(i=0;i<myArray.length;i++){
//     tich=tich* myArray[i]
// }
// console.log(tich)

// yêu cầu 2
// tìm tất cả giá trị trong mảng chia hết cho 2
// tìm giá trị nhỏ nhất trong mảng B

// const numbers= [1,7,9,10,2,-10,8,4,-3]
// const numbersDivideBy2=[]
// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]%2==0) numbersDivideBy2.push(numbers[i])
// }
// if(numbersDivideBy2.length==0){
//     console.log("Không có số nào chia hết cho 2")
// }else{
//     let min= numbersDivideBy2[0]
//     for(let i=0;i<numbersDivideBy2.length;i++){
//         if(min>numbersDivideBy2[i]) 
//         min=numbersDivideBy2[i]
//     }
//     console.log(min)
// }

// ý 3 bài 1
// //Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// let myArray= [2,4,-13,-3,9,18,12]
// let myArrayDivideBy3=[]
// for(let i=0; i<myArray.length;i++){
//     if(myArray[i]%3==0 ) myArrayDivideBy3.push(myArray[i])
// }
// if(myArrayDivideBy3.length==0){
//     console.log("Trống")
// }else{
//     let max=myArrayDivideBy3[0]
//     for(let i=0; i<myArrayDivideBy3.length;i++){
//         if(max<myArrayDivideBy3[i])
//         max=myArrayDivideBy3[i]
//     }
//     console.log(max)
// }


// ý 4 bài 1
// //Tính giá trị trung bình của mảng
// let myArray= [1,2,3,4,5]
// let tong= 0
// for(let i=0; i< myArray.length;i++){
//     tong= tong+ myArray[i]
// }
// let trungBinh_myArray= tong/(myArray.length)
// console.log(trungBinh_myArray)


// ý 5 bài 1
// Lọc ra các số nguyên tố trong mảng.
// let myArray= [1,2,-4,-7,-3,4,5,6,7,8,9,10,2,5,7,21,23]
// let soNguyenTo=[]
// for(let i=0;i<myArray.length;i++){
//     if (myArray[i]==2){       
//         soNguyenTo.push(myArray[i])
//     }
//     else{
//          for(let j=2; j<=Math.sqrt(myArray[i]);j++)        
//             if(myArray[i]%j !== 0 && myArray[i]>0){
//                 soNguyenTo.push(myArray[i])
//             }
//             // soNguyenTo.push(myArray[i])    
//         }       
//     }



// console.log(soNguyenTo)

// // Hàm để tìm các số nguyên tố trong một mảng
// function findPrimes(arr) {
//     const isPrimeArr = new Array(arr.length).fill(true); // Khởi tạo mảng boolean để đánh dấu các số nguyên tố
  
//     isPrimeArr[0] = false; // Loại bỏ số 1
//     for (let i = 2; i <= Math.sqrt(arr.length); i++) {
//       if (isPrimeArr[i - 1]) { // Nếu i là số nguyên tố
//         for (let j = i * i; j <= arr.length; j += i) { // Loại bỏ các bội số của i
//           isPrimeArr[j - 1] = false;
//         }
//       }
//     }
  
//     const primeNumbers = []; // Khởi tạo mảng chứa các số nguyên tố
//     for (let i = 0; i < arr.length; i++) {
//       if (isPrimeArr[i] && isPrime(arr[i])) { // Nếu i là số nguyên tố và i là số nguyên tố
//         primeNumbers.push(arr[i]); // Thêm i vào mảng chứa các số nguyên tố
//       }
//     }
  
//     return primeNumbers;
//   }
  
//   // Hàm để kiểm tra xem một số có phải là số nguyên tố hay không
//   function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   // Ví dụ sử dụng
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//   const primeNumbers = findPrimes(arr); console.log(primeNumbers); // [2, 3, 5, 7, 11, 13]


// // ý 6 bài 1
// // Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let myArray= [-1,0,1,2,3,4,10,11,12,13,14,4,-5]
// let arr_nho10=[]
// for(let i=0;i<myArray.length;i++){
//     if(myArray[i]<10){
//       arr_nho10.push(myArray[i])
//     }
// }
// console.log(arr_nho10)


// // ý 6 bài 1
// // Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let myArray= [-1,2,3,11,20,21,22,23,23,25,25,26]
// let arr_lon20= []
// for(let i=0;i<myArray.length;i++){
//     if(myArray[i]>20){
//         arr_lon20.push(myArray[i])
//     }  
// }
// console.log(arr_lon20)


// // ý 7 bài 1
// // Nhập vào số n cho đến khi n là 1 số trong mảng s.

// let s = [2, 4, 6, 8, 10];
// let n;
// while (true) {
//   n = Number(prompt("Nhập vào số n:"));// parseInt=Number
//   if (s.includes(n)) {
//     break;//  includes() của mảng để kiểm tra xem số người dùng nhập vào có nằm trong mảng s hay không
//   }
//   console.log("Số n không nằm trong mảng s. Vui lòng nhập lại.");
// }
// // In ra số n đã nhập
// console.log("Bạn đã nhập vào số n = " + n); // alert <> console.log


// // ý 8 bài 1
// // Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.

// let myArray= [-2,-4,0,-5,1,8,7,-6,8,2]

// for(let i=0;i<myArray.length;i++){
//     for(let j=0;j<myArray.length;j++){
//         if(myArray[j]>myArray[j+1]){
//             let temp= myArray[j]
//             myArray[j]= myArray[j+1]
//             myArray[j+1]= temp
//         }
//     }
// }
// console.log(myArray)




// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// Tìm những chuỗi trong mảng có chứa giá trị text.
// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.





// //ý 1 bài 2
// //Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// let s= ["data", "DeepLearning", "MachineLearning", "Math", "statistics", "probability"]
// let text= prompt("Nhập vào một chuỗi text:")
// new_s=s.push(text)
// console.log(s)
// let short_text= new_s[0]
// for(let i=1;i<new_s.length+1;i++){
//     if(new_s[i].length<short_text.length){
//         short_text= new_s[i+1]
//     }
    
// }
// console.log(short_text)


// // ý 2 bài 2
// // Tìm những chuỗi trong mảng có chứa giá trị text.
// let s= ["apple" ,"orange","banana","grape","mango","grapefruit","starfruit","pineapple","lemon","durian","apple","orange","durian","pineapple"]
// let text= prompt("Nhập vào 1 loại quả:")
// let text_fruit=[]
// for(let i=0;i<s.length;i++){
//     if(text==s[i]){
//         text_fruit.push(i+" " +s[i])
//     }
// }
// console.log(text_fruit)


// // ý 3 bài 2
// // Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// let s= [ "thien" ,"hehe", "carry","hi","hello"]
// const newS = s.map(str => str.slice(0, 3));
// console.log(newS);


// ý 4 bài 2
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
let s= ["thien", "handsome" ,"haveGirlfriend"]
let new_s=s[0]
for(let i=1;i<s.length;i++){
    new_s= new_s+ "-" + s[i]  // hoặc dùng const new_s = s.join('-');
    
}
console.log(new_s)

  


// // in ra dãy số từ 1 đến 500
// let i=1;
// for(i=1;i<=500;i++){
//     console.log(i)
// }

// // in ra các số chia hết cho 2 và 3 từ 1 đến 300
// let a=1
// for(a=1;a<=300;a++){
//     if(a%2==0 && a%3==0){
//         console.log(a)
//     }
// }

// // tính tổng các số chẵn trong đoạn [-30,50]
// let b=-30
// sum=0
// for(b=1;b<=50;b++){
//     if(b%2==0){
//         sum +=b
//         console.log(sum)
//     }
// }



// // nhập vào số n . tính giai thừa của số n

// let n = Number(prompt("nhập vào số n: "))
// let d =1
// let giaithua_n=d
// for(d=1;d<=n;d++){
//     giaithua_n = giaithua_n * d
//     // console.log(giaithua_n) // trong đây nó liệt kê
// }
//   console.log(giaithua_n)



// //nhập vào 3 số a5,b5,x5 (a<b). Tìm trong khoảng a,b số nhỏ nhất mà chia hết cho x
// let a5=Number(prompt("nhập vào số a: "))
// let b5=Number(prompt("nhập vào số b: "))
// let x5=Number(prompt("nhập vào số x: "))
// let i5=a5
// if(a5<b5 && i5<=b5){
    
//     while(i5<=b5){
//         if(i5%x5==0){
//             console.log(i5); 
//             break;
//         }

       

//         i5++
//     }
    
// }else{
//     console.log("Hãy nhập lại")
// }


// nhập vào số n (n>=2) hãy tính giá trị của biểu thức sigma(1/[n*(n+1)])


// // chữa bài 5

// let a= Number(prompt('a'))
// let b= Number(prompt('b'))
// let x= Number(prompt('x'))

// res= NaN
// let count= a

// // cách 1
// // for(let i=a;i<=b;i++){
// //     if(i%x==0){
// //         console.log(i)
// //         break
// //     }
// // }
// // console.log(null)

// //cách 2
// while(count <=b && res%x != 0){
//     if (count %x ==0) res= count
//     count++
// }
// console.log(res)


// // nhập vào số n .Hãy in ra số ước của n
// let n=Number(prompt("Nhập vào số n: "))
// for(let i=2; i<=n;i++){
//   if(n%i==0){
//     console.log(i)
//     i++
//   }
// }


// // nhập vào số n . Kiểm tra xem n có phải là số nguyên tố không ?
// let n = Number(prompt("nhập vào số n: "))
// let i=2
//   if(n<=1){
//     console.log("n không phải là số nguyên tố")
//   }
//   else if(n==2){
//     console.log("n là số nguyên tố")
//   }
   
//   else{
//     for(i=2;i<n;i++)
//     do{ console.log("n là số nguyên tố")} while(n%i!==0)
    
      
    
//   }
  

// // nhập vào chuỗi s (chỉ có chữ số) và số i . Hãy thêm vào đầu chuỗi s kí tự "0" cho đến khi độ dài chuỗi s>=l.

// let s=prompt("nhập vào chuỗi s: ");
// let i=prompt("nhập vào số i: ");
// while(s.length<i.length){
//     s="0"+s;
    
// }
// console.log(s);



// // Nhập vào 2 số m,n (m>0,n>0). Tìm ước chung lớn nhất của m,n.
// let m= Number(prompt("Nhập vào số m: "))
// let n= Number(prompt("Nhập vào số n: "))
// if(m<=n){
//   console.log("Hãy nhập lại để m lớn hơn n")
// }
// else{
//   for(let i=n;i<=n;i--){
//     if(m%i==0 && n%i==0 ){
//       console.log(i)
//       break
      
//     }
//   }
// }

 
// //Nhập vào 2 số m,n(m>0,n>0). Tìm bội chung nhỏ nhất của m,n.
// let m= Number(prompt("Nhập vào số m: "))
// let n= Number(prompt("Nhập vào số n: "))
// if(m<=n){
//   console.log("Hãy nhập lại để m lớn hơn n")
// }
// else{
//   for(let i=m;i>=n;i++){
//     if(i%m==0 && i%n==0){
//       console.log(i)
//       break
//     }
//   }
// }


// tí xem
// // Trò chơi đoán số
// const i = Math.floor(Math.random() * 20)+1;
// console.log(i)
// let n=Number(prompt("Nhập số của bạn: "))
// if(i==n){
//     console.log("Chính xác")
    
// }else{
//     console.log("Không chính xác ! Xin hãy thử lại")
    
// }



// // Nhập vào số n (2<=n<=10).Hãy in ta bảng cửu chương của số n.
// let n=Number(prompt("Nhập vào số n: "))
// for(let i=1;i<=10;i++){
//     console.log(n*i)

// }


// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// let n = prompt("Nhap vao so n:");

// In ra man hinh hinh vuong co do dai canh = n
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }


//15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
let m = Number(prompt("Nhập chiều dài"))
let n = Number(prompt("Nhập chiều rộng"))
    
    for (let i = 1; i <= n; i++) {
     for(let j=1;j<=m;j++){
      console.log("*")
     } 
    }
    


  
 



   







  
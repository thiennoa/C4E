//     let a= Number(prompt("Nhập vào số a:"))
//     let b= Number(prompt("Nhập vào số b:"))
//     let c= Number(prompt("Nhập vào số c:"))
//     let x=[]
// function nghiem_pt(a,b,c){
    
//     let delta= b*b - 4*a*c
//     if(delta>0){
//       let x1=(-b + Math.sqrt(delta))/(2*a)
//       let x2=(-b - Math.sqrt(delta))/(2*a)
//        x.push(x1)
//        x.push(x2)
//     }
//     else if(delta==0){
//        let x3= -b/2*a
//        x.push(x3)
//     }
//     else{
//         console.log("phương trình vô nghiệm")
//     }

// }
// console.log(x)

//

// function timNghiemPtBac2(a,b,c){
//     if(a==0){
//         console.log("Không phải pt bậc 2")
//         return null
//     }
//     const delta= b*b -4*a*c
//     if(delta==0){
//         const x = -b/(2*a)
//         return[x]
//     }else if(delta>0){
//         const x1=(-b + Math.sqrt(delta))/(2*a)
//         const x2=(-b - Math.sqrt(delta))/(2*a)
//         return [x1,x2]
//     }else{
//         return[]
//     }
// }

// let nghiem = timNghiemPtBac2(0,-7,1)
// console.log(nghiem)




// function kiemTraTamGiac(a,b,c){return((a+b)>c && (a+c)>b && (b+c)>a && a>0 && b>0 && c>0) // cách 2

//     // if((a+b)>c && (a+c)>b && (b+c)>a && a>0 && b>0 && c>0){
//     //     return true
//     // }else{
//     //     return false
//     // }
// }

// console.log(kiemTraTamGiac(3,3,2.9))

// // tìm user có id thỏa mãn điều kiện
// function findUserById(id){
//     // dùng for , for ... of , forEach
//     for(let user of users){
//         if(user.id==id) return user;
//     }
//     return null


//     // dùng phương thức find của mảng
// }
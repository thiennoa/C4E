// // cách khai báo mảng
// let names= [];
// let names1= [
//     "thien",
//     "hanh",
//     "Linh",

// ]
// console.log(names1)


// let number= [1,400,3,20]

// let isRich= false
// let isHandsome=true
// let hasGirlfriend= false

// let features=[isRich,isHandsome,hasGirlfriend]

// //isRich= true
// // thay đổi giá trị phần tử bất kì trong mảng

// console.log(features)

// // truy xuất giá trị 1 phần tử bất kì trong mảng
// console.log(features[1])
// console.log(number[3])

// // thay đổi giá trị phần tử bất kì trong mảng
// number[1]=21
// console.log(number)



// let array1=["a","b","c"]
// let array2=["a","b","c"]
// // kiểm tra kiểu dữ liệu của mảng
// console.log(typeof (array1))
// console.log(array1+ array2) // chương trình tự động ép kiểu khi thực hiện phếp cộng
// console.log(array1==array2) // kết quả ra false vì 2 mảng khác nhau

// array1[0]="Hello"
// console.log(array1,array2)


// // hoán đổi giá trị của 2 phần tử trên mảng
// let tmp= number[0]
// number[0]= number[3]
// number[3]=tmp
// console.log(number)



// // Duyệt mảng
// let num=[1,2,3,4,3,4,4,1]

// // cách 1: dùng for 
// for(let i=0; i< num.length; i++){
//     console.log((i+1)+"." +num[i])

//     let choice_num= num[i]
//     if(choice_num=="3" || choice_num=="4"){
//         console.log(choice_num)
//     }

// }

// // cách 2: for...of
// let i=0 // thêm chỉ số
// for(const num1 of num){
//     // làm việc với num ở trong này
//     i++ // thêm chỉ số
// }

// const number2=[1,2,3,4,5,6,7,8,9]
// // // in ra số chẵn trong number2
// // for(let i=0;i< number2.length; i++){
// //     if(number2[i]%2==0){
// //         console.log(number2[i])
// //     }
// // }
// // tính tổng phần tử
// let sum=0
// for(let i=0;i<number2.length;i++){
//    const number_sum=number2[i]
//    sum += number_sum
   
// }
// console.log(sum)
// // tìm phần tử nhỏ nhất
// let min = number2[0]
// for(let i=0;i<number2.length;i++){
//     const min_arr = number2[i]
//     if(min>min_arr){
//         min = min_arr
//     }
//  }
//  console.log(min)


// // thêm/xóa phần tử mảng

// // thêm 3 số vào đầu mảng
// number2.unshift(100,200,4)
// console.log(number2)


// // thêm vào cuối 
// number2.push(-1,-2,-4)
// console.log(number2)

// // xóa 1 phần tử đầu tiên trong mảng
// let deletefirstnumber=number2.shift()
// console.log(deletefirstnumber)// hiển thì phần tử bị xóa

// // xóa 1 phần tử cuối mảng
// let deleteLastNumber=number2.pop()
// console.log(deleteLastNumber)


// // tìm hiểu phương thức splice()


// // Tìm kiếm / Lọc / biến đổi...


// // Mảng đa chiều

// //Object & Function

// let pet= {
//     name: "Bob",
//     age: 2,
//     kind: "dog"
// }

// const my_info= {
//     // attributes
//     name: "Trinh Thien",
//     "1-first-name": "Trinh",
//     dob: "21/01/2002",
//     address: "Nam Dinh",
//     phoneNumber: "0987654321",
//     the_pet: pet
//     // pet: {
//     //     name: "Bob",
//     //     age: 2,
//     //     kind: "dog"
//     // }

//     // hành vi phương thức
// };


// const my_info_2= {
//     // attributess
//     name: "Trinh Thien",
//     "1-first-name": "Trinh",
//     dob: "21/01/2002",
//     address: "Nam Dinh",
//     phoneNumber: "0987654321",
//     the_pet: pet
//     // pet: {
//     //     name: "Bob",
//     //     age: 2,
//     //     kind: "dog"
//     // }

//     // hành vi phương thức
// };



// // truy xuất & sử dụng thuộc tính

// // lấy ra giá trị của thuộc tính name trong my_info
// console.log(my_info.name)
// console.log(my_info["address"])

// const key= "dob"
// console.log(my_info[key])


// // thay đổi / thêm / xóa

// // thay đổi
// my_info.phoneNumber= "0111111111";
// my_info["phoneNumber"]= "0111111111";

// // thêm thuộc tính isHandsome cho my_info
// my_info.isHandsome= true;
// my_info["isHandsome"]=true

// // xóa thuộc tính dob
// delete my_info.dob

// console.log(my_info)


// // duyệt Object
// for(let key in my_info){
//     console.log("Đặc điểm " + key + " có giá trị là: " + my_info[key])// khác my_info.key
// }



// // Functions (nhiều đầu vào 1 đầu ra)

// // khai báo function nhập và kiểm tra 1 số
// // let a=0;
// // let b=0;
// // function inputNumber(label){
// //     let input=NaN;
// //     do{
// //         input=Number(prompt("Nhập vào số " + label +": "));
        
// //     }while(isNaN(input));
// //     return input; // trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới
// // }

// // // gọi function inputNumber
// // // inputNumber();

// // a= inputNumber("a")
// // b= inputNumber("b")
// // console.log(a+b)

// // //
// // function name(){
// //     your_name=prompt("Nhập tên của bạn:")
// //     console.log("Hello world, "+ your_name)
    
// // }
// // name()

// // function có tính chất hoiting: sử dụng function trước khi khai báo


// // // function trong function
// // function test(){
// //     let a=100
// //     let b=200
// //     function calculateAB(){
// //         return a+b
// //     }
// //     return calculateAB() // return calculateAB thì return về định nghĩa của hàm
// // }
// // console.log(test())



// /// callback

// function doSomething(){
//     console.log("Do something here")
// }
// function sayHello(){
//     console.log("hello world")
// }
// function executeAfterSecond(seconds, work){
//     console.log("thực thi gì đó sau "+seconds+" giây")
//     setTimeout(work, seconds)
// }

// executeAfterSecond(3000, sayHello)// khac với executeAfterSecond(3000, sayHello())
// executeAfterSecond(5000, doSomething)

// // bất đồng bộ


// //Arrow function

// // khai báo arrow function
// const doAnything=() =>{
//     // arrow function không có giá trị trả về
// }

// const doNothing=(a,b,c,d) =>{
//     return "hello";
// };

// // kiểu 1
// function sum(a,b,c){
//     return a+b+caches
// }

// // kiểu 2
// // const sum= (a,b,c) => a+b+c;


// const TrinhThien= {
//     name: "Trinh Thien",
//     flirt: () => {
//         console.log(this)
//     },
//     run: function(){
//         console.log(this)
//     }

// }

// TrinhThien.flirt()
// TrinhThien.run()

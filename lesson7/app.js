
// //1
// // nhập dữ liệu từ bàn phím và gán giá trị vừa nhập vào trong 1 biến

// let input = prompt("Hãy nhập vào đây để gán giá trị cho biến 'input': "); // nhập vào trong prompt là kiểu string
// console.log("bạn vừa nhập vào" + input);


// //2
// let x=Number(prompt("nhập số x"));
// let y=Number(prompt("nhập số y"));
// let z = x+y;
// console.log(z)
// // ép kiểu sang number cách 1 : nhân với 1 ; cách 2 Number thêm trước prompt


// //3

// let name = "Trinh Thien";
// {
//     let age=28;
//     let name = "hehehe"
//     console.log(name);
//     {
//         let address=" Nam Dinh";
//         // dùng được age ở chỗ này
//         //address chỉ tồn tại trong khối lệnh này
//     }
//     console.log(age);
//     console.log(address);// không tồn tại trong khối lệnh này
// }


// //4
// let age=Number(prompt(" Nhập vào tuổi của bạn"));
// console.log(age);
// if(age <= 18){
//     console.log("Không cho vào");
// }else{
//     console.log("Đủ điều kiện xem");
// }
// // nhập vào 1 chữ thì nó ra else vì điều kiện 1 false


// //4
// // nhập phân loại học sinh 1 2 3

// let diem = Number(prompt("Nhập số điểm của bạn"));
// if(diem <=4){
//     console.log("F");
// }else if(diem >4 && diem<8){
//     console.log("B");
// }else if(diem>=8 && diem <=10){
//     console.log("A plus")
// }else {
//     console.log(" Nhập đúng điểm của bạn")
// }


// //5
// let text = prompt("Nhập vào 1 chuỗi");
// if(text.length<8){
//     console.log("chuỗi ngắn quá");
// }else{
//     console.log("chuỗi này được");
// }


// //6
// // in ra dòng anh yêu em 500 lần và mỗi dòng có đánh số thứ tự
// for(let count=1;count<=500;count++){
//     console.log(count + " anh yêu em")
// }

// // tính tổng vòng lặp dãy số

// let sum=0
// for(let i=1;i<=50;i++){
    
//     sum +=i
//     console.log(sum)
// }


// //7
// let num =10;
// while(num >=6){
//     console.log(num);
//     num = Math.floor(Math.random() * 10); // chạy một số tự nhiên (làm tròn) từ 0 đến 10
// }


// //dùng while console một dãy 
// let index =1
//  while(index<=200){
//     console.log(index);
//     index++;
//  }


// let s = prompt(" chuỗi s")
// let l= prompt(" chuỗi l")
// while(s.length < l.length){
//     s += "a";
// }
// console.log(s);




// let x = prompt(" Nhập số x")
// let y = prompt ( "Nhập số y")
// if(
//     x>=0 && x<y && y <=100
// ){
//     while(x<y){
//         x++
//         y--
//     }
//     console.log(x,y)
// }else{
//     console.log("")
// }




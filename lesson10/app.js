// // quy ước : tất cả biến lưu phần tử html đều có $ đằng trước

// // truy xuất phần tử thông qua id
// const $title= document.getElementById("big-title");

// console.log($title)


// // truy xuất phần tử thông qua class
// const $paragraphs= document.getElementsByClassName("red-paragraph")// trả về html collection

// for(const $paragraph of $paragraphs ){
//     console.log($paragraph)
// }
// console.log($paragraphs)

// // truy xuất phần tử thông qua tên thẻ
// const $image= document.getElementsByTagName("img")
// console.log($image)

// // // document.querySelector(), document.querySelectorAll() => Tìm hiểu thêm
//Phương thức querySelector() trả về phần tử đầu tiên là phần tử con của phần tử mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định.

// //
// // const $paragraphs= document.getElementsByClassName("red-paragraph")// trả về html collection

// // for(const $paragraph of $paragraphs ){
// //     console.log($paragraph.parentElement)// chidlren
// // }


// // lấy ra nội dung của phần tử
// let titleContent= $title.innerHTML
// console.log(titleContent)

// // thay đổi nội dung
// $title.innerHTML= "Nội dung mới"


// // lấy ra thuộc tính của 1 phần tử
// let titleAttributeValue= $title.getAttribute("data-hello")
// console.log(titleAttributeValue)

// //thêm mới / thay đổi thuộc tính của 1 phần tử
// $title.setAttribute("data-goodbye","this is goodbye")
// $title.setAttribute("data-hello", "this is hello")

// // xóa thuộc tính của 1 phần tử
// $title.removeAttribute("data-goodbye")


// // thay đổi định dạng của 1 phần tử
// $title.style.color= "red"
// $title.style.backgroundColor = "black"
// $title.style.display="flex"
// // $title.setAttribute("style","color": red;backgroundcolor: black)

// for (const $p of $paragraphs){
//     $p.style.color= "red" // style tất cả phần tử
// }
// $paragraphs[0].style.color= "blue" // style 1 phần tử


// // thêm phần tử vào trang web
// const $link= document.createElement("a")
// $link.innerHTML= "this is link to somewhere"
// $link.setAttribute("href", "http://google.com")

// // document.body.append($link)// append thêm vào cuối ; prepend thêm vào đầu
// $title.append($link)// thêm link vào trước title
// $title.after($link)// thêm link vào sau title
// $title.append($link)// thêm link vào trong title

// // xóa phần tử trên trang web
// // $title.remove()
// // $title.parentElement.remove()// xóa full



// // // listener sau ghi đè listener trước
// // $title.onclick= handleClickTitle1;// click và thực hiện hàm
// // $title.onclick= handleClickTitle2;


// // thêm listener tức là không bị ghi đè và thực hiện cùng lúc
// $title.addEventListener("click", handleClickTitle1)
// $title.addEventListener("click", handleClickTitle2)

// function handleClickTitle1(){
//     console.log("vừa click vào title")
// }
// function handleClickTitle2(){
//     console.log("hehe")
// }

// // end 


// thực hành
// const $emailInput= document.getElementById("my-email")
// $emailInput.onchange= function(){
//     let email = $emailInput.value; // lấy giá trị nhập vào của ô input
//     if(!isEmailValid(email)) alert(" Hãy nhập lại email")
// }

// //hoặc
// //$emailInput.addEventListener("change",function(){

// //});
// function isEmailValid(email){
//     return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

// //ý 2
// const $numberA= document.getElementById("number-a")
// const $numberB= document.getElementById("number-b")
// const $plusBtn= document.getElementById("plus-btn")
// const $subBtn= document.getElementById("sub-btn")

// $plusBtn.onclick= function(){
//     let a= Number($numberA.value)
//     let b= Number($numberB.value)
//     alert(a+b)
// }

// $subBtn.onclick= function(){
//     let a= $numberA.Bvalue
//     let b= $numberB.value
//     alert(a-b)
// }


//
const $urlInput= document.getElementById("url-input")
const $widthInput= document.getElementById("width-input")
const $heightInput= document.getElementById("height-input")
const $boderRadiusInput= document.getElementById("boder-radius-input")
const $altInput= document.getElementById("alt-input")
const $image= document.getElementById("image")

$urlInput.onchange= () => $image.setAttribute("src",$urlInput.value)
$altInput.onchange= () => $image.setAttribute("alt",$urlInput.value)
$widthInput.onchange= () => $image.style.width= $widthInput.value + "px"
$heightInput.onchange= () => $image.style.height= $widthInput.value + "px"
$boderRadiusInput.onchange=() => $image.style.borderRadius= $boderRadiusInput.value + "px"


// bai 2
// const $contentInput = document.getElementById("task-content-input")
// const $createTaskBtn = document.getElementById("create-task-btn")
// const $taskList= document.getElementById("task-list")

// $createTaskBtn.onclick=()=>{
//     let value= $contentInput.value
//     // tao 1 li
//     const $li= document.createElement("li")
//     $li.innerHTML = value
//     $taskList.append($li)
// }
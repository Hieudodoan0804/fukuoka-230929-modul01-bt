//bai1.1
// console.log("wellcome to Rikkei Academy");
//bai1.2
// let age=prompt("mời bạn nhập số tuổi của mình");
// console.log(age);
//bai1.3
// document.write("Quyết tâm học lập trình javascript");
//bai1.4
// alert("Chào mừng bạn đến với học viện Rikkei Academy");
//bai1.5
// confirm("bạn đã đủ 18 tuổi chưa!");
//bai2.1
// var firstName = 'Academy';
// console.log(firstName)
// let lastName = 'Rikkei';
// console.log(lastName);
// const fullName ='Rikkei Academy';
// console.log(fullName);
// //bai2.2
// // Number
// const a = 26;
// console.log(a);
// var b = 2.5;
// console.log(b);
// // String
// let Name = "Do Doan Hieu";
// console.log(Name);
// let c = "10";
// console.log(c);
// // Boolean
// var result = a >b;
// console.log(result);
// // Undefined
// var age;
// console.log(age);
// // Null
// var id = null;
// console.log(id);
// // NaN
// var result = Name/a;
// console.log(result);
// bai3.1
// var x = parseInt(prompt("chiều dài hình chữ nhật"));
// var y = parseInt(prompt("chiều rộng hình chữ nhật"));
// var p = (x + y) * 2;
// var s = x * y;
// console.log("chu vi hình chữ nhật là :", p);
// console.log("diện tích hình chữ nhật là :", s);
// // bai3.2
// const pi = 3.14;
// var r = parseInt(prompt("bán kính hình tròn"));
// var c = r * 2 * pi;
// var s = r * r * pi;
// console.log("chu vi hình tròn la :", c);
// console.log("diện tích hình tròn là :", s);
// bai5.7
// let a = 5;
// let b = "5";
// console.log(a==b);// "==" là so sánh về mặt giá trị nếu 2 có cùng giá trị sẽ đưa ra kết quả là true
// console.log(a===b);// "===" là so sánh về cả giả trị và kiểu dữ liệu (a và b đều có giá trị là 5 nhưng a kiểu dữ liệu number, b kiểu dữ liệu string nên kết quả là false)
// console.log(a!=b);// "!=" so sánh không bằng vì a và b cùng giá trị nên kết quả là false
// console.log(a!==b);// "!==" (so sánh không cùng kiểu dữ liệu hoặc bằng giá trị ) true vì khác kiểu dữ liệu nhưng bằng giá trị
// bai 5.8 
// let a = 6;
// let result = ++a + a + a++ + ++a + a;
//         = 7   + 7 + 7   + 9   + 9 = 39
// Bai 5.9
console.log(0 || NaN || "Rikkei Academy" || null); // Rikkei Academy vì lấy truthy đầu tiên là Rikkei Academy(0,NaN,null là falsy)
console.log(null || NaN || false || null); // null vì k có truthy nên sẽ lấy falsy cuối cùng là null
console.log(undefined || 1 || 5 || null); // 1 vì là truthy đầu tiên 
console.log("" || null || 5 || NaN); // 5 vì là truthy đầu tiên 
console.log(1 || null || 12 || NaN); //1 vì là truthy đầu tiên
// bai 5.10 
console.log(0 && 1 && "Rikkei Academy" && null); // 0 vì là falsy đầu tiên
console.log(2 && NaN && false && null); // NaN vì là falsy đầu tiên
console.log(3 && 1 && 5 && null); // null vì là falsy
console.log("1" && undefined && 5 && NaN);// undefined vì là falsy
console.log(1 && null && 12 && NaN); // null vì là falsy
//chạy theo mind map buổi 14
/*
function truoc(fun) {
	setTimeout(function () {
		console.log("Là task 1");
		fun();
	}, 2000)
}
function sau() {
	setTimeout(function () {
		console.log("Là task 2");
	}, 1000)
}
console.log("task 3");
truoc(sau);
*/

//chạy theo bài viết 
//https://kipalog.com/posts/Callback-la-khi-gi-

//con thỏ cần 3s mới ăn cỏ và uống nước xong
function con_tho_an_co(callback){
	setTimeout(function(){
		console.log("Con thỏ ăn cỏ, uống nước");
		callback();
	}, 3000);
}

//con thỏ chui vô hang
function hang(){
	console.log("Chui vô hang");
}

//thêm thằng callback
const call = function (){
	hang();
}

//thêm thằng điệp viên
const diepvien = function(){
	call();
}

//muốn thêm nhiêu thì thêm ha
con_tho_an_co(diepvien);



$(function(){
$('.slider').slick({
autoplay:true,
autoplaySpeed:5000,
dots:true,
});

var roop = 1;
var roop2 = 1;
var roop3 =1;
$(window).scroll(function() {

// console.log("スクロール値は$(this).scrollTop()でとる。とった値は→"+ $(this).scrollTop());
var scrlTop = $(this).scrollTop();
var h3scrl = $('.header').offset().top;
// console.log(".header値は"+ h3scrl);
// console.log("roopは"+ roop);
if (h3scrl < scrlTop && roop == 1) {
// console.log(h3scrl);
roop = roop + 1;
// console.log("roopは"+ roop);

$('.content1').animate({
'opacity':'1'
},2000);
}

var h3scrl2 = $('.content1').offset().top;
// console.log(".content1値は"+ h3scrl2);
// console.log("roop2は"+ roop2);
if (h3scrl2 < scrlTop && roop2 == 1) {
// console.log(h3scrl2);
roop2 = roop2 + 1;
// console.log("roop2は"+ roop2);

$('.content2').animate({
'opacity':'1'
},2000);
}

var h3scrl3 = $('.content2').offset().top;
// console.log(".content2値は"+ h3scrl3);
// console.log("roop3は"+ roop3);
if (h3scrl3 < scrlTop && roop3 == 1) {
// console.log(h3scrl3);
roop3 = roop3 + 1;
// console.log("roop3は"+ roop3);

$('.content3').animate({
'opacity':'1'
},1000);
}


});


});

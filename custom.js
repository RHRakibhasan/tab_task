var out_name = document.getElementById("out_name");
var out_age = document.getElementById("out_age");
var out_addr = document.getElementById("out_addr");
var out_fb = document.getElementById("out_fb");
var pro_img = document.getElementById("pro_img");
var button_1 = document.getElementById("button1");
var button_2 = document.getElementById("button2");
var button_3 = document.getElementById("button3");

function button1() {
    out_name.innerHTML = "maftun";
    out_age.innerHTML = "18";
    out_addr.innerHTML = "Comillah";
    out_fb.innerHTML = "https://www.facebook.com/maftunsiam";
    out_fb.href = "https://www.facebook.com/maftunsiam";
    pro_img.src = "maftun_siyam.png";
    button_1.innerHTML = "maftun";
}

function button2() {
    out_name.innerHTML = "prova";
    out_age.innerHTML = "17";
    out_addr.innerHTML = "Dhaka";
    out_fb.innerHTML = "https://www.facebook.com/tabassum.prova.45";
    out_fb.href = "https://www.facebook.com/tabassum.prova.45";
    pro_img.src = "tabassum_prova.png";
    button_2.innerHTML = "prova";
}

function button3() {
    out_name.innerHTML = "Rakib al hasan";
    out_age.innerHTML = "20";
    out_addr.innerHTML = "Sylhet";
    out_fb.innerHTML = "https://www.facebook.com/rhrakibm";
    out_fb.href = "https://www.facebook.com/rhrakibm";
    pro_img.src = "rakib.png";
    button_3.innerHTML = "rakib";
}
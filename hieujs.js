var a = document.getElementById('ten');
var b = document.getElementById('matKhau');
var c = document.getElementById('container');
var d = document.querySelector('.main');
var e = document.querySelector('.box');
d.onclick=()=>{
    var hoaiName = 'Cam Hoai';
    var hoaiPass = 'Hoai0803';

    var bongName = 'Quynh Bong';
    var bongPass = 'Bong0803';

    var anhName = 'Minh Anh';
    var anhPass = 'Anh0803';

    var thanhName = 'Thuy Thanh';
    var thanhPass = 'Thanh0803';

    var thuyName = 'Vo Thuy';
    var thuyPass = 'Thuy0803';

    var hienName = 'Thu Hien';
    var hienPass = 'Hien2010';

    if(hoaiName===a.value && hoaiPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc cô Hoài vui vẻ, xinh đẹp và thành công trong cuộc sống. Mong cô tán hộ cháu e Hiền sớm nhất có thể &#60 3 :v</p>
            <img src ="./hoai.jpg">
        </div>
        `
    }

    else if(hienName===a.value && hienPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
             Chúc e vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé!
             Tấm thiệp này coi như là quà tinh thần, bao giờ mà gặp a thì sẽ có điều bất ngờ nhé ^^ </p>
            <img src ="./Hien.jpg">
        </div>
        `
    }

    else if(bongName===a.value && bongPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Bông vui vẻ, xinh đẹp và thành công trong cuộc sống nha. 
            Mong sớm gặp lại Bông ở HN :)) (Mãi cười tươi như vậy nhé ! ) </p>
            <img src ="./bong.jpg">
        </div>
        `
    }

    else if(anhName===a.value && anhPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Ánh vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong sớm gặp lại Ánh nha :))
             (Mãi cười tươi như vậy nhé ! ) </p>
            <img src="./anh.jpg">
        </div>
        `
    }

    else if(thanhName===a.value && thanhPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 a chúc e Thành Teaching Assistant vui vẻ, xinh đẹp và thành công trong cuộc sống nha. Mong có dịp gặp e ở Hà Nội :))</p>
            <img src="./thanh.jpg">
        </div>
        `
    }

    else if(thuyName===a.value && thuyPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày 8/3 mình chúc bạn Thúy vui vẻ, xinh đẹp và thành công trong cuộc sống nha.
            Không nhầm thì nay còn là sinh nhật bạn. Vậy nên chúc bạn có một sinh nhật đầu tiên ở trọ thật đáng nhớ.
            Cố gắng qua môn để sớm ra trường nhes.
             Mong sớm gặp lại Thúy nha :))
             (Luôn phải nở nụ cười trên môi như bạn Thúy mình biết nha 😁 ! ) </p>
            <img src="./thuy.jpg">
        </div>
        `
    }

    else {
        e.innerHTML = '<h2 style="color: red; text-align: center; margin-top: 20px">Nhập sai</h2>'
    }
 };
 
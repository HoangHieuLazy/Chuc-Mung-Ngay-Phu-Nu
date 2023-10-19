var a = document.getElementById('ten');
var b = document.getElementById('matKhau');
var c = document.getElementById('container');
var d = document.querySelector('.main');
var e = document.querySelector('.box');
d.onclick=()=>{
    var hoaiName = 'Cam Hoai';
    var hoaiPass = 'Hoai0803';

    var hienName = 'Thu Hien';
    var hienPass = 'Hien2010';

    var linhName = 'Dieu Linh';
    var linhPass = 'Linh2010';

    var Name = '';
    var Pass = '';


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

    else if(linhName===a.value && linhPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
            Chúc e vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé!
            Tấm thiệp này coi như là quà tinh thần, bao giờ mà gặp a thì sẽ có điều bất ngờ nhé ^^ </p>
            <img src ="./Linh.jpg">
        </div>
        `
    }


    else {
        e.innerHTML = '<h2 style="color: red; text-align: center; margin-top: 20px">Nhập sai</h2>'
    }
 };
 
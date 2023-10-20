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

    var trangName = 'Trang Trang';
    var trangPass = 'Trang2010';

    var bichName = 'Bich Bich';
    var bichPass = 'Bich2010';

    var aiName = 'Thuy Ai';
    var aiPass = 'Ai2010';

    var manName = 'Man Man';
    var manPass = 'Man2010';

    var thuName = 'Hoai Thu';
    var thuPass = 'Thu2010';

    var huongName = 'Thanh Huong';
    var huongPass = 'Huong2010';

    var anhName = 'Dieu Anh';
    var anhPass = 'Anh2010';

    var yenName = 'Thu Yen';
    var yenPass = 'Yen2010';

    var khanhName = 'Ngoc Khanh';
    var khanhPass = 'Khanh2010';

    var thu2k1Name = 'Huyen Thu';
    var thu2k1Pass = 'Thu2010';

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
        </div>  `
    }

    else if(trangName===a.value && trangPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
            Chúc cậu vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé! </p>
            <img src ="./Trang.jpg">
        </div>  `
    }

    else if(bichName===a.value && bichPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Ngày Phụ nữ Việt Nam 20/10, chúc cậu nhận được nhiều quà, nhiều hoa, nhiều lời khen lời chúc của phái nam trong ngày hôm nay.
            Đặc biệt là từ bạn Trường đẹp zai nhé :)).
             Chúc cậu em có một ngày 20/10 thật là ý nghĩa, vui tươi ngập tràn hạnh phúc. </p>
            <img src ="./Bich.jpg">
        </div>  `
    }

    else if(thuName===a.value && thuPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày Phụ nữ Việt Nam, xin gửi những lời chúc nồng nhiệt nhất đến bé Thu.
             Chúc em ngày một xinh đẹp để ngày càng có thêm nhiều chàng trai đeo bám nhằng nhằng như lửa bám xăng,
              như răng bám lợi, như trời bám mây, như cây bám đất, như bít tất bám... bàn chân nhé ^^ </p>
            <img src ="./Thu.jpg">
        </div>  `
    }

    else if(manName===a.value && manPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Nhân ngày Phụ nữ Việt Nam, xin gửi những lời chúc nồng nhiệt nhất đến bé Mận.
            Chúc em ngày một xinh đẹp để ngày càng có thêm nhiều chàng trai đeo bám nhằng nhằng như lửa bám xăng,
             như răng bám lợi, như trời bám mây, như cây bám đất, như bít tất bám... bàn chân nhé ^^  </p>
            <img src ="./Man.jpg">
        </div>  `
    }

    else if(aiName===a.value && aiPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
            Chúc em vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé!
            Tấm thiệp này coi như là quà tinh thần, bao giờ mà gặp đc anh thì a sẽ có điều bất ngờ cho e nhé ^^ </p>
            <img src ="./Ai.jpg">
        </div>  `
    }

    else if(huongName===a.value && huongPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
            Chúc e vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé!
            Tấm thiệp này coi như là quà tinh thần, bao giờ mà gặp a thì sẽ có quà cho nhé ^^ </p>
            <img src ="./Huong.jpg">
        </div>  `
    }

    else if(anhName===a.value && anhPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
            Chúc em vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé!
            Tấm thiệp này coi như là quà tinh thần, bao giờ mà gặp a thì sẽ có điều bất ngờ nhé ^^ </p>
            <img src ="./DieuAnh.jpg">
        </div>  `
    }

    else if(yenName===a.value && yenPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Trên thiên đường có 10 thiên thần: 5 thiên thần đang chơi đùa, 4 thiên thần đang nói chuyện và 1 thiên thần đang đọc tin nhắn này.
            Chúc em vui vẻ, hạnh phúc và có một ngày 20/10 ý nghĩa  nhé!
            Tấm thiệp này coi như là quà tinh thần, bao giờ mà gặp đc anh thì a sẽ có điều bất ngờ cho e nhé ^^ </p>
            <img src ="./Yen.jpg">
        </div>  `
    }

    else if(khanhName===a.value && khanhPass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p>Tớ xin thay mặt cho hội những người đẹp trai good boy, chúc Khánh có một ngày 20/10 ngập tràn niềm vui và hạnh phúc 😁.
             Chúc cậu luôn xinh đẹp, tươi trẻ và nhận được thật nhiều quà nhé! 
             Future Doctor 🩺 </p>
            <img src ="./khanh.jpg">
        </div>  `
    }

    else if(thu2k1Name===a.value && thu2k1Pass===b.value) {
        c.innerHTML = 
        ` 
        <div class="content">
            <h1>HAPPY WOMEN DAY</h1>
            <p> Happy Women's Day! Chúc Thu xinh đẹp có một ngày 20/10 vui vẻ, hạnh phúc nhé :)).
             Chúc cho mọi dự định trong tương lai của cậu sẽ thành công. 🎈🎈
             Bác sỹ tương lai !!!</p>
            <img src ="./Thu_2k1.jpg">
        </div>  `
    }

    else {
        e.innerHTML = '<h2 style="color: red; text-align: center; margin-top: 20px">Nhập sai</h2>'
    }
 };
 
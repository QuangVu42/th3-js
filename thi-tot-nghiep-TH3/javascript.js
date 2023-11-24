// js 7.1
if (document.getElementById('cau1')) {
    document.getElementById('cau1').innerHTML = `<b>Vũ Như Quang</b><br /> AT150344`
}

var cau2input = document.getElementById('cau2_input')
function myAlertCau2() {
    if (cau2input.value) {
        alert('Dữ liệu bạn vừa nhập là ' + cau2input.value)
    }
}

var cau3input = document.getElementById('cau3_input')
function myAlertCau3() {
    if (cau3input.value % 2 == 0) {
        alert(cau3input.value + ' là số chẵn')
    } else {
        alert(cau3input.value + ' là số lẽ')
    }
}

var cau4Show = document.getElementById('cau4show')
var d = new Date()
var time = d.getHours()
if (time < 10) {
    if (cau4Show) {
        cau4Show.innerHTML = '<b>Good morning</b>'
    }
} else if (time >= 10 && time < 16) {
    if (cau4Show) {
        cau4Show.innerHTML = '<b>Good day</b>'
    }
} else {
    if (cau4Show) {
        cau4Show.innerHTML = '<b>Hello World!</b>'
    }
}

var cau5Show = document.getElementById('cau5Show')
var d5 = new Date()
var theDay = d.getDay()
if (cau5Show) {
    switch (theDay) {
        case 5:
            cau5Show.innerHTML = '<b>Friday</b>'
            break;
        case 6:
            cau5Show.innerHTML = '<b>Saturday</b>'
            break;
        case 0:
            cau5Show.innerHTML = '<b>Sunday</b>'
            break;
        default:
            cau5Show.innerHTML = '<b>Chuc dau tuan vui ve!</b>'
    }
}

var cau6Show = document.getElementById('cau6Show')
function disp_confirm() {
    var r = confirm("Press a button");
    if (r == true) {
        if (cau6Show) Ơ
        cau6Show.innerText = "You pressed OK!";
    }
    else {
        cau6Show.innerText = "You pressed Cancel!";
    }
}

var cau7Show = document.getElementById('cau7Show')
function disp_prompt() {
    var name = prompt("VUI LONG NHAP TEN CUA BAN", "Vũ Như Quang");
    if (name != null && name != "") {
        cau7Show.innerText = "XIN CHAO " + name + "! How are you today?";
    }
}

var cau8Show = document.getElementById('cau8Show')
var str = "Hello world!";
if (cau8Show) {
    cau8Show.innerHTML = str.indexOf("Hello") + "<br />";
    cau8Show.innerHTML = str.indexOf("World") + "<br />";
    cau8Show.innerHTML = str.indexOf("world") + "<br />";
    cau8Show.innerHTML = str.toUpperCase() + "<br />";
    cau8Show.innerHTML = str.length + "<br />";
    cau8Show.innerHTML = str.replace("w", "W") + "<br />";
}

var cau9Show = document.getElementById('cau9Show')
var x;
var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
for (x in mycars) {
    if (cau9Show) {
        cau9Show.innerHTML = mycars[x] + "<br />";
    }
}

function timedMsg() {
    var t = setTimeout("alert('5seconds!')", 5000);
}

function timedText() {
    var t1 = setTimeout("window.document.lam.txt.value='2seconds!'", 2000);
    var t2 = setTimeout("document.getElementById('txt').value='4 seconds!'", 4000);
    var t3 = setTimeout("document.getElementById('txt').value='6 seconds!'", 6000);
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function mouseOver() {
    document.b1.src = "./assets/img/71.jpg";
}
function mouseOut() {
    document.b1.src = "./assets/img/71.jpg";
}

var phone = new Array();
phone["lam"] = "090540468";
phone["duc"] = "0905274747";
phone["thinh"] = "0904909086";
phone["hien"] = "0905146560";
phone["daotao"] = "05113519929";
function disphone(thephone, entry) {
    var num = thephone[entry];
    window.document.myform.numbox.value = num;
}


// js 7.2
var select72 = document.getElementById('72select');
var showContent72 = document.getElementsByClassName('html72_form')

function mySelect72() {
    if (select72) {
        if (select72.value === 'test1') {
            showContent72[0].classList.add('active')
            showContent72[1].classList.remove('active')
            showContent72[2].classList.remove('active')
        } else if (select72.value === 'test2') {
            showContent72[1].classList.add('active')
            showContent72[0].classList.remove('active')
            showContent72[2].classList.remove('active')
        } else if (select72.value === 'test3') {
            showContent72[2].classList.add('active')
            showContent72[1].classList.remove('active')
            showContent72[0].classList.remove('active')
        }
    }
}
// js 7.4
var MHS74 = document.getElementsByClassName('input_74-MHS')
var HT74 = document.getElementsByClassName('input_74-HT')
var NS74 = document.getElementsByClassName('input_74-NS')
var DC74 = document.getElementsByClassName('input_74-DC')
var L74 = document.getElementsByClassName('input_74-L')
var DT74 = document.getElementsByClassName('input_74-DT')
var DL74 = document.getElementsByClassName('input_74-DL')
var DH74 = document.getElementsByClassName('input_74-DH')

function myCheck74(event) {
    event.preventDefault()
    if (MHS74 && HT74 && NS74 && DC74 && L74 && DT74 && DL74 && DH74) {
        if (MHS74[0].value.length > 8) {
            alert('Mã học sinh tối đa 8 kí tự')
        } else if (HT74[0].value.length > 50) {
            alert('Họ tên tối đa 50 kí tự')
        } else if (DC74[0].value.length > 150) {
            alert('Địa chỉ tối đa 150 kí tự')
        } else if (L74[0].value.length > 6) {
            alert('Lớp tối đa 6 kí tự')
        }
        else {
            if (MHS74[0].value.length === 0 ||
                HT74[0].value.length === 0 ||
                NS74[0].value.length === 0 ||
                DC74[0].value.length === 0 ||
                L74[0].value.length === 0 ||
                DT74[0].value.length === 0 ||
                DL74[0].value.length === 0 ||
                DH74[0].value.length === 0) {
                alert('Vui lòng nhập đủ thông tin')
            } else {
                alert('Thông tin nhập đúng định dạng')
            }
        }
    }
}

// js 7.3

var ML72 = document.getElementsByClassName('input_72-ML')
var TL72 = document.getElementsByClassName('input_72-TL')
var KH72 = document.getElementsByClassName('input_72-KH')
var GV72 = document.getElementsByClassName('input_72-GV')

function myCheck73(event) {
    event.preventDefault()
    if (ML72 && TL72 && KH72 && GV72) {
        if (ML72[0].value.length > 6) {
            alert('Mã lớp tối đa 6 kí tự')
        } else if (TL72[0].value.length > 50) {
            alert('Tên lớp tối đa 50 kí tự')
        } else if (GV72[0].value.length > 50) {
            alert('Giáo viên tối đa 50 kí tự')
        } else {
            if (ML72[0].value.length === 0 || TL72[0].value.length === 0 || GV72[0].value.length === 0 || KH72[0].value.length === 0) {
                alert('Vui lòng nhập đủ thông tin')
            } else {
                alert('Thông tin ban vừa nhập :' + ' Mã lớp : ' + ML72[0].value + ', Tên lớp : ' + TL72[0].value + ', Giáo viên : ' + GV72[0].value + ', Khóa học : ' + KH72[0].value)
            }
        }
    }
}
// js 7.5
// js 7.6
var checkbox76 = Array.from(document.getElementsByClassName('checkbox76'))
function myCheckbox76head() {
    checkbox76.forEach((item, index) => {
        if (index === 0 && item.checked === true) {
            checkbox76.map((item1) => {
                item1.parentElement.parentElement.style.backgroundColor = 'yellow'
                item1.checked = true
            })
        } else if (index === 0 && item.checked !== true) {
            checkbox76.map((item1) => {
                item1.parentElement.parentElement.style.backgroundColor = ''
                item1.checked = false
            })
        }
    })
}
function myCheckbox76() {
    if (checkbox76.filter((e, index) => e.checked !== true && index !== 0).length > 0) {
        checkbox76[0].checked = false
        checkbox76[0].parentElement.parentElement.style.backgroundColor = ''
    } else {
        checkbox76[0].checked = true
        checkbox76[0].parentElement.parentElement.style.backgroundColor = 'yellow'
    }
    checkbox76.forEach((item, index) => {
        if (item.checked === true && index !== 0) {
            item.parentElement.parentElement.style.backgroundColor = 'yellow'
        } else if (item.checked !== true && index !== 0) {
            item.parentElement.parentElement.style.backgroundColor = ''
        }
    })
}
// js 7.7
var li77 = Array.from(document.getElementsByClassName('li77'))
var show77 = document.getElementById('show77')

function myActive77(event) {
    console.log('item', event.target.innerText)
    li77.forEach(item => {
        if (item.value === event.target.value) {
            item.classList.add('active77')
            show77.innerText = event.target.innerText
        } else {
            item.classList.remove('active77')
        }
    })
}

// js 7.8
var btn78 = Array.from(document.getElementsByClassName('btn_78'))
var ifram78 = document.getElementById('iframe78')
var dataIframe = [
    "https://actvn.edu.vn/",
    "https://vi.wikipedia.org/wiki/H%E1%BB%8Dc_vi%E1%BB%87n_K%E1%BB%B9_thu%E1%BA%ADt_M%E1%BA%ADt_m%C3%A3_(Vi%E1%BB%87t_Nam)",
    "https://www.lipsum.com/",
    "https://www.wikipedia.org"
]

function myBtn78(e) {
    if (e.target.value) {
        btn78.forEach((item, index) => {
            if (item.value === e.target.value) {
                item.classList.add('active_78')
                ifram78.src = dataIframe[index]
            } else {
                item.classList.remove('active_78')
            }
        })
    }
}

// js 7.9
var level079 = Array.from(document.getElementsByClassName('level0'))
var level179 = Array.from(document.getElementsByClassName('level1'))
var level279 = Array.from(document.getElementsByClassName('level2'))
var level379 = Array.from(document.getElementsByClassName('level3'))

function myTre79(event) {
    if (event.value, event.target.classList[1] === 'show') {
        level179.forEach(item => item.style.display = 'none')
        level279.forEach(item => item.style.display = 'none')
        level379.forEach(item => item.style.display = 'none')
        event.target.classList.remove('show')
        event.target.parentElement.style.width = '230px'
        level079[0].children[0].classList.add('remove72')
        level079[0].children[0].classList.remove('show72')
        level079[0].children[1].classList.add('show72')
        level079[0].children[1].classList.remove('remove72')
    } else {
        level179.forEach(item => item.style.display = 'block')
        level279.forEach(item => item.style.display = 'block')
        level379.forEach(item => item.style.display = 'block')
        event.target.classList.add('show')
        event.target.parentElement.style.width = ''
        level079[0].children[0].classList.remove('remove72')
        level079[0].children[0].classList.add('show72')
        level079[0].children[1].classList.remove('show72')
        level079[0].children[1].classList.add('remove72')
    }
}
function myTre179(event) {
    if (event.value, event.target.classList[1] === 'show') {
        level279.forEach(item => item.style.display = 'none')
        level379.forEach(item => item.style.display = 'none')
        event.target.classList.remove('show')
        event.target.parentElement.style.width = '230px'
        level179[0].children[0].classList.add('remove72')
        level179[0].children[0].classList.remove('show72')
        level179[0].children[1].classList.add('show72')
        level179[0].children[1].classList.remove('remove72')
    } else {
        level279.forEach(item => item.style.display = 'block')
        level379.forEach(item => item.style.display = 'block')
        event.target.classList.add('show')
        event.target.parentElement.style.width = ''
        level179[0].children[0].classList.remove('remove72')
        level179[0].children[0].classList.add('show72')
        level179[0].children[1].classList.remove('show72')
        level179[0].children[1].classList.add('remove72')
    }
}
// js 7.10
// js 7.11
var animation = [
    "./assets/img/711-1.PNG",
    "./assets/img/711-2.PNG",
    "./assets/img/711-3.PNG",
    "./assets/img/711-4.PNG",
]

const imageAnimation = document.getElementById('animation_image')
var animationStatus = 0
var imagePosition = 0
function startAnimation(){
    animationStatus = 0
    changeImage()
}
function changeImage(){
    if (animationStatus === 0){
        imagePosition ++
        imageAnimation.src = animation[imagePosition]
    }
    if (imagePosition === animation.length - 1){
        imagePosition = 0
    }
    setTimeout(changeImage,1000)
}
function stopAnimation() {
    animationStatus = 1

}

// js 7.12


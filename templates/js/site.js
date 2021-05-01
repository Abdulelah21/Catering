function validateLogin() {
    if (checklogin() & checkPassword()) {
        return true;
    } else {
        return false;
    }
}


function checklogin() {
    var phoneno = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
    var inputtxt = document.getElementById("loginname").value;
    var name = document.getElementById('errLoginName');


    if (inputtxt.match(phoneno)) {
        name.display = 'none';
        return true;

    } else {

        name.display = "block";
        name.style.color = "red";
        name.style.TextAlign = "center";
        name.style.fontSize = "14px";
        name.innerHTML = "* ادخل رقم صحيح لهاتفك ";
        return false
    }
}

function checkPassword() {
    var inputtxt2 = document.getElementById("loginpassword");
    var name2 = document.getElementById('errLoginPassword');


    if (inputtxt2.length > 7) {
        name2.display = 'none';

        return true;

    } else {
        name2.display = "block";
        name2.style.color = "red";
        name2.style.TextAlign = "center";
        name2.style.fontSize = "14px";
        name2.innerHTML = " اعد ادخال كلمة المرور  ";
        return false
    }
}

function validReg() {
    if (checkUname() & checkfName() & checkPhon() & checkAdress() & IsVaaildEmail() & validPassword() & repass1()) {
        return true;

    } else {
        return false;
    }

}

function checkUname() {
    var inputtxt2 = document.getElementById("Uname").value;
    var inputtxt = document.getElementById("Uname").value;
    inputtxt3 = inputtxt.length;
    var name2 = document.getElementById('ErrUname');
    var reg = /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]/;

    if (inputtxt2.match(reg) && inputtxt3 > 1) {
        name2.display = 'none';
        name2.display = 'none';


        return true;

    } else {
        name2.display = "block";
        name2.style.color = "red";
        name2.style.TextAlign = "center";
        name2.style.fontSize = "14px";
        name2.innerHTML = "   اكتب الاسم بحروف عربية ومن دون مسافات او ارقام ";

        return false;
    }


}


function checkfName() {
    var inputtxt2 = document.getElementById("fname").value;
    var inputtxt = document.getElementById("fname").value;
    inputtxt3 = inputtxt.length;
    var name2 = document.getElementById('Errfname');
    var reg = /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]/;

    if (inputtxt2.match(reg) && inputtxt3 > 1) {

        name2.display = 'none';

        return true;

    } else {
        name2.display = "block";
        name2.style.color = "red";
        name2.style.TextAlign = "center";
        name2.style.fontSize = "14px";
        name2.innerHTML = "   اكتب الاسم بحروف عربية ومن دون مسافات او ارقام ";

        return false;
    }
}


function checkPhon() {
    var phoneno = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
    var inputtxt = document.getElementById("phoneNum").value;
    var name = document.getElementById('errPhoneNum');


    if (inputtxt.match(phoneno)) {
        name.display = 'none';
        return true;

    } else {

        name.display = "block";
        name.style.color = "red";
        name.style.TextAlign = "center";
        name.style.fontSize = "14px";
        name.innerHTML = "* ادخل رقم صحيح لهاتفك ";
        return false
    }
}


function checkAdress() {
    var inputtxt2 = document.getElementById("Address").value;
    var inputtxt = document.getElementById("Address").value;
    inputtxt3 = inputtxt.length;
    var name2 = document.getElementById('errAddress');
    var reg = /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]/;

    if (inputtxt2.match(reg) && inputtxt3 > 2) {
        name2.display = 'none';
        name2.display = 'none';


        return true;

    } else {
        name2.display = "block";
        name2.style.color = "red";
        name2.style.TextAlign = "center";
        name2.style.fontSize = "14px";
        name2.innerHTML = "   اكتب الاسم بحروف عربية ومن دون مسافات او ارقام ";

        return false;
    }


}

function IsVaaildEmail() { // valudite email useing regex 
    var name2 = document.getElementById("errEmail");
    var t = document.getElementById("email").value.search
    (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== 0;
    if (t || isEmpty(document.getElementById("Email"))) {
        name2.display = "block";
        name2.style.color = "red";
        name2.style.TextAlign = "center";
        name2.style.fontSize = "14px";


        name2.innerHTML = "   * ادخل البريد بشكل صحيح ";

        return false;
    } else {


        name2.innerHTML = "";
        name2.display = "none";
        return true;

    }


}

function validPassword() {
    var inputtxt2 = document.getElementById("register_password").value;
    var name2 = document.getElementById('errPassword');
    var check = inputtxt2.search(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/) !== 0;
    if (check === 0) {

        name2.innerHTML = "";
        name2.display = "none";
        return true;
    } else {

        name2.display = "block";
        name2.style.color = "red";
        name2.style.TextAlign = "center";
        name2.style.fontSize = "14px";


        name2.innerHTML = "   *   يجب ان تحتوي كلمة المرور 8 خانات ,حرف انجليزي كبير وصغير ،ورقم ،ورمز خاص  ";

        return false;
    }


}


function repass1() {
    var emailErr = document.getElementById("errPassword2");

    if (document.getElementById('register_password').value !== document.getElementById("register_password2").value
        || (document.getElementById("register_password2").value.length < 1)) {
        emailErr.style.color = "red";

        emailErr.display = "block";

        emailErr.display = "block";
        emailErr.style.color = "red";
        emailErr.style.TextAlign = "center";
        emailErr.style.fontSize = "14px";

        emailErr.innerHTML = "   كلمة المرور غير متطابقة    ";

        return false;
    } else {


        emailErr.innerHTML = "";
        emailErr.display = "none";

        return true;

    }
}


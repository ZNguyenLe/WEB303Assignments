submit.disabled = true;
submit.className = 'disabled';
console.log(submit.className);

//this would count if the characters match on both password fields. 
$('#pwd, #pwd2').on('keyup', function () {
    if ($('#pwd').val() == $('#pwd2').val()) {
        $('#message').html('Matching').css('color', 'green');
        console.log('password is matching');
        submit.disabled = false;
        submit.className = 'enabled';
        console.log(submit.className);
    } else 
        $('#message').html('Not Matching').css('color', 'red');
    });
    

//this adds a counter to a charater key input with a max of 10, if over it will go negative
let pwd = $('#pwd');
let pwdCounter = $('#pwd-count');

pwd.on('focus', updateCounter);
pwd.on('input', updateCounter);
pwd.on('blur', function() {
    if (pwdCounter.text >= 0) {
        pwdCounter.addClass('hide');
    }
});

function updateCounter(e) {
    var count = 10 - pwd.val().length;
    var status = '';
    if (count < 0) {
        status = 'error';
    } else if (count <= 15) {
        status = 'warn';
    } else {
        status = 'good';
    }

    pwdCounter.removeClass('error warn good hide');
    pwdCounter.addClass(status);
    pwdCounter.text(count);
}

function country() {
    let country = $('#country');
        for(let i = 0; i < countries.length; i++ ) {
            let name = countries[i].name;
            let code = countries[i].code;
            let options = document.createElement('option');
            options.textContent = name;
            options.value = code;
            country.append(options);
        }
    $('#country').change(function() {
        if($('#country').val() == 'Select Your Country') {
            $('#submit').prop('disabled', true);
        } 
    });
    $('#tos').change(validate());
    validate();
}

function pass() {
    let password = $('#pwd').val();
    let password2 = $('#pwd2').val();
        if(password.length >= 10 && password2.length >= 10) {
            if(password == password2) {
            $('#submit').prop('disabled', true);
        }
    }
    validate();
}


function validate() {
    if(!$('#username') || !$('#pwd') || !$('#pwd2') || !$('#tos')[0].checked || ($('#country').val() == 'Select Your Country')) {
        return;
    }
    $('#submit').prop('disabled', false);
}

function submitView() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $('#form').hide();
        let username = $('#username').val();
        $('#welcome').html(`Welcome ${username}! The country code you selected is ${$('#country').val()}`)
    });
}

function pain(){
    $('#pwd2').keyup(pass);
    country();
    pass();
    submitView();
}

$(pain);

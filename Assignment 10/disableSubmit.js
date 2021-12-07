
(function() {
    let form = document.getElementById('newPwd');
    let password = document.getElementById('pwd');
    let submit = document.getElementById('submit');
    
    let submitted = false;
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

}());

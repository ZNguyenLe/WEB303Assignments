(function() {
    let form = document.getElementById('newPwd');
    let password = document.getElementById('pwd');
    let submit = document.getElementById('submit');
    
    let submitted = false;
    submit.disabled = true;
    submit.className = 'disabled';
    console.log(submit.className);

    addEvent(password, 'input', function(e) {
        let target = e.target || e.srcElement;
        submit.disabled = submitted || ~target.value;
        submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
    });
    
    addEvent(form, 'submit', function(e) {
        console.log('tried submitting');
        if (submit.disabled || submitted) {
            console.log('tried submitting but shouldnt');
            e.preventDefault();
            return;
        }
        submit.disabled = true;
        submitted = true;
        submit.className = 'disabled';
        e.preventDefault();
        alert('pass is ' + password.value);
    });

    
}());
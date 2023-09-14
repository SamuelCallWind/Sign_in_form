document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.formLogin').addEventListener('submit', function (event) {
        let password1 = document.getElementById('passwordForm').value;
        let password2 = document.getElementById('repeatPassword').value;
    
        if (password1 !== password2) {
            event.preventDefault();
            let errorMessage = document.querySelector('.errorMessage');
            errorMessage.textContent = 'The passwords don\'t match';
        }
    });
});



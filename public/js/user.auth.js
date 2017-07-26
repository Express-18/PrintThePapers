/* globals $ requester toastr */

(function() {
    $('#btn-login').on('click', () => {
        const username = $('#username-login').val().trim();
        const password = $('#password-login').val().trim();
        const body = {
            username: username,
            password: password,
        };
        requester.postJSON('/login', body)
            .then((res) => {
                toastr.success(res);
                setTimeout(() => {
                    window.location = '/';
                }, 1000);
            })
            .catch((err) => {
                toastr.error(err.responseText);
                $('#username-login').val();
                $('#password-login').val('');
            });
    });
    // $('#btn-register').on('click', () => {
    //     const body = {
    //         firstName: $('#first-name-register').val().trim(),
    //         lastName: $('#last-name-register').val().trim(),
    //         username: $('#username-register').val().trim(),
    //         password: $('#password-register').val().trim(),
    //         reenterPassword: $('#reenter-password-register').val().trim(),
    //         email: $('#email-register').val().trim(),
    //         profilePicture: $('#avatar-register').val().trim(),
    //     };
    //
    //     if (Object.keys(body).length === 0) {
    //         toastr.error('Please fill out all of the fields!');
    //         return;
    //     }
    //
    //     // for (const prop in body) {
    //     //     if (!body[prop].trim() && prop !== 'avatar') {
    //     //         toastr.error('Please fill out all of the fields!' +
    //     //             ' Only the avatar is optional!');
    //     //         return;
    //     //     }
    //     // }
    //
    //     if (body.firstName.length < 2 || body.firstName.length > 18) {
    //         toastr.error('First name cannot be smaller ' +
    //             'than 2 symbols or greater than 18!');
    //         $('#first-name-register').val('').focus();
    //         return;
    //     }
    //
    //     if (body.lastName.length < 2 || body.lastName.length > 18) {
    //         toastr.error('Last name cannot be smaller ' +
    //             'than 2 symbols or greater than 18!');
    //         $('#last-name-register').val('').focus();
    //         return;
    //     }
    //
    //     if (!body.password || body.password !== body.reenterPassword) {
    //         toastr.error('Passwords do not match!');
    //         $('#password-register').val('').focus();
    //         $('#reenter-password-register').val('');
    //         return;
    //     }
    //
    //     if (body.password.length < 6 || body.password.length > 18) {
    //         toastr.error('Password should be between 6 and 18 symbols!');
    //         $('#password-register').val('').focus();
    //         $('#reenter-password-register').val('');
    //         return;
    //     }
    //
    //     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!emailRegex.test(body.email)) {
    //         toastr.error('Invalid E-Mail!');
    //         $('#email-register').val('').focus();
    //         return;
    //     }
    //
    //     requester.postJSON('/register', body)
    //         .then((res) => {
    //             console.log(res);
    //             toastr.success('Registration successful! Redirecting...');
    //             setTimeout(() => {
    //                 window.location = '/';
    //             }, 1500);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             if (err.responseJSON.code === 11000) {
    //                 toastr.error(`Username "${body.username}" already exists!`);
    //                 $('#username-register').val('');
    //             } else {
    //                 console.log(err);
    //                 toastr.error('An error occurred! Please try again!');
    //             }
    //         });
    // });
}());

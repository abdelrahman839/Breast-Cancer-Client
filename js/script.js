const checkCancer = async () => {
    const selected = $("input[type='radio']:checked");
    if (selected.length != 6) {
        document.querySelector('.error-lable').style.display = "block";
    } else {
        let check = 0;
        for (let i = 0; i < selected.length; i++) {
            console.log(selected[i].value)
            if (selected[i].value == "Yes") {
                check += 1;
            }
        }

        if (check >= 3) {
            localStorage.setItem('hasCancer', "true");
            await $.ajax({
                url: `http://localhost:8080/user/update-cancer?email=${localStorage.getItem('Email')}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({ "hasCancer": true }),
            });
            window.location.href = "/public/hospitals.html";
        } else {
            localStorage.setItem('hasCancer', "false");
            await $.ajax({
                url: `http://localhost:8080/user/update-cancer?email=${localStorage.getItem('Email')}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({ "hasCancer": false }),
            });
            window.location.href = "/public/blog.html";

        }
    }


}



async function onSignIn(googleUser) {
    var profile = await googleUser.getBasicProfile();
    // // The ID token you need to pass to your backend:

    var id_token = await googleUser.getAuthResponse().id_token;
    await $.ajax({
        url: `http://localhost:8080/user/sign-in?id_token=${id_token}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({"data":"data"})
    })
    localStorage.setItem('Breast-Cancer-Token', id_token);
    localStorage.setItem('First-Name', profile.VX);
    localStorage.setItem('Last-Name', profile.iW);
    localStorage.setItem('Email', profile.tv);
    checkToken();
}

const checkToken = () => {
    if (localStorage.getItem('Breast-Cancer-Token') == null) {
        document.querySelector('.required-layer').style.display = 'flex';
    }
    else {
        document.querySelector('.required-layer').style.display = 'none';

    }
}
checkToken();

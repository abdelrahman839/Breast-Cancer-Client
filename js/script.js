const checkCancer = () => {
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
            window.location.href = "/public/hospitals.html";
        } else {
            window.location.href = "/public/blog.html";
        }
    }


}



async function onSignIn(googleUser) {
    var profile = await googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = await googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    fetchData();

    // const url = 'http://localhost:5000/user/sign-in';

    // await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //     },
    //     credentials: 'include',
    //     body: { data: id_token },
    // })

 
}

const fetchData = async () => {
    const rawResponse = await fetch('http://localhost:5000/user/sign-in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id_token})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }
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

let hospitalArr = [];
const hospitalBody = document.getElementById('hospitals-body');
const fetchAllHospital = async () => {
    const { data } = await $.ajax({
        url: `http://localhost:8080/hospital/getAll`,
        type: 'GET',
        contentType: 'application/json',
    })
    hospitalArr = data;
    console.log(hospitalArr)
}
const insertHospitals = async () => {
    await fetchAllHospital();
    let container = '';
    hospitalArr.forEach(ele => {
        container += `
        <div class=" shadow text-right position-relative hos-card ">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <img src="../Images/stethoscope (1).png" alt="">
        <h5>${ele.name}</h5>
        <div class="row justify-content-end px-3 align-items-center mt-4">
            <p class="pr-4 m-0 text-muted">${ele.governorate}</p>
            <i class="fa-solid fa-location-dot "></i>
        </div>
        <div class="row justify-content-end px-3 align-items-center mt-2">
            <p class="pr-3 m-0 text-muted w-75" >${ele.address}</p>
            <i class="fa-solid fa-map"></i>
        </div>

        <div class="row justify-content-end px-3 align-items-center mt-2">
            <p class="pr-3 m-0 text-muted w-75">${ele.workingHours}</p>
            <i class="fa-solid fa-clock"></i>

        </div>
        <div class="row justify-content-end px-3 align-items-center mt-2">
            <p class="pr-3 m-0 text-muted w-75">${ele.phone}</p>
            <i class="fa-solid fa-phone-flip"></i>
        </div>
    </div>
        `;
    });
    hospitalBody.innerHTML = container;


}
insertHospitals();

const search = (word) => {
    console.log(word)


    let search = '';
    hospitalArr.forEach(ele => {
        if (ele.name.includes(word) || ele.governorate.includes(word) || ele.address.includes(word)) {
            search += `
            <div class=" shadow text-right position-relative hos-card ">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <img src="../Images/stethoscope (1).png" alt="">
        <h5>${ele.name}</h5>
        <div class="row justify-content-end px-3 align-items-center mt-4">
            <p class="pr-4 m-0 text-muted">${ele.governorate}</p>
            <i class="fa-solid fa-location-dot "></i>
        </div>
        <div class="row justify-content-end px-3 align-items-center mt-2">
            <p class="pr-3 m-0 text-muted w-75" >${ele.address}</p>
            <i class="fa-solid fa-map"></i>
        </div>

        <div class="row justify-content-end px-3 align-items-center mt-2">
            <p class="pr-3 m-0 text-muted w-75">${ele.workingHours}</p>
            <i class="fa-solid fa-clock"></i>

        </div>
        <div class="row justify-content-end px-3 align-items-center mt-2">
            <p class="pr-3 m-0 text-muted">${ele.phone}</p>
            <i class="fa-solid fa-phone-flip"></i>
        </div>
    </div>
            
            `;
        }
    });
    if (search == '') {
        hospitalBody.innerHTML = '';
        document.getElementById('not-found').innerHTML = `<img src="../Images/undraw_page_not_found_re_e9o6.svg" class="w-50 h-75" alt="">`;

    } else {
        document.getElementById('not-found').innerHTML = '';
        hospitalBody.innerHTML = search;


    }
}
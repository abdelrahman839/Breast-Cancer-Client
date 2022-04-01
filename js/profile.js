const add = document.getElementById('add');
const addDr = document.getElementById('add-dr');
const treatmentBody = document.getElementById('treatment-body');
const drBody = document.getElementById('dr-body');
let medicationArr = []
let drArr = [];
let howMany = document.querySelectorAll('.how-many-sections');
let timeSectionArr = document.querySelectorAll('.time-section');
let deleteDrShow = document.getElementById('delete-dr');
let deleteDr = document.querySelectorAll('.delete-icon-dr');
let deleteBtn = document.querySelectorAll('.delete-btn');

let deleteMedicShow = document.getElementById('delete');
let deleteMedic = document.querySelectorAll('.delete-icon-medic');
let deleteMedicBtn = document.querySelectorAll('.delete-btn-medic');
const email = localStorage.getItem('Email');



const insertGmailValues = () => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');

    firstName.value = localStorage.getItem('First-Name');
    lastName.value = localStorage.getItem('Last-Name');
    email.value = localStorage.getItem('Email');

    firstName.setAttribute("disabled", "");
    lastName.setAttribute("disabled", "");
    email.setAttribute("disabled", "");

}
insertGmailValues();

//  medication Section 
add.addEventListener('click', function (e) {

    addNewSection();



    howMany = document.querySelectorAll('.how-many-sections');
    timeSectionArr = document.querySelectorAll('.time-section');
    howMany.forEach((element, index) => {
        element.addEventListener('keyup', function (e) {
            if (element.value > 2) {
                element.value = 3
            }
            calcTimeSection(element.value, index)
        })
    })
    howMany.forEach((element, index) => {
        element.addEventListener('change', function (e) {
            if (element.value > 2) {
                element.value = 3
            }
            calcTimeSection(element.value, index)
        })
    })


});

const addNewSection = () => {
    document.getElementById('medic-headers').style.display = "block";
    deleteMedic.forEach(element => element.style.display = 'none');
    deleteMedicBtn.forEach(element => element.style.display = 'none')

    if (add.innerHTML == `<i class="fa-solid fa-bookmark"></i>`) {
        const check = saveCheack("treatment-body");
        if (check) {
            add.innerHTML = `<i class="fa-solid fa-plus"></i>`
        }



    } else {
        treatmentBody.innerHTML = `
        <div class="col-4 d-flex align-items-end flex-column">
        <div class=" w-50 form-group   my-2 d-flex time-section">
        </div>
    </div>
    <div class="col-4 d-flex align-items-end flex-column">
        <div class=" w-50 form-group my-2 ">
            <input  type="number" class="form-control how-many-sections">
        </div>
    </div>
    <div class="col-4 d-flex align-items-end flex-column">
        <div class=" w-50 form-group  my-2 position-relative">
            <input type="text" class="form-control name-section">
            <button class="btn btn-danger ml-3 delete-btn-medic">Delete</button>
            <div class="delete-icon delete-icon-medic">
                <i class="fa-solid fa-minus"></i>
            </div>
        </div>
        </div>
    </div>
    `;
        add.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
    }


}

const calcTimeSection = (value, index) => {
    let container = '';

    for (let i = 0; i < value; i++) {
        container += `
        <input type="time" class="form-control final-time-section" style="width:${100 / value}%; margin:0px ${value != 1 && ((1 / value) * 25)}px;">
        `
    }
    timeSectionArr[index].innerHTML = container;
}

const displayMedication = () => {
    if (localStorage.getItem('medication-list') != null) {
        deleteMedicShow.style.display = "block";

        medicationArr = JSON.parse(localStorage.getItem('medication-list'))
        if (medicationArr) {
            let container = '';
            medicationArr.forEach(ele => {
                container += ele;
                console.log('test')
            })

            document.getElementById('treatment-saved-body').innerHTML = container;
        }
    } else {
        deleteMedicShow.style.display = "none";
        document.getElementById('medic-headers').style.display = "none";
    }
    // if (!JSON.parse(localStorage.getItem('medication-list')).length) {
    //     deleteMedicShow.style.display = "none";
    //     document.getElementById('medic-headers').style.display = "none";

    // }


}
displayMedication()

deleteMedicShow.addEventListener('click', function (e) {
    deleteMedic.forEach(element => {
        element.style.display = 'flex'
    });
    deleteMedicBtn.forEach(element => element.style.display = 'none');

})
const preDeleteMedic = () => {
    deleteMedic = document.querySelectorAll('.delete-icon-medic');
    deleteMedicBtn = document.querySelectorAll('.delete-btn-medic');
    deleteMedic.forEach((element, index) => {
        element.addEventListener('click', function (e) {
            element.style.display = 'none'

            deleteMedicBtn[index].style.display = 'flex'
            deleteMedicBtn[index].animate([
                // keyframes
                { width: '0px', },
                { width: '100px', }
            ], {
                // timing options
                duration: 200,
            });
        })
    })


    deleteMedicBtn.forEach((element, index) => {
        element.addEventListener('click', function (e) {
            medicationArr.splice(index, 1);
            localStorage.setItem('medication-list', JSON.stringify(medicationArr))
            displayMedication()
            preDeleteMedic()
        })
    })
}
preDeleteMedic();
const deleteMedication = () => {

}



// Doctor Section
addDr.addEventListener('click', function (e) {
    addDrSection()
})

const addDrSection = () => {
    document.getElementById('dr-headers').style.display = "block";
    deleteDr.forEach(element => element.style.display = 'none');
    deleteBtn.forEach(element => element.style.display = 'none')

    if (addDr.innerHTML == `<i class="fa-solid fa-bookmark"></i>`) {
        const check = saveCheack("dr-body");
        if (check) {
            addDr.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        }

    } else {
        drBody.innerHTML += `

        <div class="col-5 d-flex align-items-end flex-column">
                            <div class=" w-50 form-group my-2 ">
                                <input type="date" class="form-control how-many-sections">
                                
                        
                            </div>
                        </div>
                        <div class="col-5 d-flex align-items-end flex-column">
                            
                            <div class=" w-50 form-group  my-2 position-relative d-flex">
                     
                                <input type="text" class="form-control name-section">
                                <button class="btn btn-danger ml-3 delete-btn">Delete</button>
                                <div class="delete-icon delete-icon-dr">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>
    `;
        addDr.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
    }


    // console.log(drBody)

}

deleteDrShow.addEventListener('click', function (e) {
    deleteDr.forEach(element => element.style.display = 'flex');
    deleteBtn.forEach(element => element.style.display = 'none');

})


const displayDoctors = () => {
    if (localStorage.getItem('doctors-list') != null) {
        deleteDrShow.style.display = "block";
        drArr = JSON.parse(localStorage.getItem('doctors-list'))
        if (drArr) {
            console.log('first')
            let container = '';
            drArr.forEach(ele => {
                container += ele;
                console.log('first')
            })

            document.getElementById('dr-body-final').innerHTML = container;
        }

    } else {
        deleteDrShow.style.display = "none";
        document.getElementById('dr-headers').style.display = "none";

    }
    // if (localStorage.getItem('doctors-list') || !JSON.parse(localStorage.getItem('doctors-list')).length) {
    //     deleteDrShow.style.display = "none";
    //     document.getElementById('dr-headers').style.display = "none";
    //     console.log("lol")

    // }

}
displayDoctors();

const preDeleteDr = () => {
    deleteDr = document.querySelectorAll('.delete-icon-dr');
    deleteBtn = document.querySelectorAll('.delete-btn');
    deleteDr.forEach((element, index) => {
        element.addEventListener('click', function (e) {
            element.style.display = 'none'

            deleteBtn[index].style.display = 'flex'
            deleteBtn[index].animate([
                // keyframes
                { width: '0px', },
                { width: '100px', }
            ], {
                // timing options
                duration: 200,
            });
        })
    })


    deleteBtn.forEach((element, index) => {
        element.addEventListener('click', function (e) {
            drArr.splice(index, 1);
            localStorage.setItem('doctors-list', JSON.stringify(drArr))
            displayDoctors()
            preDeleteDr()
            fetchDeleteDr(index);
        })
    })
}
preDeleteDr()


// Commen Functions
const saveCheack = (id) => {

    if (id == "treatment-body") {
        const arr = treatmentBody.querySelectorAll('.form-control');
        let ckeck = true;
        arr.forEach(ele => {
            ele.classList.remove('warning-class')
            if (ele.value == "") {
                console.log(ele)
                ele.classList.add('warning-class')
                ckeck = false;
            }
        })
        if (ckeck) {
            arr.forEach(ele => {
                ele.setAttribute("disabled", "")
            });
            const timeValues = treatmentBody.querySelectorAll('.final-time-section');
            let container = ''
            timeValues.forEach(val => {
                container += `<p>${val.value}</p>`
            })
            document.getElementById('treatment-saved-body').innerHTML = `
            <div class="col-4 d-flex align-items-end flex-column">
            <div class=" w-100 form-group   my-2 d-flex time-section ${timeValues.length == 1 ? 'justify-content-end' : 'justify-content-between'}  text-right">
            ${container}
            </div>
        </div>
        <div class="col-4 d-flex align-items-end flex-column">
            <div class=" w-50 form-group my-2 ">
                <input  type="number" class="form-control how-many-sections"  value=${treatmentBody.querySelector('.how-many-sections').value} disabled>
            </div>
        </div>
        <div class="col-4 d-flex align-items-end flex-column">
            <div class=" w-50 form-group  my-2 position-relative d-flex">
                <input type="text" class="form-control name-section" value=${treatmentBody.querySelector('.name-section').value} disabled>
                    <button class="btn btn-danger ml-3 delete-btn-medic">Delete</button>
                        <div class="delete-icon delete-icon-medic">
                            <i class="fa-solid fa-minus"></i>
                        </div>
            </div>
            </div>
        </div>
            `;
            medicationArr.push(document.getElementById('treatment-saved-body').innerHTML);
            localStorage.setItem('medication-list', JSON.stringify(medicationArr))
            displayMedication();
            console.log(medicationArr.length)
            treatmentBody.innerHTML = '';
            preDeleteMedic()
        }
        return ckeck;
    } else {

        const arr = drBody.querySelectorAll('.form-control');
        let ckeck = true;
        arr.forEach(ele => {
            ele.classList.remove('warning-class')
            if (ele.value == "") {
                console.log(ele)
                ele.classList.add('warning-class')
                ckeck = false;
            }
        });
        if (ckeck) {

            arr.forEach(ele => {
                ele.setAttribute("disabled", "")
            });

            document.getElementById('dr-body-final').innerHTML = `

            <div class="col-5 d-flex align-items-end flex-column">
                            <div class=" w-50 form-group my-2 ">
                                <input type="date" class="form-control how-many-sections" value=${drBody.querySelector('.how-many-sections').value} disabled>
                            </div>
                        </div>
                        <div class="col-5 d-flex align-items-end flex-column">
                            
                            <div class=" w-50 form-group  my-2 position-relative d-flex">
                     
                                <input type="text" class="form-control " value=${drBody.querySelector('.name-section').value} disabled>
                                <button class="btn btn-danger ml-3 delete-btn">Delete</button>
                                <div class="delete-icon delete-icon-dr">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                            </div>
                        </div>

            `;
            drArr.push(document.getElementById('dr-body-final').innerHTML);
            localStorage.setItem('doctors-list', JSON.stringify(drArr));
            fetchDr({ "name": `${drBody.querySelector('.name-section').value}`, "DateOfVisit": `${drBody.querySelector('.how-many-sections').value}` })
            drBody.innerHTML = '';
            displayDoctors();
            preDeleteDr();


        }
        return ckeck;

    }

}

const fetchDr = async (data) => {

    await $.ajax({
        url: `http://localhost:5000/user/add-doctor?id_token=${localStorage.getItem('Breast-Cancer-Token')}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
    })
}
const fetchDeleteDr = async (data)=>{
    await $.ajax({
        url: `http://localhost:5000/user/delete-doctor?id_token=${localStorage.getItem('Breast-Cancer-Token')}`,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify({"index":data}),
    })
}
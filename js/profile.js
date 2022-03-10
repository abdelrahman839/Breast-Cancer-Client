const add = document.getElementById('add');
const addDr = document.getElementById('add-dr');
const treatmentBody = document.getElementById('treatment-body');
const drBody = document.getElementById('dr-body');
const drArr = [];
let howMany = document.querySelectorAll('.how-many-sections');
let timeSectionArr = document.querySelectorAll('.time-section');
let deleteDrShow = document.getElementById('delete-dr');
let deleteDr = document.querySelectorAll('.delete-icon-dr');
let deleteBtn = document.querySelectorAll('.delete-btn');


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

addDr.addEventListener('click', function (e) {
    addDrSection()
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

        })
    })
})


deleteDrShow.addEventListener('click', function (e) {
    deleteDr.forEach(element => element.style.display = 'flex');
    deleteBtn.forEach(element => element.style.display = 'none');
    deleteDR()

})



const addDrSection = () => {
    deleteDr.forEach(element => element.style.display = 'none');
    deleteBtn.forEach(element => element.style.display = 'none')

    drBody.innerHTML += `

    <div class="col-5 d-flex align-items-end flex-column">
                        <div class=" w-50 form-group my-2 ">
                            <input type="date" class="form-control how-many-sections">
                            
                    
                        </div>
                    </div>
                    <div class="col-5 d-flex align-items-end flex-column">
                        
                        <div class=" w-50 form-group  my-2 position-relative d-flex">
                 
                            <input type="text" class="form-control ">
                            <button class="btn btn-danger ml-3 delete-btn">Delete</button>
                            <div class="delete-icon delete-icon-dr">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </div>
                    </div>
`;
    console.log(drBody)

}
const deleteDR = (index) => {
    const arr = drBody.innerHTML;
    console.log(arr);
}



const calcTimeSection = (value, index) => {
    let container = '';

    for (let i = 0; i < value; i++) {
        container += `
        <input type="time" class="form-control" style="width:${100 / value}%; margin:0px ${value != 1 && ((1 / value) * 25)}px;">
        `
    }
    timeSectionArr[index].innerHTML = container;
}


const addNewSection = () => {

    if (add.innerHTML == `<i class="fa-solid fa-bookmark"></i>`) {
        add.innerHTML = `<i class="fa-solid fa-plus"></i>`


    } else {
        treatmentBody.innerHTML += `
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
            <input type="text" class="form-control ">
            <div class="delete-icon">
            <i class="fa-solid fa-minus"></i>
        </div>
        </div>
    </div>
    `;
        add.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
    }


}

const saveCheack = () => {
    add.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
}
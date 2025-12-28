let branch;
let semester;


const branchBtn = document.querySelector(".branch-btn")
const branchList = document.querySelector(".branch-list")
const arrow1 = document.querySelector("#one")

const semBtn = document.querySelector(".semester-btn")
const semList = document.querySelector(".semester-list")
const arrow2 = document.querySelector("#two")

const subBtn = document.querySelector(".subject-btn")

const selectTab = document.querySelector(".select")

function displayList(list){
    list.removeAttribute('id')
}

function hideList(list){
    list.id = `display-none`
}
hideList(semList)

const branchDetail = {
    'Applied Physics & Materials Engineering':'apme',
    'Architecture & Planning':'ap',
    'Chemical Science & Technology':'cst',
    'Civil Engineering':'ce',
    'Computer Science & Engineering':'cse',
    'Electrical Engineering':'ee',
    'Electronic & Communication Engineering':'ece',
    'Humanities & Social Science':'hss',
    'Mathematics & Computation Technology':'mnc',
    'Mechanical Engineering':'me',
    'Mechatronics & Automation Engineering':'mae'
}


branchList.addEventListener('click', (e)=>{
    branch=branchDetail[e.target.innerText]
    hideList(branchList)
    displayList(semList)
    // branchBtn.removeAttribute('style')
    branchBtn.innerText = branch
    branchBtn.style.color = `#35ff8c`
    semBtn.setAttribute('style',`pointer-events: auto;cursor:pointer`)
    selectTab.innerText =`Select Semester`
    arrow1.style.color=`white`
})

branchBtn.addEventListener('click', e=>{
    hideList(semList)
    displayList(branchList)

    semBtn.removeAttribute('style')

    selectTab.innerText=`Select Branch`

    semBtn.innerText=`Semester`
    subBtn.innerText=`Semester`

    semBtn.removeAttribute('style')
    subBtn.removeAttribute('style')

    semBtn.style.color=`grey`
    subBtn.style.color=`grey`

    arrow1.style.color=`grey`
    arrow2.style.color=`grey`
})

semList.addEventListener('click', (e)=>{
    semester = e.target.innerText.at(-1)
    semBtn.innerText=e.target.innerText
    semBtn.style.color=`#35ff8c`
    subBtn.setAttribute('style',`pointer-events: auto;cursor:pointer`)
    hideList(semList)
    selectTab.innerText=`Select Subject`
    arrow2.style.color=`white`
})

semBtn.addEventListener('click',e=>{
    displayList(semList)
    selectTab.innerText=`Select Semester`
    subBtn.removeAttribute('style')
    subBtn.style.color=`grey`
    arrow2.style.color=`grey`
})
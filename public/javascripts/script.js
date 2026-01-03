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


const tabSelect = document.querySelector('.tab-select')
const tabTool = document.querySelector('.tab-tool')
const tabBookmark = document.querySelector('.tab-bookmark')


const courseInfo = document.querySelector('.course-info')
let courseinvi = 1
const contentArea = document.querySelector('.content-area')
let contentinvi = 1
const bookmarkTab = document.querySelector('.bookmark')
let bookamrkinvi = 1
const functionCard = document.querySelector('.function-card')
let funcinvi = 1

const card = document.querySelector('.card2')
const addNotes = document.querySelector('.add-notes')
const cancelBtn = document.querySelector('#cancel')




function displayList(list){
    list.removeAttribute('id')
}

function hideList(list){
    list.id = `display-none`
}
hideList(semList)
if ((window.innerWidth) <= 1023) {
    hideList(contentArea)
    hideList(bookmarkTab)
    hideList(functionCard)
}

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


addNotes.addEventListener('click',(e)=>{
    console.log('clicked notes')
    document.querySelector('.upload-notes').style.display = "flex"
    // window.location.href = 'http://localhost:3000/home/upload'
    // fetch('http://localhost:3000/home/upload')
})

cancelBtn.addEventListener('click',(e)=>{
    document.querySelector('.upload-notes').style.display = "none"

})

branchList.addEventListener('click', (e)=>{
    branch=branchDetail[e.target.innerText]
    if(branch==undefined) return
    hideList(branchList)
    displayList(semList)
    // branchBtn.removeAttribute('style')
    branchBtn.innerText = branch
    branchBtn.style.color = `#35ff8c`
    semBtn.setAttribute('style',`pointer-events: auto;cursor:pointer`)
    selectTab.innerText =`Select Semester`
    arrow1.style.color=`white`
    // console.log('branchlist')
})

branchBtn.addEventListener('click', e=>{
    hideList(semList)
    displayList(branchList)

    semBtn.removeAttribute('style')

    selectTab.innerText=`Select Branch`

    semBtn.innerText=`Semester`
    subBtn.innerText=`Subject`

    semBtn.removeAttribute('style')
    subBtn.removeAttribute('style')

    semBtn.style.color=`grey`
    subBtn.style.color=`grey`

    arrow1.style.color=`grey`
    arrow2.style.color=`grey`
    // console.log('branchbtn')

    if ((window.innerWidth) <= 1023) {
                displayList(courseInfo)

    hideList(contentArea)
    hideList(bookmarkTab)
    hideList(functionCard)
}
})

semList.addEventListener('click', (e)=>{
        if(e.target.matches('ul')) return
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

    if ((window.innerWidth) <= 1023) {
        displayList(courseInfo)
    hideList(contentArea)
    hideList(bookmarkTab)
    hideList(functionCard)
}


})
tabSelect.addEventListener('click', e => {
    hideList(contentArea)
    displayList(courseInfo)
})

tabTool.addEventListener('click', e => {
    hideList(courseInfo)
    hideList(bookmarkTab)
    displayList(contentArea)
    displayList(functionCard)
})

tabBookmark.addEventListener('click', e => {
    hideList(courseInfo)
    hideList(functionCard)
    displayList(contentArea)
    displayList(bookmarkTab)
})

document.addEventListener('click', e => {
    console.log(e.target)
})

window.addEventListener('resize', e => {

    if ((window.innerWidth) > 1023) {
        // if (courseinvi) displayList(courseInfo)
        // if (contentinvi) displayList(contentArea)
        // if (funcinvi) displayList(functionCard)
        // if (bookamrkinvi) displayList(bookmarkTab)


        displayList(courseInfo)
        displayList(contentArea)
        displayList(functionCard)
        displayList(bookmarkTab)
    }
})

// document.addEventListener('click', e => {
//     console.log(e.target)
//     if (e.target.matches('.tab-select')) {
//         tabSelect.addEventListener('click', e => {
//             hideList(contentArea)
//             displayList(courseInfo)
//         })
//     }

//     if (e.target.matches('.tab-tool')) {
//         tabTool.addEventListener('click', e => {
//             hideList(courseInfo)
//             hideList(bookmarkTab)
//             displayList(contentArea)
//             displayList(functionCard)
//         })
//     }

//     if (e.target.matches('.tab-bookamrk')) {
//         tabBookmark.addEventListener('click', e => {
//             hideList(courseInfo)
//             hideList(functionCard)
//             displayList(contentArea)
//             displayList(bookmarkTab)
//         })
//     }
// })
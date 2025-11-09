const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value)

    let stars = ''
    for (let i = 1; i <= num; i++){
        if (i % 2 == 1){
            stars = stars + '*'
        } else {
            stars = stars + '-'
        }
    }
    resp.innerText = stars
})
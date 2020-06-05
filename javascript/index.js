const btnSearch = document.getElementById('btn-search')
const spnClose = document.getElementById('close-bar')
const modal = document.getElementById('modal')

btnSearch.addEventListener('click', () => {
    modal.classList.toggle('hide')
})

spnClose.addEventListener('click', () => {
    modal.classList.toggle('hide')
})
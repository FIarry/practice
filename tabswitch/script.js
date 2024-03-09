const tabList = document.querySelector('.menu')
let tabActive = document.querySelector('.tab.active')
let linkActive = document.querySelector('.tablink.active')

tabList.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target
    tabActive.classList.remove('active')
    linkActive.classList.remove('active')
    let tabSelected = document.querySelector("#tab" + target.getAttribute('tab-id'))
    tabSelected.classList.add('active')
    target.classList.add('active')

    tabActive = document.querySelector('.tab.active')
    linkActive = document.querySelector('.tablink.active')
})
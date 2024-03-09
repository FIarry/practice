const tabList = document.querySelector('#parent')

tabList.addEventListener('click', (e) => {
    let target = e.target
    for (let tabs of tabList.children) {
        console.log(tabs.name)
        tabs.classList.remove('active')
    }
    let tab = target.closest()
    tab.classList.add('active')
})
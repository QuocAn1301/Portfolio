// skill tab
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        if (!target) return; // Check if the target exists

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            if (tab.classList) { // Check if classList exists
                tab.classList.remove('skills__active')
            }
        })

        if (tab.classList) { // Check if classList exists
            tab.classList.add('skills__active')
        }
    })
})

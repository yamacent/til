document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.div2')
    const observer = new IntersectionObserver(changes => {
        console.log(changes)
    })
    observer.observe(target)
})

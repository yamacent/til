document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.div2')
    const observer = new IntersectionObserver((entries, observer) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                console.log('visible')
            } else {
                console.log('not visible')
            }
        }
    })
    observer.observe(target)
})

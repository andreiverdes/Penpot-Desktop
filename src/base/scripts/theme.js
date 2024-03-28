function ThemeCheck() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('theme-is-light')
    } else {
        document.body.classList.add('theme-is-dark')
    }
}
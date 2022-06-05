form = document.querySelector('form')
input = document.querySelector('[data-input]')
warning = document.querySelector('[data-warning]')
submitBtn = document.querySelector('[data-submit]')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isValid = validateEmail(input.value)

    console.log(isValid)

    // warning = ''
    // input = ''

    if (isValid === false) {
        warning.className = 'invalid'
        input.className = 'invalid'
        return
    }
    warning.className = ''
    input.className = ''
})

const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(email)
}

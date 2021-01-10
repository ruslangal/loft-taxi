export const serverLogin = async (email, password) => {
    // почему-то метод POST не работает, даже через CURL
    /*return fetch(
        'https://loft-taxi.glitch.me/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }
    )*/
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    )
    .then(response => response.json())
    .then(answer => answer.success);
}

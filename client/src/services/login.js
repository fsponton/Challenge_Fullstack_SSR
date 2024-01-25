import axios from "axios"

export default async function loginUser(form) {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/users/login',
            data: form,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })

        console.log('headers', response['headers'])

        return response
    } catch (error) {
        return error.response
    }
}
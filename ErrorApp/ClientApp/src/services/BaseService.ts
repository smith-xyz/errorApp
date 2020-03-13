import { history } from '../'

//mocking history.replace
/* const history = {
    replace: (a: any) => a
} */

export default {
    async get(path: string) {
        return new Promise<Response>((resolve, reject) => {
            return fetch(`api/${path}`).then(async response => {
                    if (response.status === 403) {
                        history.replace('/error/unauthorized')
                        reject()
                    }
                    else if (response.status === 401) {
                        const { url } = await response.json()
                        history.replace('/error/unauthenticated')
                        window.location = url
                        reject()
                    } else {
                        resolve(response)
                    }                    
                }).catch(console.log)
        })
    }
}
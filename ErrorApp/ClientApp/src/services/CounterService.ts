import base from './BaseService'

export default {
    async get(): Promise<any> {
        const res = await base.get(`COUNTER`)
        if (!res.ok) return Promise.reject()
        return await res.json()
    }
}
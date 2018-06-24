import request from "../utils/request"

const getPhones = (url, options) => {
    return request(url, options)
}

export {
    getPhones
}
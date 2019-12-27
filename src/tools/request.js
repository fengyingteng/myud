
import axios from 'axios'
import {message} from 'antd'

const request = (url, data) => {
    let _url = `https://elm.cangdu.org${url}`
   return axios({
        url: _url, 
        method: 'post',
        timeout: 5000,
        header: {
            'content-type': 'application/json'
        }, 
        data
    }).then((res) => {
        console.log('res', res)
        let json = res.data;
        console.log('json', json)
        if (json.status !== 1) {
             let err = new Error()
             err.message = json.message
             throw err
        }
        return json;
    }).catch((error) => {
        message.error(error.message)
    })

}

const getRequest = (url, data) => {
    let _url = `https://elm.cangdu.org${url}`
    return axios({
         url: _url, 
         method: 'get',
         timeout: 5000,
         header: {
             'content-type': 'application/x-www-form-urlencoded'
         }, 
         params: data
     }).then((res) => {
         let json = res.data;
         if (Array.isArray(json)) {
             return json;
         }
         console.log('request json', json)
         if (json.status !== 1) {
              let err = new Error()
              err.message = json.message
              throw err
         }
         return json;
     }).catch((error) => {
         message.error(error.message)
     })
   
}

let ajax = {
    post: request, 
    get:getRequest
}

export default ajax
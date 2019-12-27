import {message} from 'antd'
import ajax from '../../../tools/request.js'
import router from 'umi/router'
export default {
    namespace: 'login',
    state: {},
    subscriptions: {
        setup({history, dispatch}) {
            history.listen((location) => {
              
            })
        }
    },
    effects: {
        * doLogin ({payload}, {call, put}) {
            let query = {
                user_name: payload.username,
                password: payload.password
            }
            const data = yield call(ajax.request, '/admin/login', query)
            if (data && data.status === 1) {
                window.localStorage.setItem("token", JSON.stringify(query))
                message.success('登录成功！')
                router.push('/home')
            }
        }
    },
    reducers: {

    }
}
import router from 'umi/router'
import modelExtend from 'dva-model-extend'
import pageModel from '../tools/common.js'

export default modelExtend(pageModel,{
    namespace: 'app',
    state: {},
    subscriptions: {
        setup({history, dispatch}) {
            history.listen((location) => {
                if (location.pathname !== '/login') {
                    dispatch({
                        type: 'queryLogin'
                    })
                }
            })
        }
    },
    effects: {
        * queryLogin({payload}, {put, call}) {
            let token = window.localStorage.getItem('token')
            if (!token) {
                window.location = `${window.location.origin}/login?from=${window.location.pathname}`
                return ;
            } else {
                if (window.location.pathname === '/') {
                    router.push('/home')
                }
                yield put({
                    type: 'querySuccess',
                    payload: {
                        user_name: 'test',
                        user_token: token
                    }
                })
            }
        }
    },
    reducers: {
        
    }
})
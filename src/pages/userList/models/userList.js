
import modelExtend from 'dva-model-extend'
import pageModel from '../../../tools/common.js'
import ajax from '../../../tools/request.js'


export default modelExtend(pageModel, {
    namespace:'userList',
    state: {
     
    },
    subscriptions: {
        setup({history, dispatch}) {
            history.listen(location => {
                if (location.pathname === '/userList') {
                    dispatch({
                        type: 'queryUser',
                        payload: location.query
                    })
                }
            })
        }
    },
    effects: {
        *queryUser({payload={}}, {call, put}) {
            let page_size = payload.pageSize ?  payload.pageSize * 1 : 50;
            let page_count = payload.pageCount ? payload.pageCount * 1 : 1
            let offset = page_size * page_count

            let _query = {
                offset,
                limit: page_size
            }
            const userData = yield call(ajax.get, '/v1/users/list',_query)
            console.log('userData', userData)
            yield put({
                type: 'querySuccess',
                payload: {
                    list: userData,
                    total: userData.length,
                    pageSize: page_size,
                    current: 1   
                }
            })
        }
    },
    reducers: {

    }
})
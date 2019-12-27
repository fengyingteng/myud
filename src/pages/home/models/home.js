import modelExtend from 'dva-model-extend'
import pageModel from '../../../tools/common.js'
import ajax from '../../../tools/request.js'
import moment from 'moment'

let data = moment().format('YYYY-MM-DD')


export default modelExtend(pageModel, {
    namespace : 'home',
    state: {
        newUserData: 0,
        newOrderData: 0,
        newapidata: 0,
        totalData: 0,
        totalOrder: 0,
        totalapi: 0
    },
    subscriptions: {
        setup({history, dispatch}) {
            history.listen(location => {
                console.log(1111)
                if (location.pathname === '/home') {

                    dispatch({
                        type: 'queryData'
                    })
                }
            })
        }
    },
    effects:{
        * queryData({payload={}}, {call,put}) {
           const regData = yield call(ajax.get, `/statis/user/${data}/count`)
           const allReg = yield call(ajax.get,'/v1/users/count')
           const todayOrder = yield call(ajax.get,`/statis/order/${data}/count`)
           const allOrder = yield call(ajax.get,`/bos/orders/count`)
           const todayApi = yield call(ajax.get,`/statis/api/${data}/count`)
           const allApi = yield call(ajax.get,`/statis/api/count`)
           console.log('alldata',regData,allReg,todayOrder,allOrder,todayApi,allApi)

           yield put({
               type: "getAllData",
               payload: {
                newUserData: regData.count,
                newOrderData: allReg.count,
                newManagerdata: todayOrder.count,
                totalData: allOrder.count,
                newapidata: todayApi.count,
                totalapi: allApi.count 
               }
           })
        }
    },
    reducers:{
        getAllData(state, {payload}) {
            return {...state, ...payload}
        }
    }
})
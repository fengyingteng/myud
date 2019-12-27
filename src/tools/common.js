import modelExtend from 'dva-model-extend'

const model = {
    reducres: {
        updateState(state, {payload}) {
            return {...state, ...payload}
        }
    }
}

const pageModel = modelExtend(model, {
    state: {
        list: [],
        pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: total => `总计 ${total} 条`,
            current: 1,
            total: 0, 
        }
    },
    reducers: {
        querySuccess(state, {payload}) {
            const {list, pagination} = payload;
            return {
                ...state, 
                list,
                pagination: {
                    ...state.pagination,
                    ...pagination
                }
            }
        }
    }
})

export default pageModel;
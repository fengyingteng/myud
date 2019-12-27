import {connect} from 'dva'
import {Table} from 'antd'
import {routerRedux} from 'dva/router'

const UserList = ({userList, loading, dispatch, location}) => {

    const tableProps = {
        loading: loading.effects['userList/queryUser'],
        location,
        onChange(page) {
            console.log(page)
            const {query,pathname} = location;
            dispatch(routerRedux.push({
                pathname,
                query: {
                    ...query,
                    pageCount: page.current,
                    pageSize: page.pageSize
                }
            }))
        }
    }
    const columns = [
        {
            title: '用户姓名',
            dataIndex: 'username',
        },
        {
            title: '用户所在地',
            dataIndex: 'city',
            key: 'user_id',
        },
        {
            title: '注册时间',
            dataIndex: 'registe_time',
            key: 'registe_time',
        }
    ]
    return (
        <div>
            <Table 
            dataSource = {userList.list}
            columns = {columns}
            {...tableProps}
            rowKey = {record => record.user_id}
            />
        </div>
    )
}

export default connect(({userList,loading})=>({userList, loading}))(UserList)
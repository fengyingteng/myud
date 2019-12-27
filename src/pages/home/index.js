
import {connect} from 'dva'

const top_home = {
    margin:'40px auto',
    textAlign:'center'
}


const Home = ({home}) => {

    const {newUserData,newOrderData,newapidata,totalData,totalOrder,totalapi} = home;
    return (
        <div>
            <div style={top_home}>
                <h2>数据统计</h2>
                <div >
                    <span>当日数据统计:</span>
                    <span>新增用户:{newUserData}</span>
                    <span>新增订单:{newOrderData}</span>
                    <span>调用api数量:{newapidata}</span>
                </div>
                <div>
                    <span>所有数据统计:</span>
                    <span>所有用户:{totalData}</span>
                    <span>所有订单:{totalOrder}</span>
                    <span>所有api数量:{totalapi}</span>
                </div>
            </div>
            <div>
        echart
            </div>
        </div>
    )
}

export default connect(({home, loading}) => ({home, loading}))(Home)
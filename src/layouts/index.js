
import {connect} from 'dva'
import {Layout} from 'antd'
import SliderComponent from '../components/sliderMenu/sliderMenu'

const { Header, Sider, Content } = Layout;

const BasicLayout =(props) =>  {
  if(props.location.pathname === '/login') {
    return (
      <div>{props.children}</div>
    )
  }
  return (
    <div>
      <Layout>
        <Sider style={{color: '#ffffff', height:'calc(100vh)', background:'rgb(50, 64, 87)'}}>
          <SliderComponent pathname={props.location.pathname} />
        </Sider>
        <Layout>
          <Header style={{ background:'rgb(50, 64, 87)', color: '#ffffff'}}>我是头部信息</Header>
          <Content style={{background:'#ffffff'}}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default connect(({app, loading}) => ({app, loading}))(BasicLayout)

import menusConfig from './menu.js'
import { Menu, Icon} from 'antd';
import Link from 'umi/link'

const { SubMenu } = Menu;

const SliderMenu = (props) => {

    const renderMenus = (data) => {
        return data.map(item => {
            if (item.children) {

                
                return (
                    <SubMenu key={item.key} title={
                        <span>
                        <Icon  type={item.icon} style={{fontSize:'12px'}}/>
                        <span>{item.title}</span>
                     </span>}
                    >
                        {renderMenus(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} style={{margin:'0', height:'34px', lineHeight:'34px',fontSize:'12px',}}>
                    <Link to={item.key}>
                        <Icon type={item.icon} style={{fontSize:'12px'}} />
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }
    return (
        <Menu
            mode="inline"
            selectedKeys = {[props.pathname]}
            theme ='dark'
            style={{background:'rgb(50, 64, 87)',color:'#bfcbd9', border:'none'}}
        >
            {renderMenus(menusConfig)}
        </Menu>
    )
}

export default SliderMenu;
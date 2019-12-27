import {connect} from 'dva'
import { Form, Icon, Input, Button, message} from 'antd';


const form_style = {
    margin: '0', 
    height: '32px', 
    lineHeight:'32px',
    marginBottom: '18px',
    fontSize: '14px'
}
const Login = ({login, form, dispatch, loading}) => {
    const {getFieldDecorator, validateFields} = form;
    
    const handleSubmitClick = (e) =>{
        e.preventDefault();
        validateFields((err, values) => {
            console.log(values)
            if(err) {
                message.error(err)
                return ;
            }
            dispatch({
                type: 'login/doLogin',
                payload: {
                    ...values
                }
            })
        })
    }   
    

    return (
        <div style={{width:'100%', height:'calc(100vh)', background:'#324057'}}>
            <div style={{
                width: '260px', padding: '20px 15px', background: '#ffffff',position: 'absolute',
                top: '50%',left: '50%',transform: 'translate(-50%, -50%)',borderRadius: '4px'
                }}
            >
                <h2 style={{textAlign:'center'}}>ADMIN后台管理系统</h2>
                <Form>
                    <Form.Item style={form_style}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入你的用户名称！' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名称"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item style={form_style}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入用户密码!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="用户密码"
                        />,
                    )}
                    </Form.Item> 
                    <Button type="primary" htmlType="submit" 
                        style={{width:'100%'}}
                        onClick = {handleSubmitClick}
                    >
                        登录
                    </Button>
                </Form>
            </div>
        </div>
    )
}


export default connect(({ login, loading, dispatch}) => ({ login, loading, dispatch }))(Form.create()(Login))
import React from 'react';
// import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Row,Col } from 'antd';
// import logo from '../../images/logo.png';
import '../../css/pc.css';
import { 
    Menu, 
    Icon,
    Tabs,
    message, 
    Form,
    Input,
    Button,
    // Checkbox,
    Modal,
} from 'antd';
const FormItem = Form.Item;//页面表单提交
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

message.config({
  top: 200,
  duration: 1,
});
class PCHeader extends React.Component {
    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action:false,
            hasLogined:false,
            userNickName:'',
            userid:0
        };
    }

    setModalVisible(value){
        this.setState({
            modalVisible:value
        })
    }

    handleClick(e){
        if(e.key = "register"){
            this.setState({
                current:'register'
            });
            this.setModalVisible(true);
        }else{
            this.setState({
                current:e.key
            })
        }
    }

    handleSubmit = (e) =>{
        console.log(this.props)
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            const {r_password,r_confirmPassword} = values;
            if(!err){
                if(r_password != r_confirmPassword){
                    message.error("ssdsadas")
                }else{
                    this.setState({
                        modalVisible:false
                    })
                }
            }
            
            console.log(err,values)
        })
        // fetch("",) +
    }

    render(){
        let {getFieldDecorator} = this.props.form; //接收页面参数
        const userShow = this.state.hasLogined
        ?
        <Menu.Item key="logout" className="register">
            <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
            &nbsp;&nbsp;
            <Link target="_blank">
                <Button type="dashed" htmlType="button">个人中心</Button>
            </Link>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button">退出</Button>
        </Menu.Item>
        :
        <Menu.Item key="register" className="register">
            <Icon type="appstore">注册/登录</Icon>
        </Menu.Item>;
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={require('../../images/logo.png')} alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top">
                               <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                               <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                               <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                               <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                               <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu"> 
                               <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                               <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                               <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal title="用户中心"
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() =>this.setModalVisible(false)}
                            onOk={() =>this.setModalVisible(false)} okText="关闭"
                            >
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form  layout="horizontal">
                                        <FormItem label="账户">
                                        {getFieldDecorator('r_userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input placeholder="请输入您的账号" />
                                        )}
                                            
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('r_password', {
                                                rules: [{ required: true, message: 'Please input your Password!' }],
                                            })(
                                                <Input type="password" placeholder="请输入您的密码"  />
                                            )} 
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmPassword', {
                                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                                })(
                                                    <Input type="password" placeholder="请再次输入您的密码" />
                                                )}
                                        </FormItem>
                                        <Button type="primary" htmltype="submit" onClick={this.handleSubmit}>注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}

export default PCHeader = Form.create({})(PCHeader); //二次封装
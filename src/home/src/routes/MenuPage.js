import React from 'react';
import { connect } from 'dva';
import { Layout,Menu,SubMenu, Icon } from 'antd';
import styles from './MenuPage.css';
import Clock from '../components/Clock';
import Welcome from '../components/Welcome';
import About from '../components/About';
import DianziqingPage from './DianziqingPage';

const { Header, Sider, Content,Footer } = Layout;

class MenuPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: false, content:<Welcome/>,};
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    welcome = () => {
        this.setState({
            content:<Welcome/>,
        });
    }

    home = () => {
        this.setState({
            content:<Clock/>,
        });
    }

    dzq = () => {
        this.setState({
            content:<DianziqingPage/>,
        });
    }

    about = () => {
        this.setState({
            content:<About/>,
        });
    }

    render() {
        return (
            <Layout className={styles.layout}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                <div className={styles.logo} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={this.welcome}>
                        <Icon type="smile" />
                        <span>Welcome</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={this.dzq}>
                        <Icon type="home" />
                        <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.about}>
                        <Icon type="team" />
                        <span>About</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout className={styles.layout}>
                    <Header className={styles.header}>
                    <Icon
                        className={styles.trigger}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    </Header>
                    <Content className={styles.content}>
                        {this.state.content}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

MenuPage.propTypes = {
};

export default connect(({x})=>({
    content:x,
}))(MenuPage);
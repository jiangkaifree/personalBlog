import React,{useState} from 'react';
import { Layout, Menu, Breadcrumb,Avatar  } from 'antd';
import {HomeOutlined,EditOutlined,AudioOutlined,SettingOutlined,UserOutlined} from '@ant-design/icons';
import styles from './Home.module.scss'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Home =  () =>{

   const [collapsed,setCollapsed] = useState(false)
 
   const onCollapse = collapsed => {
     setCollapsed(collapsed)
   };
 
     return (
       <Layout className={styles.layoutWrap}>
         <Sider  collapsible collapsed={collapsed} onCollapse={onCollapse} className={styles.siderWrap}>
           <div  className={styles.avatarWrap}>
           <Avatar size={64} icon={<UserOutlined />} />
            <p className={styles.date}>上午好! 江凯</p>
            <p className={styles.date}>2020/02/02</p>
           </div>
           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             
             <Menu.Item key="2">
               <EditOutlined />
               <span>添加文章</span>
             </Menu.Item>
             <SubMenu
               key="sub1"
               title={
                 <span>
                   {/* <Icon type="user" /> */}
                   <SettingOutlined />
                   <span>文章管理</span>
                 </span>
               }
             >
               <Menu.Item key="3">添加文章</Menu.Item>
               <Menu.Item key="4">文章列表</Menu.Item>
 
             </SubMenu>
 
             <Menu.Item key="9">
               <AudioOutlined />
               <span>留言管理</span>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
           <Content style={{ margin: '0 16px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>后台管理</Breadcrumb.Item>
               <Breadcrumb.Item>工作台</Breadcrumb.Item>
             </Breadcrumb>
             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>博客工作台.</div>
           </Content>
           <Footer style={{ textAlign: 'center' }}>BLOG 后台管理 By 2020</Footer>
         </Layout>
       </Layout>
     )
 
 } 

 export default Home
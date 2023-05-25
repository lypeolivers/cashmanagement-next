'use client'
import { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';

import {CalendarOutlined, AreaChartOutlined, HomeOutlined} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Navbar({children}: {children: React.ReactNode}) {
    const [collapsed, useCollapsed] = useState(false);
    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        useCollapsed(collapsed);
    };
    return (<>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                   
                    <Menu.Item key="1">
                    <Link href="/">
                    <HomeOutlined />
                    <span>Home</span>
                     
                    </Link>
                    </Menu.Item>
                    
                   
                   <Menu.Item key="2">
                   <Link href="/dashboard">
                   <AreaChartOutlined />
                   <span>Dashboard</span>
                      
                    </Link>
                    </Menu.Item>
                   <Menu.Item>
                    <Link href="/month-by-month">
                        <CalendarOutlined /> 
                        <span>Month by Month</span>
                    </Link>
                   </Menu.Item>
                    
                    
                </Menu>
            </Sider>
            <Layout>
             
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>©2023 Created by Lype</Footer>
            </Layout>
        </Layout></>
    )
}

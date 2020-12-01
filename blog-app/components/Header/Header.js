import React from 'react'
import { Row, Col } from 'antd';
import styles from './header.module.scss'
import { BankTwoTone, FireTwoTone, CustomerServiceTwoTone } from '@ant-design/icons'
// import logo from '../../images/logo.svg'

export default () => (
	<header className={styles.headerWrap}>
		<Row align='middle' justify="space-around" >
			<Col  lg={16} md={12} sm={8}>
			</Col>
			<Col  lg={2} md={4} sm={4}><BankTwoTone />文章博客</Col>
			<Col  lg={2} md={4} sm={4}><CustomerServiceTwoTone />视频教程</Col>
			<Col lg={2} md={4} sm={4}><FireTwoTone />工具推荐</Col>
			<Col lg={2} md={4} sm={4}><FireTwoTone />关于</Col>
		</Row>
	</header>
)
import React from 'react'
import { Row, Col } from 'antd';
import styles from './header.module.scss'
import { BankTwoTone, FireTwoTone, CustomerServiceTwoTone ,FlagTwoTone} from '@ant-design/icons'
// import logo from '../../images/logo.svg'

export default () => {
	const headerList = [
		{
			id: 1,
			title: "文章博客",
			icons: BankTwoTone,
		}
	];
	return (<header className={styles.headerWrap}>
		<Row align='middle' justify="space-around" >
			
			<Col  lg={16} md={12} sm={8} className={styles.headerItem}>
			</Col>
			<Col  lg={2} md={4} sm={4} className={styles.headerItem}><BankTwoTone />文章博客</Col>
			<Col  lg={2} md={4} sm={4} className={styles.headerItem}><CustomerServiceTwoTone />视频教程</Col>
			<Col lg={2} md={4} sm={4} className={styles.headerItem}><FireTwoTone />工具推荐</Col>
			<Col lg={2} md={4} sm={4} className={styles.headerItem}><FlagTwoTone />关于</Col>
		</Row>
	</header>
	)
}
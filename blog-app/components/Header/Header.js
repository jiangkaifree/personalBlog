import React from 'react'
import { Row, Col } from 'antd';
import styles from './header.module.scss'
import { EditTwoTone, FireTwoTone, CustomerServiceTwoTone ,FlagTwoTone} from '@ant-design/icons'
// import logo from '../../images/logo.svg'

const Header =()=> {
	return (<header className={styles.headerWrap}>
		<Row align='middle' justify="space-around" >
					
			<Col  lg={16} md={12} sm={8} className={styles.headerItem}>
 			</Col>
 			<Col  lg={2} md={4} sm={4} className={styles.headerItem}><span><EditTwoTone />文章Blog</span></Col>
			<Col  lg={2} md={4} sm={4} className={styles.headerItem}><span><CustomerServiceTwoTone />视频教程</span></Col>
			<Col lg={2} md={4} sm={4} className={styles.headerItem}><span><FireTwoTone />工具推荐</span></Col>
			<Col lg={2} md={4} sm={4} className={styles.headerItem}><span><FlagTwoTone />关于</span></Col>
			</Row>
	</header>)
}

export default Header
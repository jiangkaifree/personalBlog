import React from 'react'
import { Row, Col } from 'antd';
import styles from './header.module.scss'

export default () =>(
	<header>
		<Row align='middle' justify="space-around">
		<Col span={4}>文章博客</Col>
		<Col span={4}>视频教程</Col>
		<Col span={4}>工具推荐</Col>
		</Row>
	</header>
)
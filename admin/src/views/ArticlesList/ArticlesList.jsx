/*
 * @Author: jk 
 * @Date: 2020-12-14 12:18:43 
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-25 20:33:37
 */
import { Table, Tag, Space,Button } from 'antd';
import styles from './ArticlesList.module.scss'

const ArticlesList = () => {
    const columns = [
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
          render: text => <span className={styles.title}>{text}</span>,
        },
       
        {
          title: '浏览量',
          dataIndex: 'viewCount',
          key: 'viewCount',
        },
        {
            title: '类型',
            dataIndex: 'articleType',
            key: 'articleType',
          },
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" ghost>编辑</Button>
              <Button type="text" danger>删除</Button>
            </Space>
          ),
        },
      ];

      // 列表数据
      const data = [
        {
          title: 'Vue的十个小技巧',
          viewCount: 32,
          articleType: 'BLOG文章',
          tags: ['nice', 'developer'],
        },
        {
            title: 'Vue的十个小技巧',
            viewCount: 332,
            articleType: 'BLOG文章',
          tags: ['loser'],
        },
        {
            title: 'Vue的十个小技巧',
            viewCount: 45,
            articleType: 'BLOG文章',
          tags: ['cool', 'teacher'],
        },
      ];
    return (
        <div className={styles.listWrap}>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ArticlesList
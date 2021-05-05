import Head from 'next/head'

const Title = () =>{


  return (
    <>
      <Head>
        <title>小菜鸡的BLOG 🤔 </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        ></meta>
        <meta
          name="keywords"
          content="前端技术,个人BLOG,学习笔记，技术交流分享,开发日常记录,blog记录,Vue手记分享,开发分享,react开发记录手记"
        ></meta>
        <meta
          name="author"
          content="前端小菜鸡,小菜鸡,工作记录,个人博客,开发分享"
        ></meta>
        <link rel="icon" href="/assets/avatar.jpg"></link>
      </Head>
      </>
  )
}


export default Title
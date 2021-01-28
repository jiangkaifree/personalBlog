import { useEffect } from "react";
/**导入router */
import { useRouter } from "next/router";
/**导入antd */
import "antd/dist/antd.css";
import "styles/globals.css";
/**导入nprogress */
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // console.log(router);
  // 使用Nprogress
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      Nprogress.start();
    });
    router.events.on("routeChangeComplete", () => {
      Nprogress.done();
    });
    router.events.on("routeChangeError", () => {
      Nprogress.done();
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;

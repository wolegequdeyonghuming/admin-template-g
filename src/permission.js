import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });

const whiteList = ['/login'];

router.beforeEach(async(to, from, next) => {
  NProgress.start();

  //todo 用户鉴权
  next();
});

router.afterEach(() => {
  NProgress.done()
});

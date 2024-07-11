import Error from 'src/screens/error/Error';
import InfoScreen from 'src/screens/wechat/InfoScreen';

const StorageStackRoutes = [];
const HomeStackRoutes = [];
const CameraStackRoutes = [];
const WechatStackRoutes = [
  {
    name: 'InfoScreen',
    component: InfoScreen,
    option: {title: 'InfoScreen'},
  },
];
const ErrorStackRoutes = [
  {
    name: 'Error',
    component: Error,
    option: {title: '错误页面'},
  },
];
const EventStackRoutes = [];
export const containStackRoutes = [
  ...HomeStackRoutes,
  ...StorageStackRoutes,
  ...WechatStackRoutes,
  ...CameraStackRoutes,
  ...ErrorStackRoutes,
  ...EventStackRoutes,
];

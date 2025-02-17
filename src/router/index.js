import Error from '../screens/error/Error';
import InfoScreen from '../screens/wechat/InfoScreen';
import MusicPlayer from '../screens/musicPlayer/MusicPlayer';

const StorageStackRoutes = [];
const HomeStackRoutes = [];
const CameraStackRoutes = [];
const WechatStackRoutes = [
  {
    name: 'InfoScreen',
    component: InfoScreen,
    option: {title: 'InfoScreen', headerShown: () => null},
  },
];
const ErrorStackRoutes = [
  {
    name: 'Error',
    component: Error,
    option: {title: '错误页面'},
    headerShown: true,
  },
];
const RecommendedStackRoutes = [
  {
    name: 'MusicPlayer',
    component: MusicPlayer,
    option: {title: 'MusicPlayer', headerShown: ()=>null},
  },
];

const EventStackRoutes = [];
export const containStackRoutes = [
  ...RecommendedStackRoutes,
  ...HomeStackRoutes,
  ...StorageStackRoutes,
  ...WechatStackRoutes,
  ...CameraStackRoutes,
  ...ErrorStackRoutes,
  ...EventStackRoutes,
];

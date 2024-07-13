import Error from 'src/screens/error/Error';
import InfoScreen from 'src/screens/wechat/InfoScreen';
import MusicPlayer from 'src/screens/musicPlayer/MusicPlayer';

const StorageStackRoutes = [];
const HomeStackRoutes = [];
const CameraStackRoutes = [];
const WechatStackRoutes = [
  {
    name: 'InfoScreen',
    component: InfoScreen,
    option: {title: 'InfoScreen'},
    headerShown: true,
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
    option: {title: 'MusicPlayer', headerShown: false},
  },
];

const EventStackRoutes = [];
export const containStackRoutes = [
  // ...RecommendedStackRoutes,
  ...HomeStackRoutes,
  ...StorageStackRoutes,
  ...WechatStackRoutes,
  ...CameraStackRoutes,
  ...ErrorStackRoutes,
  ...EventStackRoutes,
];

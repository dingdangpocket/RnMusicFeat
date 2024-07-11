import React from 'react';
import {SvgXml} from 'react-native-svg';
export const HomeIconUnActive = ({width, height}) => {
  const xml =
    '<svg t="1665930375737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="74450" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M149.5808 580.4544L113.3824 544.256l384.512-384.512 384.512 384.512-36.1984 36.1984L497.8944 232.1408z" fill="#2c2c2c" p-id="74451"></path><path d="M745.5232 864.256H250.2144V552.2432h51.2V813.056h392.9088V552.2432h51.2z" fill="#2c2c2c" p-id="74452"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const HomeIconActive = ({width, height}) => {
  const xml =
    '<svg t="1665930477681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="83046" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M904.4 356.4L512 64.3 119.6 356.4c-24.3 18-38.6 46.5-38.6 76.8V864c0 52.9 42.9 95.8 95.8 95.8h670.4c52.9 0 95.8-42.9 95.8-95.8V433.2c0-30.3-14.3-58.8-38.6-76.8zM691.6 816.1H332.4c-19.8 0-35.9-16.2-35.9-35.9s16.2-35.9 35.9-35.9h359.2c19.8 0 35.9 16.2 35.9 35.9s-16.2 35.9-35.9 35.9z" fill="black" p-id="83047"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const MineIconActive = ({width, height, color}) => {
  const xml = `<svg t="1720679836271" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5147" width="200" height="200"><path d="M658.7904 468.3264c47.7696-40.1408 78.1824-99.9424 78.1824-166.656 0-120.576-99.2768-218.7264-221.2864-218.7264S294.4512 181.0944 294.4512 301.7216c0 66.7136 30.4128 126.464 78.1824 166.656-150.6304 35.84-263.0144 171.4688-263.0144 332.9024 0 67.1232 54.6304 121.7536 121.7536 121.7536h568.7296c67.1232 0 121.7536-54.6304 121.7536-121.7536-0.0512-161.4848-112.4352-297.0624-263.0656-332.9536z m-1.536 319.6416H374.1696c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h283.0848c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.72 30.72z" fill="${color}" p-id="5148"></path></svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const MineIconUnActive = ({width, height, color}) => {
  const xml = `<svg t="1720679836271" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5147" width="200" height="200"><path d="M658.7904 468.3264c47.7696-40.1408 78.1824-99.9424 78.1824-166.656 0-120.576-99.2768-218.7264-221.2864-218.7264S294.4512 181.0944 294.4512 301.7216c0 66.7136 30.4128 126.464 78.1824 166.656-150.6304 35.84-263.0144 171.4688-263.0144 332.9024 0 67.1232 54.6304 121.7536 121.7536 121.7536h568.7296c67.1232 0 121.7536-54.6304 121.7536-121.7536-0.0512-161.4848-112.4352-297.0624-263.0656-332.9536z m-1.536 319.6416H374.1696c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h283.0848c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.72 30.72z" fill="${color}" p-id="5148"></path></svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const EventIconActive = ({width, height}) => {
  const xml =
    '<svg t="1666007402252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5488" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M359.330909 128c48.593455-0.512 95.418182 5.399273 140.567273 17.780364 48.686545 13.312 83.874909 33.419636 132.794182 70.981818l40.494545 30.999273c35.467636 26.112 62.231273 40.494545 95.790546 49.338181l16.151272 3.909819 16.151273 3.118545A346.018909 346.018909 0 0 0 930.909091 301.474909l-115.898182 432.593455-3.630545 2.373818c-32.674909 19.781818-80.989091 22.528-145.221819 7.633454-53.201455-12.334545-88.622545-32.907636-138.565818-74.053818l-31.650909-26.065454c-37.701818-30.114909-64.930909-45.521455-101.934545-54.737455-49.105455-12.194909-101.748364-16.337455-157.928728-12.520727l-6.795636 0.465454-81.547636 297.797819-1.536 4.235636a27.834182 27.834182 0 0 1-52.130909-18.944l75.357091-275.688727 109.195636-407.645091 2.001454-6.190546a65.210182 65.210182 0 0 1 51.339637-41.425454l6.469818-0.651637z" fill="#2c2c2c" p-id="5489"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const EventIconUnActive = ({width, height}) => {
  const xml =
    '<svg t="1666007394360" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5281" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M359.330909 128c48.593455-0.512 95.418182 5.399273 140.567273 17.780364 48.686545 13.312 83.874909 33.419636 132.794182 70.981818l40.494545 30.999273c35.467636 26.112 62.231273 40.494545 95.790546 49.338181l16.151272 3.909819 16.151273 3.118545A346.018909 346.018909 0 0 0 930.909091 301.474909l-115.898182 432.593455-3.630545 2.373818c-32.674909 19.781818-80.989091 22.528-145.221819 7.633454-53.201455-12.334545-88.622545-32.907636-138.565818-74.053818l-31.650909-26.065454c-37.701818-30.114909-64.930909-45.521455-101.934545-54.737455-49.105455-12.194909-101.748364-16.337455-157.928728-12.520727l-6.795636 0.465454-81.547636 297.797819-1.536 4.235636a27.834182 27.834182 0 0 1-52.130909-18.944l75.357091-275.688727 109.195636-407.645091 2.001454-6.190546a65.210182 65.210182 0 0 1 51.339637-41.425454l6.469818-0.651637z m0.558546 55.668364l-18.757819 0.558545-6.981818 0.325818-89.972363 335.825455 12.89309-0.372364 19.688728-0.279273c45.614545 0 89.181091 5.213091 130.653091 15.546182 45.847273 11.357091 80.849455 30.626909 128.651636 69.538909l32.023273 26.437819c43.752727 35.234909 70.283636 49.291636 110.638545 58.647272 34.909091 8.098909 62.929455 10.146909 83.176727 6.376728l7.493819-6.981819 86.946909-324.468363-11.962182-0.465455-17.92-1.070545a414.068364 414.068364 0 0 1-71.68-12.381091c-40.96-10.798545-74.938182-28.578909-118.830546-61.44l-41.844363-32.116364c-43.938909-33.186909-71.028364-47.569455-108.916364-57.949091a456.890182 456.890182 0 0 0-144.058182-15.173818z" fill="#2c2c2c" p-id="5282"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const CommunityIconUnActive = ({width, height}) => {
  const xml =
    '<svg t="1665929837701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="62218" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M504.124426 16.120032c-278.318998 0-503.939984 225.620986-503.939984 503.939984 0 278.318998 225.620986 503.939984 503.939984 503.939984s503.939984-225.620986 503.939984-503.939984C1008.06441 241.741018 782.443424 16.120032 504.124426 16.120032zM504.124426 972.598122c-249.931051 0-452.538106-202.609071-452.538106-452.538106 0-249.930043 202.607055-452.538106 452.538106-452.538106 249.930043 0 452.538106 202.608063 452.538106 452.538106C956.662531 769.989051 754.054469 972.598122 504.124426 972.598122z" p-id="62219" fill="#2c2c2c"></path><path d="M606.852592 494.023453c-0.999817-3.95996-2.247572-7.869527-3.71303-11.713581l179.924716-241.223976c0 0-148.253096 115.221846-240.753296 180.213978-3.903519-1.499725-7.87255-2.773686-11.893991-3.795676-34.978474-8.882446-73.609506 0.354774-100.979494 27.724762-27.361925 27.361925-36.601161 65.976831-27.732825 100.947242 1.001833 3.954921 2.250596 7.85844 3.717061 11.696447l-180.128308 240.9841 241.248165-179.915645c3.84607 1.463442 7.757652 2.709181 11.717613 3.710006 34.942191 8.822981 73.506702-0.425325 100.840407-27.760038C606.441377 567.550312 615.687667 528.972699 606.852592 494.023453zM465.562938 558.325187c-21.255181-21.255181-21.254173-55.715605 0-76.969777s55.714597-21.255181 76.970785 0c21.254173 21.254173 21.254173 55.714597-0.001008 76.96877C521.277535 579.57936 486.817111 579.57936 465.562938 558.325187z" p-id="62220" fill="#2c2c2c"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const CommunityIconActive = ({width, height}) => {
  const xml =
    '<svg t="1665929825602" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="62020" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 512m-57.6 0a57.6 57.6 0 1 0 115.2 0 57.6 57.6 0 1 0-115.2 0Z" fill="black" p-id="62021"></path><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m81.6 596.8L236.8 784l187.2-356.8L780.8 240 593.6 596.8z" fill="black" p-id="62022"></path><path d="M512 512m-57.6 0a57.6 57.6 0 1 0 115.2 0 57.6 57.6 0 1 0-115.2 0Z" fill="black" p-id="62023"></path><path d="M512 512m-57.6 0a57.6 57.6 0 1 0 115.2 0 57.6 57.6 0 1 0-115.2 0Z" fill="black" p-id="62024"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const RecommendedIconActive = ({width, height, color}) => {
  const xml = `<svg t="1666005989949" class="icon" viewBox="0 0 1210 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33878" xmlns:xlink="http://www.w3.org/1999/xlink" width="236.328125" height="200"><path d="M186.181818 0h837.818182a186.181818 186.181818 0 0 1 186.181818 186.181818v651.636364a186.181818 186.181818 0 0 1-186.181818 186.181818H186.181818a186.181818 186.181818 0 0 1-186.181818-186.181818V186.181818a186.181818 186.181818 0 0 1 186.181818-186.181818z m572.183273 503.621818a9.309091 9.309091 0 0 1-1.861818 1.861818l-248.226909 186.181819a9.309091 9.309091 0 0 1-14.894546-7.447273v-372.363637a9.309091 9.309091 0 0 1 14.894546-7.447272l248.226909 186.181818a9.309091 9.309091 0 0 1 1.861818 13.032727z m-205.405091 247.621818l248.226909-186.181818a83.781818 83.781818 0 0 0 0-134.050909l-248.226909-186.181818A83.781818 83.781818 0 0 0 418.909091 311.854545v372.363637a83.781818 83.781818 0 0 0 134.050909 67.025454z" p-id="33879" fill="${color}"></path></svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
export const RecommendedIconUnActive = ({width, height}) => {
  const xml =
    '<svg t="1666006199860" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="35787" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M817.1 830.9H249.9C182.1 830.9 127 775.8 127 708V211.8c0-67.8 55.1-123 122.9-123H817c67.8 0 122.9 55.2 122.9 123V708c0.1 67.8-55 122.9-122.8 122.9zM249.9 141.5c-38.7 0-70.3 31.5-70.3 70.3V708c0 38.7 31.5 70.3 70.3 70.3H817c38.7 0 70.3-31.5 70.3-70.3V211.8c0-38.8-31.5-70.3-70.3-70.3H249.9z" fill="#2c2c2c" p-id="35788"></path><path d="M664.5 502.3l-157.3 90.8c-32.7 18.9-73.5-4.7-73.5-42.5V368.9c0-37.7 40.9-61.3 73.5-42.5l157.3 90.8c32.7 19.1 32.7 66.3 0 85.1z" fill="#2c2c2c" p-id="35789"></path></svg>';
  return <SvgXml xml={xml} width={width} height={height} />;
};
// export const DiscoveryIconActive = ({ width, height }) => {
//     const xml = `<svg t="1665925788696" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="58500" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
//     <path d="M512 960c-103.8 0-158.12-225.38-158.12-448S408.2 64 512 64s158.12 225.37 158.12 448S615.8 960 512 960z m0-843.29c-36.79 0-105.41 135.76-105.41 395.29S475.21 907.3 512 907.3 617.41 771.53 617.41 512 548.79 116.71 512 116.71z" fill="black" p-id="58501"></path>
//     <path d="M222.47 778.13c-46.36 0-81.49-12.76-98.44-42.13-51.9-89.91 116.12-249.63 308.92-360.93 99.78-57.61 200.96-99.71 284.91-118.54 119.93-26.92 165.25 2.26 182.13 31.47 51.89 89.89-116.12 249.62-308.92 360.94-129.83 74.94-273.05 129.19-368.6 129.19zM802 298.65c-19.17 0-43.4 2.75-72.61 9.3-78.88 17.7-174.8 57.74-270.09 112.76-224.76 129.76-308.03 257.08-289.63 288.94 18.39 31.85 170.27 23.41 395.04-106.36 224.76-129.77 308.02-257.08 289.62-288.94-5.31-9.19-22.84-15.7-52.33-15.7z m-355.88 99.24h0.13-0.13z" fill="black" p-id="58502"></path>
//     <path d="M801.53 778.13c-95.55 0-238.75-54.24-368.58-129.19C240.15 537.62 72.12 377.9 124.02 288c51.91-89.88 274.24-24.24 467.03 87.07 99.78 57.61 186.83 124.18 245.11 187.47 83.3 90.43 80.67 144.25 63.8 173.47-16.94 29.36-52.09 42.12-98.43 42.12zM459.3 603.29c224.76 129.75 376.65 138.22 395.03 106.36 8.76-15.17-5.44-55.51-56.93-111.41-54.76-59.47-137.4-122.52-232.69-177.53C339.96 290.95 188.05 282.5 169.67 314.35c-18.39 31.86 64.87 159.17 289.63 288.94z" fill="black" p-id="58503"></path>
//     <path d="M512 591.06c-43.6 0-79.06-35.46-79.06-79.06s35.46-79.06 79.06-79.06 79.06 35.46 79.06 79.06-35.46 79.06-79.06 79.06z m0-105.42c-14.53 0-26.35 11.82-26.35 26.35s11.82 26.35 26.35 26.35c14.53 0 26.35-11.82 26.35-26.35s-11.82-26.35-26.35-26.35z" fill="black" p-id="58504"></path></svg>`
//     return < SvgXml xml={xml} width={width} height={height} />
// }
// export const DiscoveryIconUnActive = ({ width, height }) => {
//     const xml = `<svg t="1665925788696" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="58500" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 960c-103.8 0-158.12-225.38-158.12-448S408.2 64 512 64s158.12 225.37 158.12 448S615.8 960 512 960z m0-843.29c-36.79 0-105.41 135.76-105.41 395.29S475.21 907.3 512 907.3 617.41 771.53 617.41 512 548.79 116.71 512 116.71z" fill="#2c2c2c" p-id="58501"></path><path d="M222.47 778.13c-46.36 0-81.49-12.76-98.44-42.13-51.9-89.91 116.12-249.63 308.92-360.93 99.78-57.61 200.96-99.71 284.91-118.54 119.93-26.92 165.25 2.26 182.13 31.47 51.89 89.89-116.12 249.62-308.92 360.94-129.83 74.94-273.05 129.19-368.6 129.19zM802 298.65c-19.17 0-43.4 2.75-72.61 9.3-78.88 17.7-174.8 57.74-270.09 112.76-224.76 129.76-308.03 257.08-289.63 288.94 18.39 31.85 170.27 23.41 395.04-106.36 224.76-129.77 308.02-257.08 289.62-288.94-5.31-9.19-22.84-15.7-52.33-15.7z m-355.88 99.24h0.13-0.13z" fill="#2c2c2c" p-id="58502"></path><path d="M801.53 778.13c-95.55 0-238.75-54.24-368.58-129.19C240.15 537.62 72.12 377.9 124.02 288c51.91-89.88 274.24-24.24 467.03 87.07 99.78 57.61 186.83 124.18 245.11 187.47 83.3 90.43 80.67 144.25 63.8 173.47-16.94 29.36-52.09 42.12-98.43 42.12zM459.3 603.29c224.76 129.75 376.65 138.22 395.03 106.36 8.76-15.17-5.44-55.51-56.93-111.41-54.76-59.47-137.4-122.52-232.69-177.53C339.96 290.95 188.05 282.5 169.67 314.35c-18.39 31.86 64.87 159.17 289.63 288.94z" fill="#2c2c2c" p-id="58503"></path><path d="M512 591.06c-43.6 0-79.06-35.46-79.06-79.06s35.46-79.06 79.06-79.06 79.06 35.46 79.06 79.06-35.46 79.06-79.06 79.06z m0-105.42c-14.53 0-26.35 11.82-26.35 26.35s11.82 26.35 26.35 26.35c14.53 0 26.35-11.82 26.35-26.35s-11.82-26.35-26.35-26.35z" fill="#2c2c2c" p-id="58504"></path></svg>`
//     return < SvgXml xml={xml} width={width} height={height} />
// }

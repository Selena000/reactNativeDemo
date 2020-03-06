## react-native 

### mac： 

### 1.安装xcode
### 2.cd reactNativeDemo && npm install (node > 10.0)
### 3.cd ios, pod install
### 4.打开ios里的workspace，然后build

### react-navigation-stack:
1、1.9可以直接引用：
npm install react-navigation-stack --save
import { createStackNavigator } from 'react-navigation-stack'
2、2.2要安装其他依赖
npm install react-navigation-stack @react-native-community/masked-view react-native-safe-area-context --save
import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';

let reactotron;

if (__DEV__) {
  reactotron = Reactotron.configure({
    host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
    name: 'vistoriaobra',
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(trackGlobalErrors());

  console.tron = Reactotron;

  reactotron.connect();

  Reactotron.clear();
}

export default reactotron;

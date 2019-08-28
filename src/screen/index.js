import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import navigation from './../navigations/'

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(navigation);
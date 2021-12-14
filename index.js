/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

AppRegistry.registerComponent(appName, () => App);

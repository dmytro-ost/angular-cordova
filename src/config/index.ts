import apiConfig from './default.json';

interface Config {
  apiUrl: string;
  localStorageKey: string;
}

export default apiConfig as unknown as Config;

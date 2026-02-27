import { buildApiStatusMethods } from './apiStatus';
import { SHODAN_CORE_URL } from '../../constants';

export const buildCoreModule = (apiKey: string) => ({
  ...buildApiStatusMethods(SHODAN_CORE_URL, apiKey),
});

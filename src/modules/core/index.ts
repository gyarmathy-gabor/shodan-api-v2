import { SHODAN_CORE_URL } from '../../constants';
import { buildApiStatusMethods } from './apiStatus';
import { buildUtilityMethods } from './utilityMethods';

export const buildCoreModule = (apiKey: string) => ({
  ...buildApiStatusMethods(SHODAN_CORE_URL, apiKey),
  ...buildUtilityMethods(SHODAN_CORE_URL, apiKey),
});

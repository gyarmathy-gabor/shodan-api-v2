import { request } from '../../utils/fetcher';

export const buildApiStatusMethods = (baseUrl: string, apiKey: string) => ({
  /**
   * Returns information about the API plan belonging to the given API key.
   */
  getApiInfo: async () => await request(baseUrl, 'api-info', apiKey),
});

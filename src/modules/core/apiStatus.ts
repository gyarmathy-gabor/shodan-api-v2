import { request } from '../../utils/fetcher';

export const buildApiStatusMethods = (baseUrl: string, apiKey: string) => ({
  getApiInfo: async () => await request(baseUrl, 'api-info', apiKey),
});

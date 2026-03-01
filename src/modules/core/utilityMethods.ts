import { request } from '../../utils/fetcher';

export const buildUtilityMethods = (baseUrl: string, apiKey: string) => ({
  /**
   * Shows the HTTP headers that your client sends when connecting to a webserver.
   */
  showClientHttpHeaders: async () => await request(baseUrl, '/tools/httpheaders', apiKey),

  /**
   * Get your current IP address as seen from the Internet.
   */
  showMyIp: async () => await request(baseUrl, '/tools/myip', apiKey),
});

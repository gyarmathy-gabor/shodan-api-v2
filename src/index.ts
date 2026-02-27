import { buildCoreModule } from './modules/core/index';
import { buildStreamModule } from './modules/stream';
import { buildTrendsModule } from './modules/trends';
import { buildExploitsModule } from './modules/exploits';

export const createShodanClient = (apiKey: string) => {
  if (!apiKey) {
    throw new Error('A Shodan API key is required');
  }

  return {
    ...buildCoreModule(apiKey),
    ...buildStreamModule(apiKey),
    ...buildTrendsModule(apiKey),
    ...buildExploitsModule(apiKey),
  };
};

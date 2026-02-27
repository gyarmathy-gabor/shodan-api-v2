import { buildHistoricalDataMethods } from './historicalData';
import { SHODAN_TRENDS_URL } from '../../constants';

export const buildTrendsModule = (apiKey: string) => ({
  ...buildHistoricalDataMethods(SHODAN_TRENDS_URL, apiKey),
});

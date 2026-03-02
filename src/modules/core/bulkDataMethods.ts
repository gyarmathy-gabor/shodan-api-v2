import { request } from '../../utils/fetcher';

export const buildBulkDataMethods = (baseUrl: string, apiKey: string) => ({
  /**
   * Use this method to see a list of the datasets that are available for download.
   */
  getAvailableDatasets: async () => {
    return await request(baseUrl, '/shodan/data', apiKey);
  },
  /**
   * Get a list of files that are available for download from the provided dataset.
   * @param dataset - Name of the dataset
   */
  getDataset: async (dataset: string) => {
    return await request(baseUrl, `shodan/data/${dataset}`, apiKey);
  },
});

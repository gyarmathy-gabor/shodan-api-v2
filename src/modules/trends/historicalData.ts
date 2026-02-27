import { request } from '../../utils/fetcher';
import { ShodanFacet } from '../../types/facets';
import { ShodanFilterValue } from '../../types/filters';

export const buildHistoricalDataMethods = (baseUrl: string, apiKey: string) => ({
  getFacets: async () => await request(baseUrl, `api/v1/search/facets`, apiKey),
  getFilters: async () => await request(baseUrl, `api/v1/search/filters`, apiKey),
  searchHistoricalData: async (
    filterType: ShodanFilterValue,
    facetType?: ShodanFacet,
    facetLimit?: number,
  ) => {
    const facet = facetType
      ? facetLimit !== undefined
        ? `${facetType}:${facetLimit}`
        : facetType
      : undefined;

    return await request(baseUrl, `api/v1/search`, apiKey, {
      params: {
        query: filterType,
        facets: facet,
      },
    });
  },
});

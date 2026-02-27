type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
}

export async function request<T>(
  baseUrl: string,
  endpoint: string,
  apikey: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', body, params } = options;

  const cleanEndpoint = endpoint.replace(/^\//, '');

  const url = new URL(`${baseUrl}/${cleanEndpoint}`);
  url.searchParams.append('key', apikey);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value.toString());
      }
    });
  }

  const response = await fetch(url.toString(), {
    method,
    ...(body
      ? {
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      : {}),
  });

  if (!response.ok) {
    throw new Error(`Shodan API Error: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

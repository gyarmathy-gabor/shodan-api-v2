type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
}

export async function request<T>(
  baseUrl: string,
  endpoint: string,
  apikey: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', body } = options;

  const cleanEndpoint = endpoint.replace(/^\//, '');

  const url = new URL(`${baseUrl}/${cleanEndpoint}`);
  url.searchParams.append('key', apikey);

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
  return response.json();
}

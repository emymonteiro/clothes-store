import { goto } from '$app/navigation';

export function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

export const redirectRoute = (page: string, redirect: string) => {
  const pathBase = page.includes('github') ? '/clothes-store' : '';
  console.log(`${page}${pathBase}${redirect}`)
  goto(`${page}${pathBase}${redirect}`)
}

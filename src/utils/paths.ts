const baseUrl = import.meta.env.BASE_URL || '/';

export function withBase(path: string) {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}` || '/';
}

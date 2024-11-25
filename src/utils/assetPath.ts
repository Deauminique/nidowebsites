const isDevelopment = import.meta.env.DEV;

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, use the path as is
  if (isDevelopment) {
    return `/${cleanPath}`;
  }

  // In production, prepend the base URL
  return `/nidowebsites/${cleanPath}`;
};

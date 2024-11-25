const isDevelopment = import.meta.env.DEV;

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, use the path from public directory
  if (isDevelopment) {
    return `/${cleanPath}`;
  }

  // In production, use the path from static directory
  return `/nidowebsites/${cleanPath}`;
};

export const formatPoint = (point: [number, number]): string => {
  const roundedLat = Math.abs(Math.round(point[0] * 100) / 100);
  const roundedLon = Math.abs(Math.round(point[1] * 100) / 100);
  const lat = roundedLat < 0 ? `${roundedLat}° S` : `${roundedLat}° N`;
  const lon = roundedLon < 0 ? `${roundedLon}° W` : `${roundedLon}° E`;
  return `${lat}, ${lon}`;
};

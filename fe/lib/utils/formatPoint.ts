export const formatPoint = (point: [number, number]): string => {
  const roundedLat = Math.abs(point[0]).toFixed(2);
  const roundedLon = Math.abs(point[1]).toFixed(2);
  const lat = point[0] < 0 ? `${roundedLat}° S` : `${roundedLat}° N`;
  const lon = point[1] < 0 ? `${roundedLon}° W` : `${roundedLon}° E`;
  return `${lat}, ${lon}`;
};

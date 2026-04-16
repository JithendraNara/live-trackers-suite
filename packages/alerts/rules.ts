import type { TrackerPosition } from "../core-tracking/tracker";

export interface Geofence {
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
}

export function isInsideGeofence(position: TrackerPosition, fence: Geofence): boolean {
  return (
    position.latitude >= fence.minLat &&
    position.latitude <= fence.maxLat &&
    position.longitude >= fence.minLon &&
    position.longitude <= fence.maxLon
  );
}

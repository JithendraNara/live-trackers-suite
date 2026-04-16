export type TrackerKind = "iss" | "aircraft" | "satellite";

export interface TrackerPosition {
  id: string;
  kind: TrackerKind;
  latitude: number;
  longitude: number;
  altitudeKm?: number;
  timestampIso: string;
}

export function isFresh(position: TrackerPosition, maxAgeSeconds = 90): boolean {
  const ageMs = Date.now() - Date.parse(position.timestampIso);
  return ageMs <= maxAgeSeconds * 1000;
}

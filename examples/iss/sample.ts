import { isFresh, type TrackerPosition } from "../../packages/core-tracking/tracker";

const sample: TrackerPosition = {
  id: "iss",
  kind: "iss",
  latitude: 12.97,
  longitude: 77.59,
  altitudeKm: 420,
  timestampIso: new Date().toISOString(),
};

console.log({ isFresh: isFresh(sample) });

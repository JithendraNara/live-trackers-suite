import type { TrackerKind, TrackerPosition } from "../core-tracking/tracker";

export interface TrackerAdapter {
  name: string;
  kind: TrackerKind;
  fetchLatest(): Promise<TrackerPosition[]>;
}

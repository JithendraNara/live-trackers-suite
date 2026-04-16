# live-trackers-suite

Consolidated real-time tracking suite for ISS, aircraft, and satellite monitoring with shared ingestion, visualization, and alerting patterns.

## Purpose

This repository replaces separate tracker repos with one maintainable codebase, so core logic is reused across all tracking domains.

## Core capabilities

- Real-time position ingestion
- Standardized tracking data models
- Shared map and dashboard integration points
- Alerting hooks (geofence, status changes, signal loss)
- Extensible source adapters

## Suggested structure

```text
.
├── docs/
│   ├── ARCHITECTURE.md
│   └── MIGRATION_MAP.md
├── apps/
│   ├── web-dashboard/
│   └── api/
├── packages/
│   ├── core-tracking/
│   ├── adapters/
│   └── alerts/
└── examples/
    ├── iss/
    ├── aircraft/
    └── satellites/
```

## Migration coverage

The following archived repositories are consolidated here:

- `iss-tracker`
- `plane-tracker`
- `satellite-tracker`

## First implementation milestones

- [ ] Define shared tracker entity schema
- [ ] Implement one adapter each for ISS, aircraft, and satellites
- [ ] Add basic alert rules and replay tests
- [ ] Add simple dashboard demo with map layer

## Engineering standards

- Keep adapters pure and testable
- Keep tracking model backward-compatible once `v1` is published
- Log ingestion latency and data freshness as first-class metrics

# Migration Map

## Archived repositories

- `iss-tracker` -> `examples/iss/` and `packages/adapters/iss_*`
- `plane-tracker` -> `examples/aircraft/` and `packages/adapters/aircraft_*`
- `satellite-tracker` -> `examples/satellites/` and `packages/adapters/satellite_*`

## Goal

All domain-specific trackers should share core logic while preserving domain-level customization via adapters and rules.

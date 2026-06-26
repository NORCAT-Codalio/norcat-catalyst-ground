import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

// World atlas topojson (countries) via CDN
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const NAVY = '#001A4D';
const TEAL = '#00B398';
const BLUE = '#003DA5';

type Location = {
  id: string;
  name: string;
  region: string;
  tag: string;
  coords: [number, number]; // [lon, lat]
  highlight?: boolean;
};

const LOCATIONS: Location[] = [
  { id: 'sudbury',   name: 'Sudbury',     region: 'Ontario',  tag: 'Headquarters',       coords: [-80.9930, 46.4917], highlight: true },
  { id: 'onaping',   name: 'Onaping',     region: 'Ontario',  tag: 'Underground Centre', coords: [-81.4167, 46.6167], highlight: true },
  { id: 'toronto',   name: 'Toronto',     region: 'Ontario',  tag: 'Regional Presence',  coords: [-79.3832, 43.6532] },
  { id: 'timmins',   name: 'Timmins',     region: 'Ontario',  tag: 'Regional Presence',  coords: [-81.3370, 48.4758] },
  { id: 'thunder',   name: 'Thunder Bay', region: 'Ontario',  tag: 'Regional Presence',  coords: [-89.2477, 48.3809] },
  { id: 'elko',      name: 'Elko',        region: 'Nevada, USA', tag: 'International',   coords: [-115.7631, 40.8324] },
];

export function LocationsMap() {
  const [active, setActive] = useState<string | null>('sudbury');

  return (
    <div className="relative w-full rounded-3xl overflow-hidden"
         style={{ background: 'linear-gradient(180deg,#f7f9fc 0%,#eef2f8 100%)', border: '1px solid #d9dde5' }}>
      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,26,77,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,26,77,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="grid lg:grid-cols-[1fr_280px] gap-0">
        {/* MAP */}
        <div className="relative" style={{ aspectRatio: '16 / 11' }}>
          <ComposableMap
            projection="geoAlbers"
            projectionConfig={{
              rotate: [98, 0, 0],
              center: [0, 52],
              parallels: [40, 60],
              scale: 900,
            }}
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies
                  .filter((g) => ['Canada', 'United States of America', 'Mexico'].includes(g.properties.name))
                  .map((geo) => {
                    const isCA = geo.properties.name === 'Canada';
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isCA ? '#d6dde8' : '#e3e7ee',
                            stroke: '#ffffff',
                            strokeWidth: 0.75,
                            outline: 'none',
                          },
                          hover:   { fill: isCA ? '#cbd4e2' : '#dae0e9', outline: 'none' },
                          pressed: { fill: '#cbd4e2', outline: 'none' },
                        }}
                      />
                    );
                  })
              }
            </Geographies>

            {/* connection arcs between Sudbury HQ and other markers */}
            {LOCATIONS.filter((l) => l.id !== 'sudbury').map((loc) => (
              <ArcLine key={loc.id} from={LOCATIONS[0].coords} to={loc.coords} />
            ))}

            {LOCATIONS.map((loc) => (
              <Marker
                key={loc.id}
                coordinates={loc.coords}
                onMouseEnter={() => setActive(loc.id)}
                onClick={() => setActive(loc.id)}
                style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
              >
                <g>
                  {/* pulse */}
                  <motion.circle
                    r={loc.highlight ? 10 : 8}
                    fill={loc.highlight ? TEAL : BLUE}
                    opacity={0.25}
                    animate={{ r: [loc.highlight ? 10 : 8, loc.highlight ? 18 : 14, loc.highlight ? 10 : 8], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: Math.random() * 1.5 }}
                  />
                  <circle r={loc.highlight ? 5.5 : 4.5} fill={loc.highlight ? TEAL : BLUE} stroke="#fff" strokeWidth={1.5} />
                  {active === loc.id && (
                    <g transform="translate(8, -6)">
                      <rect x={0} y={-10} rx={4} ry={4} width={loc.name.length * 6.5 + 14} height={18}
                            fill={NAVY} />
                      <text x={7} y={3} fill="#fff" fontSize={10} fontWeight={700}
                            style={{ fontFamily: "'Open Sans', system-ui, sans-serif", letterSpacing: '0.04em' }}>
                        {loc.name.toUpperCase()}
                      </text>
                    </g>
                  )}
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* SIDE PANEL */}
        <div className="relative bg-white/70 backdrop-blur-sm border-l" style={{ borderColor: '#d9dde5' }}>
          <div className="p-5 sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4" style={{ color: TEAL }}>
              6 Locations
            </p>
            <ul className="space-y-1.5">
              {LOCATIONS.map((loc) => {
                const isActive = active === loc.id;
                return (
                  <li key={loc.id}>
                    <button
                      onMouseEnter={() => setActive(loc.id)}
                      onClick={() => setActive(loc.id)}
                      className="group w-full text-left rounded-lg px-3 py-2.5 flex items-start gap-3 transition-all"
                      style={{
                        background: isActive ? 'rgba(0,179,152,0.10)' : 'transparent',
                        border: `1px solid ${isActive ? 'rgba(0,179,152,0.4)' : 'transparent'}`,
                      }}
                    >
                      <span className="mt-1.5 size-2 rounded-full shrink-0"
                            style={{ background: loc.highlight ? TEAL : BLUE }} />
                      <span className="min-w-0">
                        <span className="block text-[9px] uppercase tracking-[0.18em] font-bold"
                              style={{ color: loc.highlight ? TEAL : BLUE }}>
                          {loc.tag}
                        </span>
                        <span className="block text-sm font-bold truncate" style={{ color: NAVY }}>
                          {loc.name}, {loc.region.includes(',') ? loc.region : loc.region === 'Ontario' ? 'ON' : loc.region}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-5 border-t flex items-center gap-4 text-[10px] uppercase tracking-[0.16em] font-bold"
                 style={{ borderColor: '#e3e7ee', color: '#475068' }}>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full" style={{ background: TEAL }} /> NORCAT Core
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full" style={{ background: BLUE }} /> Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Curved arc between two geo points using a quadratic bezier in projected space
function ArcLine({ from, to }: { from: [number, number]; to: [number, number] }) {
  // react-simple-maps provides projection via context; we approximate by using
  // a Marker pair with a Line component. Simpler: render in projected coords via <g>.
  // We'll use a path with great-circle-ish midpoint offset in lon/lat.
  const mid: [number, number] = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2 + 4];
  return (
    <g>
      <PathArc points={[from, mid, to]} />
    </g>
  );
}

function PathArc({ points }: { points: [number, number][] }) {
  // Use d3-geo projection consistent with ComposableMap — but simplest:
  // wrap each point in a Marker so RSM projects it, then connect via SVG line.
  // To avoid 3 markers per arc, we use a Line component-less approach by
  // leveraging Marker's projection: render an invisible Marker that yields g transform.
  // Implementation: render two markers (from, to) connected with a <line> using
  // CSS-positioned overlay isn't possible inside SVG without coordinates.
  // Workaround: use <Line> from react-simple-maps which auto-projects.
  // Falls back to a curved path through "mid".
  return <LineProjected points={points} />;
}

import { Line } from 'react-simple-maps';
function LineProjected({ points }: { points: [number, number][] }) {
  return (
    <Line
      coordinates={points}
      stroke={TEAL}
      strokeWidth={1.2}
      strokeDasharray="3 3"
      strokeLinecap="round"
      fill="none"
      opacity={0.55}
    />
  );
}

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { motion } from 'framer-motion';

// World atlas topojson (countries) via CDN
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const ONTARIO_GEO_URL = '/maps/ontario.json';

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
  country: 'CA' | 'US';
};

const LOCATIONS: Location[] = [
  { id: 'sudbury',   name: 'Sudbury',     region: 'ON',      tag: 'Headquarters',       coords: [-80.9930, 46.4917], highlight: true, country: 'CA' },
  { id: 'onaping',   name: 'Onaping',     region: 'ON',      tag: 'Underground Centre', coords: [-81.4167, 46.6167], highlight: true, country: 'CA' },
  { id: 'toronto',   name: 'Toronto',     region: 'ON',      tag: 'Regional Presence',  coords: [-79.3832, 43.6532], country: 'CA' },
  { id: 'timmins',   name: 'Timmins',     region: 'ON',      tag: 'Regional Presence',  coords: [-81.3370, 48.4758], country: 'CA' },
  { id: 'thunder',   name: 'Thunder Bay', region: 'ON',      tag: 'Regional Presence',  coords: [-89.2477, 48.3809], country: 'CA' },
  { id: 'elko',      name: 'Elko',        region: 'NV, USA', tag: 'International',      coords: [-115.7631, 40.8324], country: 'US' },
];

const HQ = LOCATIONS[0];

type MapPanelProps = {
  locations: Location[];
  active: string;
  setActive: (id: string) => void;
  projectionConfig: {
    rotate: [number, number, number];
    center: [number, number];
    parallels: [number, number];
    scale: number;
  };
  geographyUrl?: string;
  width?: number;
  height?: number;
  filterNames: string[];
  showArcs?: boolean;
  label: string;
  aspectRatio: string;
};

function MapPanel({ locations, active, setActive, projectionConfig, geographyUrl = GEO_URL, width = 800, height = 600, filterNames, showArcs, label, aspectRatio }: MapPanelProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden"
         style={{ background: 'linear-gradient(180deg,#f7f9fc 0%,#eef2f8 100%)', border: '1px solid #d9dde5' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,26,77,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,26,77,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-3 left-4 z-10 text-[10px] uppercase tracking-[0.2em] font-bold"
           style={{ color: NAVY }}>
        {label}
      </div>
      <div className="relative" style={{ aspectRatio }}>
        <ComposableMap
          width={width}
          height={height}
          projection="geoAlbers"
          projectionConfig={projectionConfig}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={geographyUrl}>
            {({ geographies }) =>
              geographies
                .filter((g) => filterNames.includes(g.properties.name))
                .map((geo) => {
                  const isMain = filterNames.includes(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isMain ? '#d6dde8' : '#e3e7ee',
                          stroke: '#ffffff',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover:   { fill: isMain ? '#cbd4e2' : '#dae0e9', outline: 'none' },
                        pressed: { fill: '#cbd4e2', outline: 'none' },
                      }}
                    />
                  );
                })
            }
          </Geographies>

          {showArcs && locations.filter((l) => l.id !== HQ.id).map((loc) => {
            const mid: [number, number] = [
              (HQ.coords[0] + loc.coords[0]) / 2,
              (HQ.coords[1] + loc.coords[1]) / 2 + 3,
            ];
            return (
              <Line
                key={loc.id}
                coordinates={[HQ.coords, mid, loc.coords]}
                stroke={TEAL}
                strokeWidth={1.2}
                strokeDasharray="3 3"
                strokeLinecap="round"
                fill="none"
                opacity={active === loc.id || active === HQ.id ? 0.9 : 0.4}
              />
            );
          })}

          {locations.map((loc) => {
            const isActive = active === loc.id;
            const color = loc.highlight ? TEAL : BLUE;
            return (
              <Marker
                key={loc.id}
                coordinates={loc.coords}
                onMouseEnter={() => setActive(loc.id)}
                onClick={() => setActive(loc.id)}
                style={{ default: { cursor: 'pointer' }, hover: { cursor: 'pointer' }, pressed: {} }}
              >
                <motion.circle
                  r={loc.highlight ? 10 : 8}
                  fill={color}
                  opacity={0.3}
                  initial={{
                    r: loc.highlight ? 10 : 8,
                    opacity: 0.35,
                  }}
                  animate={{
                    r: [loc.highlight ? 10 : 8, loc.highlight ? 18 : 14, loc.highlight ? 10 : 8],
                    opacity: [0.35, 0, 0.35],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: Math.random() * 1.5 }}
                />
                <circle r={loc.highlight ? 5.5 : 4.5} fill={color} stroke="#fff" strokeWidth={1.5} />
                {isActive && (
                  <g transform="translate(10, -8)">
                    <rect
                      x={0} y={-11}
                      rx={4} ry={4}
                      width={loc.name.length * 6.5 + 16}
                      height={20}
                      fill={NAVY}
                    />
                    <text
                      x={8} y={3}
                      fill="#fff"
                      fontSize={10}
                      fontWeight={700}
                      style={{ fontFamily: "'Open Sans', system-ui, sans-serif", letterSpacing: '0.06em' }}
                    >
                      {loc.name.toUpperCase()}
                    </text>
                  </g>
                )}
              </Marker>
            );
          })}
        </ComposableMap>
      </div>
    </div>
  );
}

export function LocationsMap() {
  const [active, setActive] = useState<string>('sudbury');

  const caLocations = LOCATIONS.filter((l) => l.country === 'CA');
  const usLocations = LOCATIONS.filter((l) => l.country === 'US');

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-4">
      {/* MAPS */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <MapPanel
          locations={caLocations}
          active={active}
          setActive={setActive}
          geographyUrl={ONTARIO_GEO_URL}
          width={800}
          height={1000}
          projectionConfig={{ rotate: [85, 0, 0], center: [0, 51], parallels: [45, 55], scale: 3200 }}
          filterNames={['Ontario']}
          showArcs
          label="Ontario"
          aspectRatio="4 / 5"
        />
        <MapPanel
          locations={usLocations}
          active={active}
          setActive={setActive}
          projectionConfig={{ rotate: [115, 0, 0], center: [0, 39], parallels: [34, 44], scale: 1600 }}
          filterNames={['United States of America']}
          label="Nevada, USA"
          aspectRatio="4 / 5"
        />
      </div>

      {/* SIDE PANEL */}
      <div className="relative rounded-2xl bg-white/70 backdrop-blur-sm border"
           style={{ borderColor: '#d9dde5' }}>
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
                        {loc.name}, {loc.region}
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
  );
}

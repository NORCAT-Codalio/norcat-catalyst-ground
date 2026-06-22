import { useCallback, useEffect, useRef, useState } from "react";
import { Accessibility, X } from "lucide-react";

type Contrast = "none" | "dark" | "light" | "monochrome";

interface Prefs {
  contrast: Contrast;
  textScale: 0 | 1 | 2 | 3 | 4; // 100 / 125 / 150 / 175 / 200
  readableFont: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  focusRing: boolean;
}

const DEFAULTS: Prefs = {
  contrast: "none",
  textScale: 0,
  readableFont: false,
  highlightLinks: false,
  highlightHeadings: false,
  focusRing: false,
};

const STORAGE_KEY = "aoda-prefs";

const SCALE_CLASS = ["", "aoda-text-scale-125", "aoda-text-scale-150", "aoda-text-scale-175", "aoda-text-scale-200"] as const;
const SCALE_LABEL = ["100%", "125%", "150%", "175%", "200%"];

function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  root.classList.remove("aoda-dark-contrast", "aoda-light-contrast", "aoda-monochrome");
  if (p.contrast === "dark") root.classList.add("aoda-dark-contrast");
  if (p.contrast === "light") root.classList.add("aoda-light-contrast");
  if (p.contrast === "monochrome") root.classList.add("aoda-monochrome");

  SCALE_CLASS.forEach((c) => c && root.classList.remove(c));
  if (SCALE_CLASS[p.textScale]) root.classList.add(SCALE_CLASS[p.textScale]);

  root.classList.toggle("aoda-readable-font", p.readableFont);
  root.classList.toggle("aoda-highlight-links", p.highlightLinks);
  root.classList.toggle("aoda-highlight-headings", p.highlightHeadings);
  root.classList.toggle("aoda-focus-ring", p.focusRing);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Load on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Prefs;
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Apply + persist
  useEffect(() => {
    applyPrefs(prefs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* ignore */
    }
  }, [prefs]);

  // ESC closes, click outside closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (panelRef.current.contains(e.target as Node)) return;
      if (triggerRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const update = useCallback(<K extends keyof Prefs>(k: K, v: Prefs[K]) => {
    setPrefs((p) => ({ ...p, [k]: v }));
  }, []);

  const toggleContrast = (c: Exclude<Contrast, "none">) =>
    update("contrast", prefs.contrast === c ? "none" : c);

  const reset = () => setPrefs(DEFAULTS);

  return (
    <div className="aoda-widget-root">
      <button
        ref={triggerRef}
        type="button"
        className="aoda-widget-trigger"
        aria-label={open ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={open}
        aria-controls="aoda-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <Accessibility size={28} aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="aoda-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="aoda-panel-title"
          className="aoda-widget-panel"
        >
          <button
            type="button"
            className="aoda-widget-close"
            aria-label="Close accessibility menu"
            onClick={() => setOpen(false)}
          >
            <X size={18} aria-hidden="true" />
          </button>

          <h2 id="aoda-panel-title">Accessibility</h2>
          <p className="aoda-sub">Adjust the site to your needs. Preferences are saved on this device.</p>

          <h3>Contrast</h3>
          <div className="aoda-widget-grid" role="group" aria-label="Contrast modes">
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.contrast === "dark"} onClick={() => toggleContrast("dark")}>Dark contrast</button>
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.contrast === "light"} onClick={() => toggleContrast("light")}>Light contrast</button>
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.contrast === "monochrome"} onClick={() => toggleContrast("monochrome")}>Monochrome</button>
          </div>

          <h3>Typography</h3>
          <div className="aoda-widget-grid">
            <button
              type="button"
              className="aoda-widget-btn"
              aria-pressed={prefs.textScale > 0}
              aria-label={`Text size, currently ${SCALE_LABEL[prefs.textScale]}. Activate to increase.`}
              onClick={() => update("textScale", ((prefs.textScale + 1) % 5) as Prefs["textScale"])}
            >
              Text size · {SCALE_LABEL[prefs.textScale]}
            </button>
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.readableFont} onClick={() => update("readableFont", !prefs.readableFont)}>Readable font</button>
          </div>

          <h3>Visual aids</h3>
          <div className="aoda-widget-grid">
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.highlightLinks} onClick={() => update("highlightLinks", !prefs.highlightLinks)}>Highlight links</button>
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.highlightHeadings} onClick={() => update("highlightHeadings", !prefs.highlightHeadings)}>Highlight headings</button>
          </div>

          <h3>Keyboard</h3>
          <div className="aoda-widget-grid">
            <button type="button" className="aoda-widget-btn" aria-pressed={prefs.focusRing} onClick={() => update("focusRing", !prefs.focusRing)}>Strong focus ring</button>
          </div>

          <button type="button" className="aoda-widget-reset" onClick={reset}>
            Reset all
          </button>
        </div>
      )}
    </div>
  );
}

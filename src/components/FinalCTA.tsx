import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FONT = "'Open Sans', sans-serif";
const TEAL = "#00B398";
const NAVY = "#003DA6";

interface FinalCTAProps {
  /** Small uppercase label above the headline */
  eyebrow: string;
  /** First line of the headline (navy) */
  title: string;
  /** Second line of the headline (teal) */
  titleAccent?: string;
  /** Supporting copy */
  body: string;
  /** Button label */
  ctaLabel: string;
  /** Internal route or external href */
  ctaHref: string;
  /** Optional secondary button */
  secondaryLabel?: string;
  secondaryHref?: string;
}

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export default function FinalCTA({
  eyebrow,
  title,
  titleAccent,
  body,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: FinalCTAProps) {
  const primaryClasses =
    "group inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]";
  const primaryStyle = {
    fontFamily: FONT,
    background: `linear-gradient(135deg, ${TEAL} 0%, ${NAVY} 100%)`,
    boxShadow: "0 8px 24px -6px hsla(168,100%,35%,0.45)",
  } as const;

  const primaryInner = (
    <>
      {ctaLabel}
      <span className="inline-flex items-center justify-center size-7 rounded-full bg-white/20">
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </>
  );

  return (
    <section className="relative overflow-hidden py-24 md:py-36 lg:py-44" style={{ background: "#F2F3F6" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 0%, hsla(168,100%,40%,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,61,166,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,61,166,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10">
        <div
          className="relative rounded-[2rem] md:rounded-[2.5rem] px-6 py-14 md:px-16 md:py-20 text-center overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow:
              "0 1px 0 0 rgba(255,255,255,1), 0 24px 60px -16px rgba(0,26,77,0.18), 0 8px 24px -12px rgba(0,26,77,0.12)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 100%, hsla(168,100%,45%,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative">
            <p
              className="inline-flex items-center text-sm font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: FONT, color: "#6B7280" }}
            >
              {eyebrow}
            </p>
            <h2
              className="font-black uppercase leading-[0.92] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: FONT, color: NAVY, letterSpacing: "-0.03em" }}
            >
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span style={{ color: TEAL }}>{titleAccent}</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#475068" }}>
              {body}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {isExternal(ctaHref) ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={primaryClasses} style={primaryStyle}>
                  {primaryInner}
                </a>
              ) : (
                <Link to={ctaHref} className={primaryClasses} style={primaryStyle}>
                  {primaryInner}
                </Link>
              )}

              {secondaryLabel && secondaryHref && (
                isExternal(secondaryHref) ? (
                  <a
                    href={secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
                    style={{ fontFamily: FONT, color: NAVY, border: "1.5px solid rgba(0,61,166,0.25)", background: "rgba(255,255,255,0.7)" }}
                  >
                    {secondaryLabel}
                  </a>
                ) : (
                  <Link
                    to={secondaryHref}
                    className="inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
                    style={{ fontFamily: FONT, color: NAVY, border: "1.5px solid rgba(0,61,166,0.25)", background: "rgba(255,255,255,0.7)" }}
                  >
                    {secondaryLabel}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

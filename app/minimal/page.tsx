import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";
import HeroViz from "@/components/HeroViz";
import ContextVisualizer from "@/components/ContextVisualizer";
import ThesisExplorer from "@/components/ThesisExplorer";
import PositioningExplorer from "@/components/PositioningExplorer";
import { ROSTER } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "qAI37",
  description:
    "qAI37 is building the vendor-agnostic software access point between conventional AI and neutral-atom systems — the neutral route to post-silicon AI.",
};

export default function Minimal() {
  return (
    <div className="p-home">
      {/* THE NEUTRAL ROUTE TO POST-SILICON AI */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-text">
            <span className="eyebrow rise d1">The neutral route to post-silicon AI</span>
            <h1 className="rise d2">A new software layer for AI infrastructure.</h1>
            <p className="lede rise d3">
              Every time you ask AI a question, it re-reads everything you&apos;ve given it
              before it answers. The more it knows, the slower and more expensive every
              answer gets, which is why AI stalls exactly where it becomes most valuable:
              long, live, complicated work. We&apos;re building the software layer that
              changes that math.
            </p>
            <div className="rise d4">
              <SignupForm />
            </div>
          </div>
          <HeroViz />
        </div>
      </section>

      {/* THESIS */}
      <section className="thesis">
        <div className="wrap">
          <span className="eyebrow reveal">The thesis</span>
          <ThesisExplorer />

          <div style={{ marginTop: 64 }}>
            <ContextVisualizer />
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="positioning">
        <div className="wrap">
          <span className="sec-eyebrow reveal">What qAI37 is not</span>
          <PositioningExplorer />
        </div>
      </section>

      {/* TEAM ROSTER */}
      <section className="roster-section" id="team">
        <div className="wrap">
          <span className="eyebrow reveal">The team</span>
          <div className="roster">
            {ROSTER.map((m) => (
              <div key={m.name} className="roster-item reveal">
                <span className="roster-name">{m.name}</span>
                <span className="roster-role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

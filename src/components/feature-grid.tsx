import { Stagger, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: "fa-solid fa-file-shield",
    title: "Meticulous preparation",
    text: "Every form triple-checked, every piece of evidence organized, every deadline tracked — precision that prevents RFEs and denials.",
  },
  {
    icon: "fa-solid fa-handshake-angle",
    title: "Honest assessments",
    text: "We tell you the truth about your odds up front — no false hope, no wasted money. If there's a better path, we show it to you.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Human, not robotic",
    text: "A dedicated consultant answers your calls and emails directly. You'll never be a case number lost in a queue.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Attorney partnership",
    text: "Complex cases get reviewed by licensed immigration attorneys we partner with — expert firepower without law-firm fees.",
  },
  {
    icon: "fa-solid fa-globe",
    title: "Global reach",
    text: "Clients in 40+ countries, consultations by video, and secure digital document handling across every time zone.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Transparent pricing",
    text: "Fixed fees quoted before we start. No hourly meters, no hidden costs, no surprises on the invoice.",
  },
];

export function FeatureGrid() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <StaggerItem key={f.title}>
          <div className="glass-card h-full rounded-3xl p-7">
            <span className="icon-badge size-12 text-xl text-[#0e5a5d]">
              <i className={f.icon} aria-hidden />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold text-[#0f2b30]">{f.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#547075]">{f.text}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

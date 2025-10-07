import { Ship } from "lucide-react";
import { ReactNode } from "react";

interface PromoHighlight {
  icon: ReactNode;
  text: string;
}

interface PromoCardProps {
  mainPercentage: string;
  topText: string;
  bottomText: string;
  highlights: PromoHighlight[];
  ctaText: string;
  ctaLink: string;
  exceptionNote?: string;
}

const PromoCard = ({
  mainPercentage,
  topText,
  bottomText,
  highlights,
  ctaText,
  ctaLink,
  exceptionNote,
}: PromoCardProps) => {
  return (
    <div className="max-w-xs mx-auto">
      {/* Main Banner */}
      <div className="bg-primary text-white rounded-t-2xl overflow-hidden">
        {/* Main Percentage Section */}
        <div className="text-center py-8 px-6 border-b border-white/20">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2">
            {topText}
          </p>
          <div className="text-7xl md:text-8xl font-display font-bold leading-none">
            {mainPercentage}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider mt-2">
            {bottomText}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 border-b border-white/20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col items-center justify-center text-center ${
                index < highlights.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <div className="mb-3">{highlight.icon}</div>
              <p className="text-sm font-semibold leading-tight">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

        {/* Logo and CTA Section */}
        <div className="p-6 flex items-center justify-between gap-4">
          <Ship className="w-16 h-16 flex-shrink-0" strokeWidth={1.5} />
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-white font-bold text-sm uppercase px-6 py-3 rounded-full transition-all hover:scale-105 whitespace-nowrap"
          >
            {ctaText}
          </a>
        </div>
      </div>

      {/* Exception Note */}
      {exceptionNote && (
        <div className="bg-white rounded-b-2xl p-6 shadow-card">
          <p className="text-xs text-destructive leading-relaxed">
            {exceptionNote}
          </p>
        </div>
      )}
    </div>
  );
};

export default PromoCard;

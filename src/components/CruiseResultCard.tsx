import { MapPin, Calendar, Ship, ArrowRight, Anchor } from "lucide-react";


interface CruiseResultCardProps {
  cruise: {
    id: number;
    route: string;
    departure: string;
    arrival: string;
    stops: string[];
    duration: string;
    dates: string;
    priceFrom: number;
    prices: {
      interior: number;
      exterior: number;
      balcony: number;
      suite: number;
    };
    ship: string;
  };
}

const CruiseResultCard = ({ cruise }: CruiseResultCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden border border-primary/10 hover:border-primary/30">
      <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
        {/* Map Section */}
        <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 flex items-center justify-center border border-primary/10">
          <div className="text-center space-y-4 w-full">
            <div className="relative w-full h-48">
              {/* Simple map placeholder with route visualization */}
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Alaska outline simplified */}
                <path
                  d="M 20,80 Q 40,60 80,70 T 140,50 L 160,40 L 180,50 L 190,70 L 180,90 L 160,100 L 120,110 L 80,100 Q 40,95 20,80 Z"
                  fill="hsl(var(--primary) / 0.08)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                
                {/* Route points */}
                {cruise.stops.slice(0, 5).map((_, index) => {
                  const positions = [
                    { x: 40, y: 80 },
                    { x: 80, y: 70 },
                    { x: 120, y: 60 },
                    { x: 150, y: 50 },
                    { x: 170, y: 60 }
                  ];
                  const pos = positions[index] || positions[0];
                  
                  return (
                    <g key={index}>
                      {index > 0 && (
                        <line
                          x1={positions[index - 1].x}
                          y1={positions[index - 1].y}
                          x2={pos.x}
                          y2={pos.y}
                          stroke="hsl(var(--accent))"
                          strokeWidth="2.5"
                          strokeDasharray="5,3"
                        />
                      )}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="7"
                        fill="hsl(var(--accent))"
                        stroke="white"
                        strokeWidth="3"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="text-xs space-y-2 bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-primary/10">
              <div className="flex items-center gap-2 justify-center">
                <Anchor className="w-3 h-3 text-primary" />
                <span className="font-bold text-primary">Salida:</span> 
                <span className="text-foreground">{cruise.departure}</span>
              </div>
              {cruise.departure !== cruise.arrival && (
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span className="font-bold text-primary">Llegada:</span> 
                  <span className="text-foreground">{cruise.arrival}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-sm mb-2 flex-wrap">
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                <Ship className="w-4 h-4 text-primary" />
                <span className="font-bold text-primary">{cruise.ship}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">{cruise.duration}</span>
              </div>
              <div className="bg-accent/10 px-3 py-1 rounded-full">
                <span className="font-bold text-accent">{cruise.dates}</span>
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-3">
              {cruise.route}
            </h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
              <span className="font-medium">{cruise.stops.join(" • ")}</span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-3 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-xs font-bold text-primary mb-1">Interior</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.interior}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-3 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-xs font-bold text-primary mb-1">Exterior</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.exterior}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-3 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-xs font-bold text-primary mb-1">Balcón</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.balcony}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-3 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-xs font-bold text-primary mb-1">Suite</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.suite}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-primary/10">
            <div>
              <p className="text-sm font-semibold text-primary mb-1">Desde</p>
              <p className="text-4xl font-bold text-accent">US$ {cruise.priceFrom}</p>
              <p className="text-xs text-muted-foreground font-medium">por huésped - impuestos incluidos</p>
            </div>
            <button className="cta-button-accent rounded-full px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
              Seleccionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseResultCard;

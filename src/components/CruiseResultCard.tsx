import { MapPin, Calendar, Ship, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden border border-border">
      <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
        {/* Map Section */}
        <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative w-full h-48">
              {/* Simple map placeholder with route visualization */}
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Alaska outline simplified */}
                <path
                  d="M 20,80 Q 40,60 80,70 T 140,50 L 160,40 L 180,50 L 190,70 L 180,90 L 160,100 L 120,110 L 80,100 Q 40,95 20,80 Z"
                  fill="hsl(var(--primary) / 0.1)"
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
                          strokeWidth="2"
                          strokeDasharray="4"
                        />
                      )}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="6"
                        fill="hsl(var(--accent))"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="font-medium">Salida:</span> {cruise.departure}
              </div>
              {cruise.departure !== cruise.arrival && (
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span className="font-medium">Llegada:</span> {cruise.arrival}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Ship className="w-4 h-4 text-primary" />
              <span className="font-medium">{cruise.ship}</span>
              <span className="mx-2">•</span>
              <Calendar className="w-4 h-4 text-primary" />
              <span>{cruise.duration}</span>
              <span className="mx-2">•</span>
              <span>{cruise.dates}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              {cruise.route}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowRight className="w-4 h-4" />
              <span>{cruise.stops.join(", ")}</span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Interior</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.interior}</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Exterior</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.exterior}</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Balcón</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.balcony}</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Suite</p>
              <p className="font-bold text-lg text-foreground">US$ {cruise.prices.suite}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground">Desde</p>
              <p className="text-3xl font-bold text-accent">US$ {cruise.priceFrom}</p>
              <p className="text-xs text-muted-foreground">por huésped - impuestos incluidos</p>
            </div>
            <Button className="rounded-full px-8 py-6 text-lg font-bold cta-button-accent">
              Seleccionar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseResultCard;

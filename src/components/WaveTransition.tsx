const WaveTransition = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden bg-background">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
          className="fill-primary"
        />
        <path
          d="M0,80 C240,50 480,50 720,80 C960,110 1200,110 1440,80 L1440,120 L0,120 Z"
          className="fill-primary/80"
          style={{ opacity: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default WaveTransition;

import { scrollTickerItems } from "@/lib/content";

export function ScrollTicker() {
  // Rendered twice so the -50% marquee loops seamlessly.
  const items = [...scrollTickerItems, ...scrollTickerItems];

  return (
    <div className="relative overflow-hidden border-y border-rule py-3.5">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap px-8 font-mono text-xs text-mute"
          >
            {item}
            <span className="text-brand">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

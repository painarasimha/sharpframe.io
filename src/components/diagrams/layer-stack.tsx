import { cn } from "@/lib/utils";

interface Layer {
  label: string;
  note: string;
}

/**
 * Three stacked layers, read bottom to top: clear operations → connected
 * systems → AI. The top layer is outlined in lime because it is the thing
 * everyone asks for, and the diagram's whole point is that it rests on the
 * two below it.
 */
export function LayerStack({
  layers,
  className,
}: {
  /** Given top-first; rendered in that order. */
  layers: readonly Layer[];
  className?: string;
}) {
  return (
    <ol className={cn("flex list-none flex-col", className)}>
      {layers.map((layer, i) => {
        const isTop = i === 0;
        const isLast = i === layers.length - 1;
        return (
          <li key={layer.label}>
            <div
              className={cn(
                "flex items-center justify-between gap-4 border px-5 py-5",
                isTop ? "border-2 border-accent bg-surface" : "border-line bg-surface"
              )}
              // Each layer sits a little narrower than the one beneath it.
              style={{ marginInline: `${i * 16}px` }}
            >
              <span className="text-[15px] font-semibold text-ink">
                {layer.label}
              </span>
              <span className="text-right text-[13px] text-muted">
                {layer.note}
              </span>
            </div>
            {!isLast ? (
              <div aria-hidden className="mx-auto h-3 w-px bg-line" />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

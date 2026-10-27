import { blueprint } from "@content/site";

/**
 * A stylized mock of the leak report, clearly marked illustrative. Bar widths
 * come from `weight`, which is a relative figure and nothing more — no money
 * amounts are shown, because we have none to show.
 */
export function LeakReportMock() {
  const { rows, badge, totalLabel, totalValue } = blueprint.sampleReport;

  return (
    <figure className="relative border border-line bg-surface p-6 sm:p-8">
      <figcaption className="absolute right-5 top-5 border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        {badge}
      </figcaption>

      <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
        Leak report
      </p>

      <ul className="mt-7 flex list-none flex-col gap-4">
        {rows.map((row, i) => (
          <li key={row.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-[14px] text-ink">{row.label}</span>
              <span
                aria-hidden
                className="font-mono text-[12px] text-muted"
              >
                ₹ / $
              </span>
            </div>
            <div className="h-2.5 w-full bg-bg">
              <div
                className={i === 0 ? "h-full bg-accent" : "h-full bg-ink/25"}
                style={{ width: `${row.weight}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-1 border-t border-line pt-5">
        <span className="text-[14px] font-semibold text-ink">{totalLabel}</span>
        <span className="text-[13px] text-muted">{totalValue}</span>
      </div>
    </figure>
  );
}

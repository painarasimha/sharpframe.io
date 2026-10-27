/** Blueprint → Build → Automate → Grow, as a connected flow. */
export function ServiceFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="flex list-none flex-wrap items-center gap-x-3 gap-y-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          <span className="border border-line bg-surface px-4 py-2.5 text-[14px] font-medium text-ink">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden className="text-accent-ink">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

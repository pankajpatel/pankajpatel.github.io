export const Duration = ({
  from,
  to,
  format = "MMM YYYY",
}: {
  from: string;
  to: string;
  format?: string;
}) => {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const formatDate = (value: string) => formatter.format(new Date(`${value}T00:00:00Z`));

  const _from = format === "MMM YYYY" ? formatDate(from) : from;
  const _to = from !== to ? (format === "MMM YYYY" ? formatDate(to) : to) : "Today";

  return (
    <span>
      {_from} - {_to}
    </span>
  );
};

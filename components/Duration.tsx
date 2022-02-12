import dayjs from "dayjs";

export const Duration = ({
  from,
  to,
  format = "MMM YYYY",
}: {
  from: string;
  to: string;
  format?: string;
}) => {
  const _from = dayjs(from, "YYYY-MM-DD").format(format);
  const _to = from !== to ? dayjs(to, "YYYY-MM-DD").format(format) : "Today";

  return (
    <span>
      {_from} - {_to}
    </span>
  );
};

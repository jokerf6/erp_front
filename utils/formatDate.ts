export function FormatDate(dateString: any, time: boolean) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  if (time) {
    return `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} ${date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  } else {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
}

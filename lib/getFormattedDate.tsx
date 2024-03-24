export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    // Handle invalid date string
    return "";
  }
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
}

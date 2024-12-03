export function timeAgo(date: Date | string | number): string {
  let parsedDate: Date;

  if (typeof date === "string") {
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) {
      throw new TypeError("Invalid date format, expected yyyy-mm-dd");
    }
    const [, year, month, day] = match;
    parsedDate = new Date(`${year}-${month}-${day}`);
  } else if (typeof date === "number") {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  if (isNaN(parsedDate.getTime())) {
    throw new TypeError("Invalid date");
  }

  const now = new Date();
  const secondsDiff = Math.floor((now.getTime() - parsedDate.getTime()) / 1000);
  const secondsAgo = Math.abs(secondsDiff);

  if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo === 1 ? "" : "s"} ago`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) {
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  }

  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) {
    return `${weeksAgo} week${weeksAgo === 1 ? "" : "s"} ago`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) {
    return `${monthsAgo} month${monthsAgo === 1 ? "" : "s"} ago`;
  }

  const yearsAgo = Math.floor(daysAgo / 365);
  return `${yearsAgo} year${yearsAgo === 1 ? "" : "s"} ago`;
}

export function formatNumber(num: string): string {
  let number = parseFloat(num);

  if (isNaN(number)) {
    throw new TypeError("Invalid number format");
  }

  const suffixes = ["", "k", "m", "b", "t"];
  let suffixIndex = 0;

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }

  return (
    number.toLocaleString(undefined, { maximumFractionDigits: 1 }) +
    suffixes[suffixIndex]
  );
}

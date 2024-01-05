export function formatTime(seconds) {
  if (!!seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes
      ?.toString()
      ?.padStart(2, '0')}:${remainingSeconds?.toString()?.padStart(2, '0')}`;
    return formattedTime;
  }
}

export function formatViewsCount(views) {
  if (views) {
    if (views >= 1000000) {
      const millions = (views / 1000000).toFixed(1);
      return `${millions}M`;
    } else if (views >= 1000) {
      const thousands = parseInt(views / 1000);
      return `${thousands}K`;
    } else {
      return `${views}`;
    }
  }
}

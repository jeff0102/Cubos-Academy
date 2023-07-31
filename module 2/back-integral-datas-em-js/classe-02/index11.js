import data from "./database.mjs";

const sortedLogs = (data) => {
  for (let dates of data) {
    dates.registered = new Date(dates.registered).getTime();
  }

  const sortedData = data.sort((a, b) => b.registered - a.registered);
  return sortedData;
};

console.log(sortedLogs(data));

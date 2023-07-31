import data from "./database.mjs"
  
  const sortedLogs = (data) => {
    const sortedData = data.slice().sort((a, b) => {
      return new Date(a.registered).getTime() - new Date(b.registered).getTime();
    });
  
    return sortedData;
  };
  
  console.log(sortedLogs(data));

let shorted = {};
let counter = {};

function query(data) {
  let result = "";
  switch (data.query) {
    case "/shorten":
      result = `https://pendekin.id/${data.spath}`;
      shorted[result] = data.url;
      counter[result] = 0;
      return result;
    case "/redirect":
      result =
        shorted[data.url] === undefined
          ? `Error: ${data.url.split("/")[3]} not found in te service`
          : shorted[data.url];
      result === shorted[data.url] ? (counter[data.url] += 1) : null;
      return result;
    case "/delete":
      result = shorted[data.url];
      result =
        result === undefined
          ? `Error: ${data.url.split("/")[3]} not found in te service`
          : "Success";
      result === "Success" ? delete shorted[data.url] : null;
      return result;
    case "/count":
      result =
        counter[data.url] === undefined
          ? `Error: ${data.url.split("/")[3]} not found in te service`
          : counter[data.url];
      return result;
  }
}

module.exports = query;

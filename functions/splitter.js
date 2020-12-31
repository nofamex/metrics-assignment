const id = require("./makeid");

function splitter(params) {
  const split1 = params.split("?");
  const query = split1[0];
  const args = split1[1].split("&");
  const url = args[0].split("=")[1];
  let sPath = id(8);

  if (args.length > 1) {
    sPath = args[1].split("=")[1];
  }

  const data = {
    query: query,
    url: url,
    spath: sPath,
  };

  return data;
}

module.exports = splitter;

const https = require("https");

/*
 * Retrieves Volto's yarn.lock directly from github
 */
async function getVoltoYarnLock(version) {
  // https://raw.githubusercontent.com/plone/volto/6.2.0/yarn.lock
  const url = `https://raw.githubusercontent.com/plone/volto/${version}/yarn.lock`;
  return new Promise((resolve, reject) => {
    https
      .get(url, resp => {
        let data = "";
        resp.on("data", chunk => {
          data += chunk;
        });
        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", err => {
        reject(err);
        // This.log("Error in retrieving Volto's yarn.lock: " + err.message);
      });
  });
}

/*
 * Retrieves latest Volto released version from NPM registry
 */
async function getLatestVoltoVersion() {
  // Curl -H "Accept: application/vnd.npm.install-v1+json"
  const url = "https://registry.npmjs.org/@plone/volto";
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        { headers: { Accept: "application/vnd.npm.install-v1+json" } },
        resp => {
          let data = [];
          resp.on("data", chunk => {
            data.push(chunk);
          });
          resp.on("end", () => {
            const res = JSON.parse(data.join(""));
            resolve(res["dist-tags"].latest);
          });
        }
      )
      .on("error", err => {
        reject(err.message);
      });
  });
}

/*
 * Parser for yo cli comma-separated list options
 *
 * By default passing --addon one --addon two records "one,two" as string value
 * This won't work for us, as we'll get something like: one:x,y,two:z,t
 */
function parseAddonsOption(addons) {
  console.log(addons);
  return [];
}

module.exports = {
  getLatestVoltoVersion,
  getVoltoYarnLock,
  parseAddonsOption
};
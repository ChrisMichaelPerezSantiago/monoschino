const {
  cheerio: { load },
} = require("./common");
const config = require("./config");
const request = require("./request");
const Toolkit = require("./Toolkit");

const { decodeVideo } = Toolkit;

const getServers = async ({ id }) => {
  if (!id) throw new Error("You must provide an id");

  const opts = {
    url: `${config.baseURL}/ver/${id}`,
    method: "get",
  };
  const data = await request(opts);
  const $ = load(data);

  const base64DecodedList = $(
    "div.heromain div.row div.col-md-12 ul.dropcaps li"
  )
    .map(
      (_, element) =>
        new Promise((resolve, reject) => {
          try {
            const $element = $(element);
            const name = $element.find("a.play-video").text();
            const base64Decoded = decodeVideo({
              base64: $element.find("a.play-video").attr("data-player"),
            });

            const src = base64Decoded ? base64Decoded.split("url=")[1] : null;

            resolve({ name, src });
          } catch (error) {
            reject(error);
          }
        })
    )
    .get();

  return Promise.all(base64DecodedList);
};

const decodeUqloadVideo = async ({ url }) => {
  const opts = {
    url: url,
    method: "get",
  };
  const response = await request(opts);
  const $ = load(response);
  const scripts = $("script");

  const result = Array.from({ length: scripts.length }, (_, i) => {
    const $script = $(scripts[i]);
    const content = $script.html();

    if ((content || " ").includes("var player = ")) {
      const regex = /(?:((?:https|http):\/\/)|(?:\/)).+(?:.mp4)/gm;
      return regex ? content.match(regex)[0] : null;
    }
  }).filter(Boolean);

  return result ? result[0] : null;
};

const decodeFembedURL = async ({ url }) => {
  if (!url) throw new Error("You must provide a URL");

  const id = url.split("/").filter(Boolean)[3];
  const opts = {
    url: `https://suzihaza.com/api/source/${id}`,
    method: "post",
  };
  const response = await request(opts);
  const { data } = response;

  return data;
};

module.exports = {
  getServers,
  decodeFembedURL,
};

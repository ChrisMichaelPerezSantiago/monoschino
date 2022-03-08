const { axios } = require("./common");

module.exports = ({ url, method }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({ url, method });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

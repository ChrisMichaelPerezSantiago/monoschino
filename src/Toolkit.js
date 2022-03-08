module.exports = class Toolkit {
  static decodeVideo({ base64 }) {
    return !base64 ? null : Buffer.from(base64, "base64").toString("ascii");
  }
};

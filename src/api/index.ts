import Http from "./request";

export default {
  getDouBanList() {
    return Http.get("https://www.douban.com/j/app/radio/channels", {});
  },
  getDemo() {
    return Http.get(
      "http://api.map.baidu.com/telematics/v3/weather?location=嘉兴&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ",
      {}
    );
  },
};

import request from "./request";

// 轮播图
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}
// 获取热门推荐标题栏
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}
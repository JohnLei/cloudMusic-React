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
// 获取新碟上架
export function getNewAlbums(offset, limit, area, type, year, month) {
  return request({
    url: "/top/album",
    params: {
      offset,
      limit,
      area,
      type,
      year,
      month,
    },
  });
}
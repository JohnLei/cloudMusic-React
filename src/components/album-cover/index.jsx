import React, { memo } from "react";
import { getSizeImage } from "@/utils/format-utils";
import './style.less'

export default memo(function HYAlbumCover (props) {
  const { info, size = 130, width = 153, bgp = "-845px", play, play_bgp } = props
  return (
    <div className="iKRptK"
      size={ size }
      width={ width }
      bgp={bgp}
      play_bgp={play_bgp}
      play={play}
    >
      <div className="album-image">
        <img src={ getSizeImage(info.picUrl, size) } alt="" />
        <a rel="noopener noreferrer" href={ `#/discover/album/detail?id=${info.id}` }
        className="cover image_cover"
        >
          {info.name}
        </a>
        <div className="play sprite_icon"></div>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </div>
  )
})
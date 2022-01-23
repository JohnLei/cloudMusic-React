import React, { memo, useEffect, useRef } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import HYThemeHeaderRCM from "@/components/theme-header-rcm"; //标题组件
import { Carousel } from "antd";
import { getNewAlbumAction } from "../../store/actionCreators";
import './style.less'

export default memo(function HYNewAlbum() {
  // redux-hooks
  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)

  const dispath = useDispatch()

  useEffect(() => {
    dispath(getNewAlbumAction(10))
  }, [dispath])

  const pageRef = useRef()
  console.log(newAlbums);

  return (
    <div className="fhbcbQ">
      <HYThemeHeaderRCM title={"新碟上架"} />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={ (e) => pageRef.current.prev()}
        >
        </button>
        <div className="album">
          <Carousel dots={ false } ref={ pageRef }>
            {
              [0, 1].map((item) => {
                return (
                  <div className="page" key={ item }>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map((i) => {
                        return (
                          <div>222</div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={ (e) => pageRef.current.next() }

        >
        </button>
      </div>
    </div>
  )
})
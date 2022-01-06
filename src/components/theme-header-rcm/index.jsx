import React, { memo } from 'react'
import propTypes from 'prop-types'
import './style.less'

const ThemeHeaderRmc = memo((props) => {
  console.log(props);
  const { title, keywords, showIcon, right, keywordsClick } = props
  return (
    <div className='kwcklW'>
      <div className='fNRtau-left'>
        <h2 className='hot-title'>
        <a href="/discover/recommend" className="no-link hot-text">
          { title }
        </a>
        </h2>
        <ul className='keywords'>
          {keywords.map(item => {
            return (
              <li className='item' key={item}>
                <a href="/" onClick={ (e) => { e.preventDefault();keywordsClick(item) } }>
                  { item }
                </a>
                <span className="line">|</span>
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className='kfognK'>
      <span>{ right }</span>
      { showIcon && <i className='icon'></i> }
      </div>
    </div>
  )
})

ThemeHeaderRmc.propTypes = {
  // title必填项
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  showIcon: propTypes.bool,
  right: propTypes.any,
  keywordsClick: propTypes.func
}

ThemeHeaderRmc.defaultProps = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default ThemeHeaderRmc
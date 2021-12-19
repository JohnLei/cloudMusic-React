import React, { memo, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, message, Modal } from "antd";
import Draggable from "react-draggable";
import { changeIsVisible } from "./store";
import { PhoneOutlined } from "@ant-design/icons";
import LoginIcon from "@/components/theme-controls-icon/login/index";
// import ThemeLoginForm from "../theme-login-form";

// 登录页面(模态框)

const ThemeLogin = memo(() => {
  // state props
  const [disabled, setDisabled] = useState(true)
  const [loginState, setLoginState] = useState('default')
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  })
  const draggleRef = useRef(null)

  // redux
  const dispatch = useDispatch()
  const { isVisible } = useSelector(
    (state) => ({
      isVisible: state.getIn(['loginState', 'isVisible'])
    }),
    shallowEqual
  )
  // 取消
  const handleCancel = (e) => {
    // 关闭模态框
    dispatch(changeIsVisible(false))
    // 延迟返回初始状态
    setTimeout(() => {
      setLoginState('default')
    }, 100)
  }
  // 拖拽
  const onStart = (event, uiData) => {
    console.log('拖拽', uiData);
    const { cilentWidth, cilentHeight } = window?.document?.documentElement
    const targetRect = draggleRef?.current.getBoundingClientRect()
    console.log(targetRect);
    setBounds({
      left: -targetRect?.left + uiData?.x,
      right: cilentWidth - (targetRect?.right - uiData?.x),
      top: -targetRect?.top + uiData?.y,
      bottom: cilentHeight - (targetRect?.bottom - uiData?.y)
    })
  }
  // 判断是什么登录方式
  const handleLogin = (loginType) => {
    switch (loginType) {
      case 'phone':
        setLoginState('phone');
        break;
      case 'email':
        setLoginState('email');
        break;
      case 'register':
        setLoginState('register');
        break;
        default:
    }
  }
  // defaultWrapperContent
  const defaultWrapperContent = (
    <div className="bnPvpd">
      <div className="onXNIO">
        <div className="login-content">
          <div className="login-gb">
            <Button 
              type="ghost"
              onClick={ () => handleLogin('register') }
              shape="round"
              icon={ <PhoneOutlined/> }
              className="gab"
            >
              注册
            </Button>
            <Button
              type="primary"
              shape="round"
              icon={ <PhoneOutlined/> }
              onClick={ () => handleLogin('phone')}
            >
              手机号登录
            </Button>
          </div>
        </div>
      </div>
      {/* 登录方式 */}
      <div className="fuzWyi">
        <div className="icons-wrapper">
          <LoginIcon
            onClick={() => message.warn("暂不做")}
            position="-150px -670px"
            description="微信登录"
          />
           <LoginIcon
            onClick={() => message.warn("暂不做")}
            position="-190px -670px"
            description="QQ登录"
          />
          <LoginIcon
            onClick={() => message.warn("暂不做")}
            position="-231px -670px"
            description="微博登录"
          />
          <LoginIcon
            onClick={() => handleLogin("email")}
            position="-271px -670px"
            description="网易邮箱登录"
          />
        </div>
      </div>
    </div>
  )
  // phoneLogin(手机号登录)
  const phoneLogin = (loginState) => {
    return (
      <div>
        
      </div>
    )
  }

  return (
    <Draggable>
      <Modal
        centered
        footer={ null }
        title= {
          <div
            style={{ width: '100%', cursor: 'move' }}
            onMouseOver={
              () => {
                if (disabled) {
                  setDisabled(false)
                }
              }
            }
            onMouseOut={
              () =>{
                setDisabled(true)
              }
            }
            onFocus={() => {}}
            onBlur={() => {}}
          >
            { loginState === 'register' ? '注册' : '登录' }
          </div>
        }
        visible={ isVisible }
        onCancel={ handleCancel }
        modalRender={(modal) => (
          <Draggable
            disabled={ disabled }
            bounds={ bounds }
            onStart={ (event, uiData) => onStart(event, uiData) }
          >
            <div ref={ draggleRef }>{ modal }</div>
          </Draggable>
        )}
      >
        {/* { 登录 } */}
        { loginState === 'default' ? defaultWrapperContent :null}
        { loginState === 'phone' ? phoneLogin() :undefined }
        { loginState === 'email' ? phoneLogin('email') :undefined }
        { loginState === 'register' ? phoneLogin('register') :undefined }
      </Modal>
    </Draggable>
  )
})

export default ThemeLogin
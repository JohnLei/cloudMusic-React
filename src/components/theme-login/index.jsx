import React, { memo, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, message, Modal } from "antd";
import Draggable from "react-draggable";
import { changeIsVisible } from "./store";
import { PhoneOutlined } from "@ant-design/icons";
// import LoginIcon from "@/components/theme-controls-icon/login/index";
// import ThemeLoginForm from "../theme-login-form";

// 登录页面(模态框)

const ThemeLogin = () => {
  // state props
  const [disabled, setDisabled] = useState(true)
  const [loginState, setLoinState] = useState('default')
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
      setLoinState('default')
    }, 100)
  }


  return (
    <div>
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
      >

      </Modal>
    </div>
  )
}

export default ThemeLogin
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import propTypes from 'prop-types'
import { Form, Input, Button, Checkbox, message } from "antd";
import { getParseLoginState, getMatchReg } from "@/utils/format-utils";
import { sendRegisterCode, sendRegister } from "../../services/login";


/**
 * 登录表单组件
 */
const ThemeLoginForm = (props) => {
  // 拿到登录状态
  const { loginState } = props

  return (
    <>
    <div>2222</div>
    </>
  )
}

export default ThemeLoginForm
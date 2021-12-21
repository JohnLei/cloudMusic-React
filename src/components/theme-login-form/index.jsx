import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import propTypes from 'prop-types'
import { Form, Input, Button, Checkbox, message } from "antd";
import { getParseLoginState, getMatchReg } from "@/utils/format-utils";
import { getLoginProfileInfo } from "../theme-login/store/actionCreator";
import { sendRegisterCode, sendRegister } from "../../services/login";
import loginFormStyle from "./style.module.less";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { span: 30 }
}

/**
 * 登录表单组件
 */
const ThemeLoginForm = (props) => {
  // 拿到登录状态
  const { loginState } = props
  const [phone, setPhone] = useState(null)
  const [isSendSatte, setIsSendSatte] = useState(false)   //是否发送验证码
  const [second, setSecond] = useState(60)  //验证码
  // 判断登录状态 phone->'手机号'  email->'邮箱'  register -> 注册
  const parseLoginModeText = getParseLoginState(loginState)
  // 表单正则根据不同的登录方式,匹配不同的正则
  const mathchReg = getMatchReg(loginState)
  const mathchPhoneReg = getMatchReg('phone')
  const pwdReg = /[0-9a-zA-Z._-]{6,20}/
  const codeReg = /[0-9a-zA-Z._-]{4,20}/

  // redux=hook
  const dispatch = useDispatch()
  // 表单handle
  const onFinish = ({ username, password }) => {}
  const onFinishFailed = (errorInfo) => {
    console.log('Failed', errorInfo);
  }

  // 注册
  const onRegisterFinish = (value) => {}
  const onRegisterFinishFailed = () => {}

  // handle function
  const handleSendCode = () => {}

  return (
    <>
    <Form
      style={{ display: loginState !== 'register' ? 'block' : 'none' }}
      { ...layout }
      name="basic"
      initialValues={{ remeber: true }}
      onFinish={ onFinish }
      onFinishFailed={ onFinishFailed }
    >
      <Form.Item
      label={ parseLoginModeText }
      name="username"
      rules={[
        {
          pattern: mathchReg,
          message: `请输入正确的${parseLoginModeText}`,
        },
        { required: true, message: "请输入你的账户" },
      ]}
      >
        <Input autoFocus />

      </Form.Item>
      <Form.Item
          label="密码"
          name="password"
          rules={[
            { pattern: pwdReg, message: "密码最短6位" },
            { required: true, message: "请输入你的密码!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className={loginFormStyle.textAlignRight}>
          <Checkbox className={loginFormStyle.mr80} defaultChecked={true}>
            自动登录
          </Checkbox>
          <span className={loginFormStyle.forgetPwd}>忘记密码?</span>
        </div>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="middle"
            block
            shape="round"
          >
            登录
          </Button>
        </Form.Item>

    </Form>
    <Form
      style={{ display: loginState === 'register' ? 'block' : 'none' }}
      {...layout}
      name='basic'
      onFinish={ onRegisterFinish }
      onFinishFailed={ onRegisterFinishFailed }
    >
      <Form.Item
          label={parseLoginModeText}
          name="phone"
          rules={[
            {
              pattern: mathchPhoneReg,
              message: `请输入正确的手机号`,
            },
            { required: true, message: "请输入你的手机号" },
          ]}
        >
          <Input
            autoFocus
            value={phone}
            onChange={({ target }) => {
              setPhone(target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ pattern: pwdReg, message: "密码最短6位", required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <div
            className={loginFormStyle.register}
            onClick={() => handleSendCode()}
          >
            {isSendSatte ? second + "s" : "发送验证码"}
          </div>
        </Form.Item>
        <Form.Item
          className={loginFormStyle.gap}
          label="验证码"
          name="code"
          rules={[
            { pattern: codeReg, message: "验证码最短4位" },
            { required: true, message: "请输入你的验证码" },
          ]}
        >
          <Input disabled={!isSendSatte} />
        </Form.Item>
        <Form.Item
          className={loginFormStyle.gap}
          label="昵称"
          name="nickname"
          rules={[{ required: true, message: "请输入你的昵称" }]}
        >
          <Input disabled={!isSendSatte} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="middle"
            block
            shape="round"
          >
            提交
          </Button>
        </Form.Item>
    </Form>
    </>
  )
}

ThemeLoginForm.propTypes = {
  loginState: propTypes.string,
}
ThemeLoginForm.defaultProps = {
  loginState: 'phone'
}

export default ThemeLoginForm
/* Created by fjl on 2018/2/2 */

/** **************************自定义*****************************/
// 只包含数字
export const REG_EXP_JUST_DIGIT = /[0-9]*/g
// 数量
export const REQ_EXP_QUNTITY = /[0-9]*[.]?[0-9]*/
// 金额(带两位小数的数字)
export const REG_EXP_MONEY = /[0-9]*[.]?[0-9]{0,2}/

// 手机号
export const REG_EXP_PHONE_NUMBER = /(^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$)|(^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$)/

/** **************************常用*****************************/

// 1 用户名正则 (用户名正则，4到16位（字母，数字，下划线，减号） )
export const REG_EXP_USER_NAME = /^[a-zA-Z0-9_-]{4,16}$/

// 2 Email地址
export const REG_EXP_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 3 身份证号（18位）正则
export const REG_EXP_ID_CARD = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

// 4 ipv4地址正则
export const REG_EXP_IPV4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

// 5 RGB Hex颜色正则
export const REG_EXP_RGB_HEX = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

// 6 QQ号码正则
export const REG_EXP_QQ = /^[1-9][0-9]{4,10}$/

// 7 微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
export const REG_EXP_WX = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/

// 8 车牌号正则
export const REG_EXP_BUS_NUMBER = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

// 9 包含中文正则
export const REG_EXP_INCLUDE_CHINESE = /[\u4E00-\u9FA5]/

// 10 密码(长度在8~20)
export const REG_EXP_PASSWORD = /\w{8, 20}$/
// 11 强密码(必须包含大小写字母和数字的组合，长度在8-20之间)
export const REG_EXP_STRONG_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

// 匹配汉字
export const REG_EXP_CHINESE_CHARACTERS = /[\u4e00-\u9fa5]/gm

// base64正则表达式
export const REG_EXP_BASE64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/

// base64字符集正则表达式

export const REG_EXP_BASE64_CHARS = /[a-zA-Z0-9+/]*/

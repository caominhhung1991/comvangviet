import fetch from 'isomorphic-unfetch'
import { ROOT_API } from "common/src/constants/appConstants";

export const checkEmailValid = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  alert("Bạn đã nhập sai định dạng email!")
  return false
}

export const sendEmail = (email, onCancel) => {
  const todayTime = new Date().getTime()

  fetch(`${ROOT_API}/emails.json`, {
    method: 'post',
    body: JSON.stringify({
      email,
      createdAt: todayTime,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(res => {
      return res.json()
    })
    .then(() => {
      if (onCancel) {
        onCancel()
      }
      alert("Cám ơn đã gửi mail đến công ty!")
    })

}

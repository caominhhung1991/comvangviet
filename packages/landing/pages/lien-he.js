import '../styles/lien-he.scss'
import React, {useState} from 'react'
import Layout from '../components/withLayout'

const LienHe = () => {
  const [_email, _setEmail] = useState({
    // name: 'hungcao',
    // email: 'caominhhung1991@gmail.com',
    // subject: 'hung test ' + new Date().getTime(),
    // message: 'hung test content',
  })

  const isDev = false

  const _onChangeEmail = (e) => {
    const {name, value} = e.target
    _setEmail({..._email, [name]: value})
  }

  const makeTemplateMail = () => {
    return `<div>
      <div style='color: red font-weight: bold'>Email được gởi từ trang comvangviet.com/lien-he</div>
      <div style='font-weight: bold'>Tên người gửi: ${_email.name}</div>
      <div style='font-weight: bold'>Email liên hệ: ${_email.email}</div>
      <br>
      <div style='font-weight: bold'>Nội dung:</div>
      <div>${_email.message}</div>
    </div>`
  }

  const _onSend = (e) => {
    if (isDev) {
      console.log(_email)
    }

    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3001/sendMail',
    //   data: {
    //     'message': {
    //       'from_email': _email.email || '',
    //       'to': [
    //         {
    //           'email': 'admin@osac.vn',
    //           'name': 'Admin Hung',
    //           'type': 'to'
    //         }
    //       ],
    //       'autotext': 'true',
    //       'subject': _email.subject,
    //       'html': String(makeTemplateMail()),
    //     }
    //   },
    //   success: function (e) {
    //   }
    // }).done(function (response) {
    //   // console.log(response)
    //   // if you're into that sorta thing
    // })
  }

  return (
    <Layout>
      <div className='lh'>
        <div className='lh__banner'>
          <div className='background__white'>
            <h1 className='text-center text-white lh__title'>Liên Hệ</h1>
            <div className='text-center osac__line'>__________</div>
            <p className='text-white lh__title__content' align='justify'>
              Chúng tôi luôn sẵn sàng nắm bắt những cơ hội hợp tác kinh doanh nhằm đem lại lợi ích cho tất cả các bên tham gia trên tinh thần xây dựng sự hợp tác thành
              công, lâu dài và bền vững.
            </p>
          </div>
        </div>

        <div className='container '>
          <div className='row my-5'>
            <section className='col-md-6 lh__right'>
              <h3 className='my-4 osac__color'>Liên hệ Cơm Vàng Việt</h3>
              <div className=''>
                <ul className='list-unstyled'>
                  <li className='d-flex mb-3'>
                    <i className='fa fa-map-marker fa-2x osac__color mr-3'/>
                    <p style={{lineHeight: '20px'}}>Xuân Thạnh, Thống Nhất, Đồng Nai</p>
                  </li>

                  <li className='d-flex mb-3'>
                    <i className='fa fa-phone fa-2x osac__color mr-3'/>
                    <p><a href='tel:0363575468'>Quốc Thuận - 0363.575.468</a></p>
                  </li>

                  <li className='d-flex mb-3'>
                    <i className='fa fa-envelope fa-2x osac__color mr-3'/>
                    <p><a href='mailto:sales@comvangviet.com'>sales@comvangviet.com</a></p>
                  </li>
                </ul>
              </div>
            </section>

            <section className='lh__form col-md-6 mb-4'>
              <form id='contact-form' name='contact-form' method='POST'>
                <div className='form-group'>
                  <div className='md-form mb-0'>
                    <label htmlFor='name' className=''>Họ tên:</label>
                    <input
                      type='text' id='name' name='name' className='form-control form-control-sm osac__input' required
                      value={_email.name || ''} onChange={_onChangeEmail}
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <div className='md-form mb-0'>
                    <label htmlFor='email' className=''>Email:</label>
                    <input
                      type='email' id='email' name='email' className='form-control form-control-sm osac__input' required
                      value={_email.email || ''} onChange={_onChangeEmail}
                    />
                  </div>
                </div>

                <div className='form-group '>
                  <div className='md-form mb-0'>
                    <label htmlFor='subject' className=''>Chủ Đề:</label>
                    <input
                      type='text' id='subject' name='subject' className='form-control form-control-sm osac__input' required
                      value={_email.subject || ''} onChange={_onChangeEmail}
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <div className='md-form'>
                    <label htmlFor='message'>Nội Dung:</label>
                    <textarea
                      id='message' name='message' rows='2' className='form-control md-textarea osac__input' required
                      value={_email.message || ''} onChange={_onChangeEmail}
                    />
                  </div>
                </div>

                <div className='text-center text-md-left'>
                  <button type='submit' className='btn btn-block osac__button g-recaptcha'
                          onClick={_onSend}
                    // disabled={!isDev || !_isRecapcha}
                  >Gửi Liên Hệ
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LienHe

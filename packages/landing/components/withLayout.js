import React, {useEffect} from 'react'
import Head from 'next/head'
import Header from './Header/Header'
import Footer from '../components/Footer/Footer'

const jquery = 'https://code.jquery.com/jquery-3.3.1.slim.min.js'
const popper = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
const bootstrap = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
const recaptchaAPI = 'https://www.google.com/recaptcha/api.js?render=explicit'

const withLayout = (props) => {
  const {children} = props

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v4.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })

  return (
    <div>
      <Head>
        <title>Công Ty Suất Ăn Công Nghiệp Cơm Vàng Việt</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
        <meta name="description" content="Cơm Vàng Việt cung cấp suất ăn công nghiệp"/>

        <meta property="og:image:width" content="600"/>
        <meta property="og:image:height" content="315"/>
        <meta property="og:description" content="Suất ăn công nghiệp"/>
        <meta property="og:site_name" content="osac.vn"/>
        <meta id="og-image" property="og:image" content="https://s3-us-west-2.amazonaws.com/chotroi/osac/OSAC-image-share.jpg"/>
        <meta property="og:image" content="Cơm Vàng Việt - suat an cong nghiep"/>

        <link rel="shortcut icon" href="/static/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet"/>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'/>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
        <script src={recaptchaAPI} async defer/>
        <script src={jquery}/>
        <script src={popper}/>
      </Head>

      <Header/>

      <div>
        {children}
      </div>

      <div id="fb-root"/>

      <Footer/>

      <footer>
        <script src={bootstrap}/>
      </footer>
    </div>
  )
}

export default withLayout

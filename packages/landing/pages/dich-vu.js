import '../styles/dich-vu.scss'
import React from 'react'
import Layout from '../components/withLayout'
import dynamic from 'next/dynamic'

const ItemServices = dynamic(() => import('../components/ItemServices/ItemServices'))

const DichVu = (props) => {
  return (
    <Layout>
      <div className='gt'>
        <div className='mt-3 container'>
          <h4 className='gt__title'>BẾP ĂN CÔNG NGHIỆP</h4>
          <h4 className='gt__title'>BẾP ĂN TRƯỜNG HỌC</h4>
          <h4 className='gt__title'>TỔ CHỨC TIỆC</h4>
          <h4 className='gt__title'>DỊCH VỤ KHÁC</h4>
        </div>
        <ItemServices/>
      </div>
    </Layout>
  )
}

DichVu.propTypes = {}

export default DichVu
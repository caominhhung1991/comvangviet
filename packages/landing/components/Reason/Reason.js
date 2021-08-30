import React from 'react'
import dynamic from 'next/dynamic'
import './Reason.scss'

const Title = dynamic(() => import('../shared/Title/Title'))
const ReasonItem = dynamic(() => import('./ReasonItem/ReasonItem'))

const Reason = () => {
  return (
    <div className="Reason">
      <Title title={'Lý do chọn Cơm Vàng Việt'}/>
      <div className="Reason__Content">
        <ReasonItem
          title={'Chất lượng tiêu chuẩn'}
          content={'Ưu tiên hàng đầu của chúng tôi là mang đến bữa ăn chất lượng và đảm bảo an toàn vệ sinh thực ...'}
          image={'chat_luong_tieu_chuan'}
        />
        <ReasonItem
          title={'Nguồn thực phẩm an toàn'}
          content={'Hợp tác với các nhà cung cấp thực phẩm sạch và uy tín là yếu tố then chốt để duy trì chất ...'}
          image={'nguon_thuc_pham_an_toan'}
        />
        <ReasonItem
          title={'Dịch vụ linh hoạt'}
          content={'Cơm Vàng Việt được tin cậy vì sự linh hoạt, đáp ứng mọi nhu cầu và mong muốn của khách hàng.'}
          image={'dich_vu_linh_hoat'}
        />
        <ReasonItem
          title={'Kinh nghiệm và uy tín'}
          content={'Bảo chứng cho thương hiệu và chất lượng của Cơm Vàng Việt chính là 10 năm kinh nghiệm cùng những ...'}
          image={'kinh_nghiem_va_uy_tinh'}
        />
        <ReasonItem
          title={'Khách hàng là trọng tâm'}
          content={'Chúng tôi nuôi dưỡng mối quan hệ với khách hàng dựa trên lòng chính trực, sự tôn trọng, tin ...'}
          image={'khach_hang_la_trong_tam'}
        />
        <ReasonItem
          title={'Luôn luôn cải tiến'}
          content={'Ý tưởng mới và sáng tạo luôn là động lực phát triển và cũng là chìa khóa thành công của chúng ...'}
          image={'luon_luon_cai_tien'}
        />
      </div>
    </div>
  )
}

export default Reason

import '../styles/gioi-thieu.scss'
import '../styles/tuyen-dung.scss'
import React, {useState} from 'react'
import Layout from '../components/withLayout'
import BasicModal from '../components/shared/Modals/BasicModal'
import MyGoogleMap, {diadiems} from '../components/shared/MyGoogleMap/MyGoogleMap'

const hinhBannerName = 'static/img/tuyen_dung_banner.jpg'

const phoneNhanSu = {
  phone: '0355233960',
  name: 'Oanh',
  text: '0355.233.960'
}

const tinTuyenDung = [
  // {
  //   title: ['QUẢN LÝ CĂN TIN'],
  //   noidungCV: [
  //     'Lên dự trù phần ăn mỗi ngày',
  //     'Tổng hợp số báo, đối chiếu suất ăn với nhà máy',
  //     'Đặt hàng mỗi ngày, gia vị, gas, gạo .v.v… Liên hệ các nhà cung cấp nếu như có sự cố xảy ra',
  //     'Sắp xếp nhân sự đi làm (chia lịch làm việc, tăng ca cho nhân viên)',
  //     'Đặt CCDC và văn phòng phẩm mỗi tháng',
  //     'Kiểm soát chi phí thực phẩm và chi phí nhân sự tại cơ sở',
  //     'Tiếp nhận và nắm bắt ý kiến khách hàng để ghi nhận và khắc phục',
  //     'Xử lí tình huống trong trường hợp có ý kiến phản hồi từ nhà máy',
  //   ],
  //   soluong: [10],
  //   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
  //   trinhdo: ['CĐ, ĐH nghành Công Nghệ Thực Phẩm hoặc tương đương'],
  //   kinhnghiem: ['1 năm trở lên'],
  //   luong: ['Thỏa thuận'],
  //   chedokhac: [
  //     'Sinh nhật, lễ, tết, thưởng tháng 13',
  //     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
  //     'Du lịch hàng năm…',
  //     'Phụ cấp cơm',
  //   ]
  // },
  // {
  //   title: ['QC THỰC PHẨM'],
  //   noidungCV: [
  //     'Kiểm tra chất lượng hàng hóa đầu vào',
  //     'Lưu mẫu và ghi sổ 3 bước cho 3 ca',
  //     'Lên line, chạy line, chụp hình 3 ca',
  //     'Báo cáo khay mẫu',
  //     'Checklist các khu vực hằng ngày (Nhiệt độ, vệ sinh)',
  //     'Theo dõi hạn sử dụng thực phẩm hằng ngày',
  //     'Hỗ trợ vòng ngoài coi bấm vân tay',
  //   ],
  //   soluong: [15],
  //   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
  //   trinhdo: ['CĐ, ĐH nghành Công Nghệ Thực Phẩm hoặc tương đương'],
  //   kinhnghiem: ['Không yêu cầu kinh nghiệm, chưa có kinh nghiệm sẽ được đào tạo'],
  //   luong: ['6,5 triệu trở lên'],
  //   chedokhac: [
  //     'Sinh nhật, lễ, tết, thưởng tháng 13',
  //     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
  //     'Du lịch hàng năm…',
  //     'Phụ cấp cơm',
  //   ]
  // },
  // {
  //   title: ['ĐẦU BẾP'],
  //   noidungCV: [
  //     'Chịu trách nhiệm về các món chính trong ca',
  //     'Điều chỉnh khẩu vị khi khẩu vị chưa đạt',
  //     'Xử lí sự cố nếu có sự cố hàng hóa',
  //   ],
  //   soluong: [10],
  //   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
  //   trinhdo: ['Không yêu cầu. Biết đọc, viết'],
  //   kinhnghiem: ['Có kinh nghiệm nấu bếp ăn công nghiệp'],
  //   luong: ['Thỏa thuận'],
  //   chedokhac: [
  //     'Sinh nhật, lễ, tết, thưởng tháng 13',
  //     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
  //     'Du lịch hàng năm…',
  //     'Phụ cấp cơm',
  //   ]
  // },
  // {
  //   title: ['PHỤ BẾP'],
  //   noidungCV: [
  //     'Chịu trách nhiệm nấu các món xào, canh, các món chiên',
  //     'Hỗ trợ bếp chính làm món mặn',
  //     'Xử lí sự cố nếu có sự cố hàng hóa',
  //   ],
  //   soluong: [15],
  //   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
  //   trinhdo: ['Không yêu cầu. Biết đọc, viết'],
  //   kinhnghiem: ['Có kinh nghiệm nấu bếp ăn công nghiệp'],
  //   luong: ['Thỏa thuận'],
  //   chedokhac: [
  //     'Sinh nhật, lễ, tết, thưởng tháng 13',
  //     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
  //     'Du lịch hàng năm…',
  //     'Phụ cấp cơm',
  //   ]
  // },
  {
    title: ['LAO ĐỘNG PHỔ THÔNG'],
    noidungCV: [
      'Dọn vệ sinh khu vực căn tin bếp',
      'Sơ chế rau, củ, quả, thịt, cá',
      'Rửa khay, dọn rác khu vực sản xuất',
      'Chia suất cho công nhân',
      'Nấu cơm',
      'Các công việc khác do Ban quản lý sắp xếp',
    ],
    soluong: [40],
    diadiem: [
      'Đồng Nai',
      // 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'
    ],
    trinhdo: ['Không yêu cầu. Có sức khỏe tốt, chịu khó, trung thực'],
    kinhnghiem: ['Không yêu cầu, chưa có kinh nghiệm sẽ được đào tạo'],
    luong: ['Thỏa thuận'],
    chedokhac: [
      'Sinh nhật, lễ, tết, thưởng tháng 13',
      'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
      'Du lịch hàng năm…',
      'Phụ cấp cơm',
    ]
  },
]

const TuyenDung = () => {
  const [_selectedJob, _onSelectJob] = useState({})

  return (
    <Layout>
      <div className='gt'>
        <div className='tuyenDungBanner'>
          <img src={`${hinhBannerName}`} alt='tuyen-dung-osac' className='tuyenDungBanner__image'/>
        </div>

        <div className='dangTuyenDung'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='dangTuyenDung__title'><span className='osac-color'>CTY CƠM VÀNG VIỆT</span><br/>TUYỂN DỤNG<br/>CÁC VỊ TRÍ</div>
                <span className='dangTuyenDung__line'>____</span>
                <div>Mọi chi tiết việc làm liên hệ:<br/>
                  <a href={`tel:${phoneNhanSu.phone}`}>{phoneNhanSu.text}</a> ({phoneNhanSu.name} - Trưởng phòng nhân sự) <br/>
                  hoặc nộp hồ sơ qua email: <a href='mailto:hr@comvangviet.com'>hr@comvangviet.com</a></div>
              </div>

              <div className='col-md-8'>
                <div>
                  {
                    tinTuyenDung.map((tin, index) => {
                      return <div className='row baiDang mb-3' key={index}>
                        <div className='col-md-9'>
                          <div className='baiDang__title' data-toggle='modal' data-target='#modal'
                               onClick={() => _onSelectJob(tin)}
                          >
                            {String(tin.title).toUpperCase()}
                          </div>
                          <div className='baiDang__item'>Số lượng: {tin.soluong} - Địa điểm: {tin.diadiem.join(', ')}</div>
                          <div className='baiDang__item'>Trình độ: {tin.trinhdo}</div>
                          <div className='baiDang__item'>Kinh nghiệm: {tin.kinhnghiem}</div>
                          <div className='baiDang__item'>Lương: {tin.luong}</div>
                          <div className='baiDang__line'>______________</div>
                        </div>
                        <div className='col-md-3'>
                          <a href={`tel:${phoneNhanSu.phone}`}>
                            <button className='btn btn-outline-dark'>Liên Hệ: {phoneNhanSu.name} {phoneNhanSu.text}</button>
                          </a>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <BasicModal
          title='THÔNG TIN CÔNG VIỆC'
          size={'large'}
          center
          isFooter={false}
        >
          <div className='p-4'>
            <h4 className='text-center osac__color'><strong>{_selectedJob.title || ''}</strong></h4>

            <div className='row mb-2'>
              <div className='col-md-9'>
                <h6 className='mb-3'><strong>Công việc</strong></h6>
                <ul>
                  <li>Số lượng tuyển: {_selectedJob.soluong} - Địa điểm làm việc: {_selectedJob.diadiem}</li>
                  <li>Trình độ: {_selectedJob.trinhdo}</li>
                  <li>Kinh nghiệm: {_selectedJob.kinhnghiem}</li>
                </ul>
              </div>

              <div className='col-md-3'>
                <a href={`tel:${phoneNhanSu.phone}`}>
                  <button className='btn btn-outline-dark'>Liên Hệ: {phoneNhanSu.name} {phoneNhanSu.text}</button>
                </a>
              </div>
            </div>

            <h6 className='mb-3'><strong>Trách Nhiệm Công Việc</strong></h6>
            <ul>
              {_selectedJob.noidungCV && _selectedJob.noidungCV.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>

            <h6 className='mb-3'><strong>Chế Độ Khác</strong></h6>
            <ul>
              {_selectedJob.chedokhac && _selectedJob.chedokhac.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>

            <h6 className='mb-3'><strong>Bản đồ</strong></h6>
            <MyGoogleMap place={diadiems.xuongSX.id}/>

          </div>
        </BasicModal>
      </div>
    </Layout>
  )
}

export default TuyenDung

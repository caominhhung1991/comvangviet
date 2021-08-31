import '../styles/gioi-thieu.scss'
import React from 'react'
import Layout from '../components/withLayout'

const GioiThieu = (props) => {
  return (
    <Layout>
      <div className='gt'>
        <div className='banner'/>

        <div className='mt-3 container'>
          <h4 className='gt__title'>Kính gửi: Quý Công ty, Quý Khách hàng</h4>
          <p>Lời đầu tiên <strong>Công ty Dịch Vụ Cơm Vàng Việt</strong> xin gửi lời chào, lời chúc sức khỏe đến Quý Công ty, Quý Khách hàng. Chúc Quý Công ty, Quý Khách hàng ngày
            càng phát triển ổn
            định và thịnh vượng.</p>
          <p><strong>CÔNG TY TNHH DV Cơm Vàng Việt</strong> là một đơn vị hoạt động trong lĩnh vực cung cấp suất ăn công nghiệp cho các đơn vị đối tác trong các khu công nghiệp,
            trường học, bệnh viện, tư gia… Với nhiều năm kinh nghiệm, hệ thống các cơ sở sản xuất được đầu tư bài bản và đạt chuẩn vệ sinh an toàn , bên cạnh đó đội ngũ
            công nhân viên của Công ty được khám sức khoẻ định kỳ và tập huấn về kiến thức VSATTP thường xuyên, Công ty DV Cơm Vàng Việt đã, đang và sẽ ngày càng phát triển
            vững mạnh để trở thành đối tác uy tín và bền vững của Quý khách hàng.</p>
          <p><strong>Các dịch vụ của chúng tôi bao gồm:</strong></p>
          <ul>
            <li>Cung cấp suất ăn công nghiệp cho các công ty xí nghiệp trong các khu công nghiệp</li>
            <li>Cung cấp suất ăn công nghiệp cho các trường học, tổ tức giáo dục</li>
            <li>Cung cấp suất ăn công nghiệp cho các bệnh viện, cơ sở y tế</li>
            <li>Nhận đặt tiệc cưới, tiệc buffet</li>
            <li>Nhận đặt tiệc khai trương, khánh thành liên hoan, tất niên cho các công ty, tổ chức theo yêu cầu</li>
            <li>Nhận đặt tiệc sinh nhật, tiệc mừng đầy tháng, tiệc mừng thọ.</li>
            <li>Và tiệc theo yêu cầu của Quý khách…</li>
          </ul>

          <p>Chúng tôi luôn phấn đấu hết mình để mang đến cho anh, chị em công nhân những bữa ăn ngon, bổ dưỡng, hợp vệ sinh, góp phần nâng cao sức khoẻ cho đội ngũ công
            nhân để đảm bảo sản xuất và công tác tốt. Đặc biệt, trong gần 20 năm qua, Công ty đã giành được sự tin tưởng và gắn bó của rất nhiều các công ty đối tác khách
            hàng</p>
          <p>Công ty chúng tôi đã được cục vệ sinh an toàn thực phẩm TP Hồ Chí Minh kiểm tra và cấp giấy chứng nhận cơ sở đủ điều
            kiện <strong>ISO-22000</strong>, <strong>VSATTP</strong>, đạt chứng
            nhận của <strong>HACCP</strong></p>

          <img
            src='https://vinbeca.vn/uploads/about/307718613076466vithumb_1366x490.jpg'
            alt='cung cấp suất ăn công nghiệp'
            className='gt__image my-2 mb-3'
          />

          <p>Đến với chúng tôi, Quý khách sẽ hoàn toàn yên tâm về chất lượng VSATTP, hài lòng về thái độ và phong cách phục vụ.</p>

          <p>Phục vụ tại nhà không giới hạn về số lượng bàn ăn, món ăn
            Không quản ngại đường xa, phục vụ tất cả các ngày trong tuần
            Kèm theo dịch vụ nhà bạt, bàn ghế để phục vụ quý khách khi có nhu cầu
            Tất cả các món ăn đều được tuyển chọn từ nguồn nguyên liệu tươi sống, có xuất xứ rõ ràng, đảm bảo an toàn vệ sinh</p>

          <p>Thực đơn phong phú, đa dạng, kết hợp giữa các món ăn cổ truyền và hiện đại.
            Đội ngũ đầu bếp giàu kinh nghiệm và đội ngũ nhân viên phục vụ rất nhiệt tình, chu đáo, đảm bảo làm hài lòng tất cả các quan khách.</p>

          <p>Chúng tôi luôn lắng nghe, cầu thị và mong muốn được phục vụ Quý Công ty.</p>
        </div>
      </div>
    </Layout>

  )
}

GioiThieu.propTypes = {}

export default GioiThieu

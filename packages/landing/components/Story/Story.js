import React, {Component} from 'react'
import './Story.scss'

import Title from '../shared/Title/Title';
import Button from '../shared/Button/Button';

const banner_web = '/static/img/banner-web.jpg'
// const aboutOsac = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fabout-osac.jpg?alt=media&token=09642c33-6383-4a30-95c2-3bd5c841243f'
const aboutOsac = 'https://hachium.storage.googleapis.com/users/736ffb189028a3192c6f67bf7c7c59b2/1593767816779.jpg'

export class Story extends Component {
  render() {
    return (
      <div className="Story mt-4">
        <Title title={"Câu chuyện của chúng tôi"} dataAOS={"fade-up"}/>
        <div className="Story__Content">
          <div
            className="Story__Image"
            data-aos="fade-up-left"
            data-aos-offset="100"
            data-aos-anchor-placement="top-bottom"
            style={{backgroundImage: `url(${aboutOsac})`}}
          >
          </div>
          <div
            className="Story__Text"
            data-aos="fade-up-right"
            data-aos-offset="100"
          >
            <h2 className='Story__compName'>CƠM VÀNG VIỆT</h2>
            <p>Cơm Vàng Việt là Công ty chuyên cung cấp suất ăn công nghiệp, suất ăn trường học, dịch vụ ẩm thực, cung cấp thực phẩm, xin gửi lời chào đến Quý công ty!</p>

            <p>Với sứ mệnh mang đến cộng đồng những suất ăn công nghiệp chất lượng và an toàn, chúng tôi luôn tổ chức quy trình làm việc - nghiên cứu cải tiến định lượng
              suất ăn - đào tạo - phát triển đội ngũ nhân viên chuyên nghiệp.</p>

            <p>Trên tinh thần mong muốn được đồng hành và góp phần vào sự phát triển của công ty, Cơm Vàng Việt hân hạnh được hợp tác cùng Quý công ty. Chúng tôi tin
              rằng sự quan tâm của quý vị và kinh nghiệm tổ chức phục vụ của chúng tôi, cùng nhau chúng ta sẽ có giải pháp cho mọi vấn đề.</p>
            <Button text={"About us"}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Story

import { Icon } from "react-icons-kit";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialDribbble } from "react-icons-kit/ionicons/socialDribbble";
import { socialGoogleplus } from "react-icons-kit/ionicons/socialGoogleplus";
import { socialSkype } from "react-icons-kit/ionicons/socialSkype";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";

import haccp from "common/src/assets/image/agency/giayPhep/haccp.jpg";
import iso from "common/src/assets/image/agency/giayPhep/iso.jpg";
import giayPhepDKKD from "common/src/assets/image/agency/giayPhep/giayPhepDKKD.jpg";
import chungNhanIso from "common/src/assets/image/agency/giayPhep/osac-food-iso-22000.jpg";
import thuan2 from "common/src/assets/image/agency/giayPhep/thuan2.jpg";

import thit from "../assets/image/agency/beef.png";
import ca from "../assets/image/agency/fish.png";
import trung from "../assets/image/agency/egg.png";
import gao from "../assets/image/agency/rice.png";
import doUong from "../assets/image/agency/wine.png";
import rauCuQua from "../assets/image/agency/food.png";

import bapCai from "../assets/image/agency/sanphams/bap-cai.jpg";
import bapMy from "../assets/image/agency/sanphams/bap-my.jpg";
import caChua from "../assets/image/agency/sanphams/ca-chua.jpg";
import caRot from "../assets/image/agency/sanphams/ca-rot.jpg";
import chanh from "../assets/image/agency/sanphams/chanh.jpg";
import chuoi from "../assets/image/agency/sanphams/chuoi.jpg";
import dauBap from "../assets/image/agency/sanphams/dau-bap.jpg";
import dauTay from "../assets/image/agency/sanphams/dau-tay.jpg";
import duaLeo from "../assets/image/agency/sanphams/dua-leo.jpg";
import hanhTay from "../assets/image/agency/sanphams/hanh-tay.jpg";
import khoaiTay from "../assets/image/agency/sanphams/khoai-tay.jpg";
import otChuong from "../assets/image/agency/sanphams/ot-chuong.jpg";
import tao from "../assets/image/agency/sanphams/tao.jpg";
import xaLach from "../assets/image/agency/sanphams/xa-lach.jpg";

export const ROOT_API = "https://mydashboard-5f063.firebaseio.com";

export const GENERAL = {
  contact: {
    phone: "0901474048",
    displayPhone: "090.1474.048",
    name: "LÀM VIỆC",
    email: "quoctinh@osac.org.vn"
  },
  buttons: {
    xemThem: {
      id: "xemThem", name: "XEM THÊM"
    },
    lienHe: {
      id: "lienHe", name: "GỌI LIÊN HỆ",
      onClick: () => {
        window.open(`tel:${GENERAL.contact.phoneNumber}`);
      }

    }
  },
  socials: {
    titles: [
      "Công Ty Osac Food"
    ],
    descriptions: [
      "Osac Food chuyên cung cấp nguyên vật liệu tươi sống cho nhà hàng, bếp ăn công nghiệp."
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac-food%2Fosac-food.jpg?alt=media&token=c358c07c-3955-4f7a-ac86-035f977c2d6d"
    ],
    urls: [
      "http://osac.org.vn"
    ],
    siteNames: [
      "Osac Service"
    ]
  }
};

export const SECTIONS = {
  aboutCompany: {
    id: "aboutCompany",
    lable: "Về Công Ty"
  },
  chungChis: {
    id: "chungChis",
    lable: "Chứng Chỉ"
  },
  aboutProducts: {
    id: "nhomSanPhams",
    lable: "Nhóm Sản Phẩm"
  },
  sanPhams: {
    id: "sanPhams",
    lable: "Sản Phẩm"
  },
  thanhTuus: {
    id: "thanhTuus",
    lable: "Thành Tựu"
  },
  lienHe: {
    id: "lienHe",
    lable: "Liên Hệ"
  },
  getHashId: (id) => {
    return `#${id}`;
  },
  getArray: () => {
    return [
      SECTIONS.aboutCompany,
      SECTIONS.chungChis,
      SECTIONS.aboutProducts,
      SECTIONS.sanPhams,
      SECTIONS.thanhTuus,
      SECTIONS.lienHe
    ];
  }
};

export const SANPHAMS = {
  id: "sanPhams",
  name: "Sản Phẩm",
  title: "SẢN PHẨM",
  subTitle: "Osac Food cung cấp các loại thực phẩm",
  sanPhams: [
    { title: "Bắp cải", avatar: bapCai },
    { title: "Bắp mỹ", avatar: bapMy },
    { title: "Cà chua", avatar: caChua },
    { title: "Cà rốt", avatar: caRot },
    { title: "Chanh", avatar: chanh },
    { title: "Chuối", avatar: chuoi },
    { title: "Đậu bắp", avatar: dauBap },
    { title: "Dâu tây", avatar: dauTay },
    { title: "Dưa leo", avatar: duaLeo },
    { title: "Hành tây", avatar: hanhTay },
    { title: "Khoai tây", avatar: khoaiTay },
    { title: "Ớt chuông", avatar: otChuong },
    { title: "Táo", avatar: tao },
    { title: "Xà lách", avatar: xaLach },
  ]
};

// Chứa menu sidebar
export const DATA = {
  getMenuItems: () => {
    const menuItems = SECTIONS.getArray();
    return menuItems.map(menu => {
      return {
        label: menu.lable,
        path: SECTIONS.getHashId(menu.id),
        offset: "67"
      };
    });
  },
  aboutus: [
    {
      id: 1,
      title: "Amazing communication experience.",
      icon: "flaticon-next"
    },
    {
      id: 2,
      title: "Best designing experience with trending tools and sizes.",
      icon: "flaticon-next"
    },
    {
      id: 3,
      title: "Training and communication method remotely.",
      icon: "flaticon-next"
    },
    {
      id: 4,
      title: "24/7 Hour onine supports.",
      icon: "flaticon-next"
    }
  ],
  sanPhams: [
    {
      id: 1,
      icon: "flaticon-flask",
      image: rauCuQua,
      title: "Rau, Củ, Quả",
      description:
        "Cung cấp rau củ quả nhà vườn chính gốc, giá sỉ, đảm bảo chất lượng. " +
        "Cam kết mang đến chất lượng tốt nhất cho khách hàng."
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      image: thit,
      title: "Thịt",
      description:
        "Cung cấp nhiều loại thực phẩm thịt heo và một số sản phẩm khác như, " +
        "thịt bò, thịt gà…. Hàng trong nước và hàng nhập khẩu."
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      image: ca,
      title: "Thủy hải sản",
      description:
        "Các loại hải sản tươi sống chất lượng đảm bảo tươi sống, an toàn, uy tín. " +
        "Với lợi thế hợp đồng với các nhà cung cấp lấy tại cảng hải sản."
    },
    {
      id: 4,
      icon: "flaticon-startup",
      image: trung,
      title: "Trứng gia cầm",
      description:
        "Cung cấp Trứng Gia Cầm các loại như Trứng gà tươi, " +
        "Trứng vịt tươi, Trứng cút tươi, Trứng vịt lộn, Trứng vịt muối, Trứng vịt Bắc Thảo"
    },
    {
      id: 5,
      icon: "flaticon-briefing",
      image: gao,
      title: "Gạo, Gia vị, Thực phẩm chay",
      description:
        "Cung cấp đầy đủ các loại gạo, giá sỉ tốt nhất cạnh tranh nhất TPHCM. " +
        "Giao hàng nhanh và xuất hóa đơn theo yêu cầu khách hàng, " +
        "phục vụ chuyên nghiệp, lịch sự."
    },
    {
      id: 6,
      icon: "flaticon-creative",
      image: doUong,
      title: "Nước đóng chai không cồn",
      description:
        "Cung cấp đồ uống không cồn có thể là các loại nước giải khát đóng chai " +
        " như: nước uống có ga, nước khoáng, nước trái cây, syrup, nước giải khát..."
    }
  ],
  qualityFeature: [
    {
      id: 1,
      icon: "flaticon-flask",
      title: "Search Optimization",
      description:
        "By using Search Engine Optimization, You will get more Clients."
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Wireframing Task",
      description:
        "We respect our customer opinions and deals with them with perfect wireframing."
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Ui/Ux Design",
      description:
        "We provide the best UI/UX Design by following the latest trends of the market ."
    },
    {
      id: 4,
      icon: "flaticon-briefing",
      title: "Content Writting",
      description:
        "Proper Content Management is important to find out the real clients for your agencies ."
    }
  ],
  social_profile: [
    {
      id: 1,
      icon: "flaticon-facebook-logo",
      link: "#1"
    },
    {
      id: 2,
      icon: "flaticon-twitter-logo-silhouette",
      link: "#2"
    },
    {
      id: 3,
      icon: "flaticon-instagram",
      link: "#3"
    },
    {
      id: 4,
      icon: "flaticon-tumblr-logo",
      link: "#4"
    },
    {
      id: 5,
      icon: "flaticon-dribble-logo",
      link: "#5"
    }
  ]
};

export const BANNER = {
  heading: {
    id: "heading",
    subTitle: "Uy Tín, Chất Lượng, Vì Khách Hàng",
    subTitle2: "là tiêu chí hàng đầu của công ty",
    title: "Công Ty Thực Phẩm Osac Food",
    description: "Chuyên cung cấp thực phẩm chất lượng gồm: " +
      "rau, củ, quả tươi sống nhà vườn có tiêu chuẩn VietGap, " +
      "thịt bò, gà, heo, trứng gia cầm các loại 100% có giấy kiểm dịch, " +
      "các loại hải sản tươi sống như cá, tôm, cua. " +
      "Thực  phẩm tại Osac Food luôn luôn có nguồn gốc xuất sứ rõ ràng. " +
      "Các mặt hàng thực phẩm được thu mua trực tiếp tại các vùng như: " +
      "miền Tây, miền Trung, đồng bằng sông Cửu Long. " +
      "Một số mặt hàng khác được nhập khẩu trực tiếp từ nước ngoài như: Hàn Quốc, Nhật, Hoa Kỳ, Nauy, CanaDa, …",
    phoneNumber: "0901474048"
  }
};

export const SANPHAM_INFO = {
  id: "sanPhamInfo",
  title: "Thông Tin Sản Phẩm",
  description: "Cam kết chất lượng, chất lượng, giá cả hợp lý"
};

export const ABOUT_US = {
  title: "Công Ty Osac Food",
  subTitle: "Tầm Nhìn, Sứ Mệnh, Giá Trị Cốt Lõi",
  suMenhs: [
    {
      id: 1,
      title: "Trở thành một Thương hiệu Việt mang tầm vóc quốc tế " +
        "trong lĩnh vực phát triển đa ngành lấy kinh thực phẩm làm tâm điểm, " +
        "thấu hiểu tâm trí và chiếm lĩnh sự tin yêu của khách hàng.",
      icon: "flaticon-next"
    },
    {
      id: 2,
      title: "Thỏa mãn tối đa nhu cầu của khách hàng",
      icon: "flaticon-next"
    },
    {
      id: 3,
      title: "Sáng tạo, Tiên tiến, Nhiệt huyết - đam mê, Đầy năng lượng, Dẫn đầu",
      icon: "flaticon-next"
    }
  ]
};

export const THANH_TUUS = {
  title: {
    content: "Công Suất Phục Vụ"
  },
  description: {
    content: "Hiện nay, công ty có diện tích xưởng sơ chế lên đến 1000m2 có thể " +
      "đáp ứng được hơn 4 tấn thực phẩm/ngày, các quy trình công nghệ và các " +
      "khâu thực hiện luôn được đảm bảo và kiểm tra kỹ lưỡng.Với quy mô hiện tại " +
      "công ty có thể đáp ứng yêu cầu của các địa điểm lớn như trường học, bệnh viện, " +
      "khu công nghiệp hay các hộ gia đình tập trung trên địa bàn Tp. HCM và các vùng phụ cận. " +
      "Các sản phẩm của công ty được sơ chế an toàn bao gồm cả thủy hải sản và các " +
      "loại thực phẩm tươi sống khác, đảm bảo độ tươi ngon nhất và trong thời gian qua " +
      "luôn làm hài lòng đối với những đối tác của mình. "
  }
};

/**
 * Chứng chỉ */
export const CERT_PAPERS = {
  title: "CHỨNG CHỈ, CHỨNG NHẬN",
  slogan: "Meet Our Perfectionist",
  chungChis: [
    {
      id: 1,
      avatar: haccp,
      name: "Chứng chỉ HACCP",
      designation: ""
    },
    {
      id: 2,
      avatar: iso,
      name: "Chứng chỉ ISO 22000",
      designation: ""
    },
    {
      id: 3,
      avatar: giayPhepDKKD,
      name: "Giấy chứng nhận ĐKDN",
      designation: ""
    },
    {
      id: 4,
      avatar: chungNhanIso,
      name: "Chứng nhận ISO 22000",
      designation: ""
    },
    {
      id: 5,
      avatar: thuan2,
      name: "Chứng nhận đào tạo",
      designation: ""
    }
  ]
};

/**
 * Nhận báo giá */
export const BAO_GIA = {
  title: {
    content: "Đăng Ký Nhận Báo Giá"
  }
};

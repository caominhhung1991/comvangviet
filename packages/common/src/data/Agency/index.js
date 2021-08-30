import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';


import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';

import rauCuQua from 'common/src/assets/image/agency/food.png'
import thit from 'common/src/assets/image/agency/beef.png'
import ca from 'common/src/assets/image/agency/fish.png'
import trung from 'common/src/assets/image/agency/egg.png'
import gao from 'common/src/assets/image/agency/rice.png'
import doUong from 'common/src/assets/image/agency/wine.png'

import bapCai from 'common/src/assets/image/agency/sanphams/bap-cai.jpg'
import caChua from 'common/src/assets/image/agency/sanphams/ca-chua.jpg'
import dauBap from 'common/src/assets/image/agency/sanphams/dau-bap.jpg'

const data = {
  menuItems: [
    {
      label: 'Sản Phẩm',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Về Công Ty',
      path: '#AboutUsSection',
      offset: '67',
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '67',
    },
    {
      label: 'Quality feature',
      path: '#qualitySection',
      offset: '67',
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'Team Member',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      image: rauCuQua,
      title: 'Rau, Củ, Quả',
      description:
        'Cung cấp rau củ quả nhà vườn chính gốc, giá sỉ, đảm bảo chất lượng. ' +
        'Cam kết mang đến chất lượng tốt nhất cho khách hàng.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      image: thit,
      title: 'Thịt',
      description:
        'Cung cấp nhiều loại thực phẩm thịt heo và một số sản phẩm khác như, ' +
        'thịt bò, thịt gà…. Hàng trong nước và hàng nhập khẩu.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      image: ca,
      title: 'Tôm, Mực, Cá',
      description:
        'Các loại hải sản tươi sống chất lượng đảm bảo tươi sống, an toàn, uy tín. ' +
        'Với lợi thế hợp đồng với các nhà cung cấp lấy tại cảng hải sản.',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      image: trung,
      title: 'Trứng',
      description:
        'Cung cấp Trứng Gia Cầm các loại như Trứng gà tươi, ' +
        'Trứng vịt tươi, Trứng cút tươi, Trứng vịt lộn, Trứng vịt muối, Trứng vịt Bắc Thảo',
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      image: gao,
      title: 'Gạo, Gia vị',
      description:
        'Cung cấp đầy đủ các loại gạo, giá sỉ tốt nhất cạnh tranh nhất TPHCM. ' +
        'Giao hàng nhanh và xuất hóa đơn theo yêu cầu khách hàng, ' +
        'phục vụ chuyên nghiệp, lịch sự.',
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      image: doUong,
      title: 'Nước đóng chai không cồn',
      description:
        'Cung cấp đồ uống không cồn có thể là các loại nước giải khát đóng chai ' +
        ' như: nước uống có ga, nước khoáng, nước trái cây, syrup, nước giải khát...',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Content Writting',
      description:
        'Proper Content Management is important to find out the real clients for your agencies .',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior Ui/UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Jon Doe',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Jone Doe',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    // {
    //   id: 1,
    //   title: 'Thông Tin',
    //   menuItems: [
    //     {
    //       id: 1,
    //       url: '#1',
    //       text: 'Support Center',
    //     },
    //     {
    //       id: 2,
    //       url: '#2',
    //       text: 'Customer Support',
    //     },
    //     {
    //       id: 3,
    //       url: '#3',
    //       text: 'About Us',
    //     },
    //     {
    //       id: 4,
    //       url: '#4',
    //       text: 'Copyright',
    //     },
    //     {
    //       id: 5,
    //       url: '#5',
    //       text: 'Popular Campaign',
    //     },
    //   ],
    // },
    {
      id: 2,
      title: 'Sản Phẩm',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Rau, Củ, Quả',
        },
        {
          id: 2,
          url: '#2',
          text: 'Thịt',
        },
        {
          id: 3,
          url: '#3',
          text: 'Cá',
        },
        {
          id: 4,
          url: '#4',
          text: 'Trứng',
        },
        {
          id: 5,
          url: '#5',
          text: 'Gạo, Gia vị',
        },
        {
          id: 6,
          url: '#6',
          text: 'Nước đóng chai',
        },
      ],
    },
    {
      id: 3,
      title: 'Networks',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Facebook',
        },
        {
          id: 2,
          url: '#2',
          text: 'Youtube',
        },
        {
          id: 3,
          url: '#3',
          text: 'Instagram',
        },
      ],
    },
    {
      id: 4,
      title: 'Địa Chỉ',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: '38 Võ Văn Hát, Long Trường, Quận 9, Tp. HCM',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};

export default data;

import React from "react";
import './rest.css'
import './App.css';
import './font/font.css'
import {useMediaQuery} from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft } from "@fortawesome/free-regular-svg-icons";
export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:880px)"
  });
  
  return <>{isMobile && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:880px)"
    
  });
  
  return <>{isPc && children}</>
}

function App() {
  
  return (
    <>
    <PC>
    <section id="wrap">
     
      <div className='banner_img'>
      <div className='container'>
      <section className='header'>
        <div className='menu_nav'>
          <div className='logo'></div>
          <div className='menu_item'>
            <ul className='menu_drop'>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Portfolio</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='main_banner'>
        <div className='main_banner_left'>
        {/*   <img className='img_banner' src="img/main.png"/> */}
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox'>
            <p className='h1_title'>해와 달처럼<br></br> 조화로운 코드를 구현하는<br/> 프론트엔드 정선문 입니다<p/> </p>
            <div className="main_button_box">
            <a href='https://github.com/jungsm?tab=repositories'><button>Git Hub</button></a>
            </div>
        </div>
        </div>  
    </section>
    </div >
    <img src='img/img.png'className='shape01' ></img>
    <img src='img/banner_shape02.png'className='shape02'  ></img>
    <img src='img/banner_shape03.png'className='shape03' ></img>
    <img src='img/banner_shape05.png'className='shape05' ></img>
    <img src='img/banner_shape06.png'className='shape06' ></img>
    <img src='img/banner_shape07.png'className='shape07' ></img>
    <img src="img/sun.png" className="sunimg"></img>
    </div>
    <section className="about container">
      <ul className="about_items">
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon1">
            <img className="about_img" src="img/services_icon02.png"></img>
          </div>
          <div className="item_box"></div>
          <div className="h2_title">프로필</div>
          <div className="text_box">
          <p className="kr_text">이름 :정선문</p>
          <p className="kr_text">생년월일: 2001.07.14</p>
          <p className="kr_text">거주지: 경기도 남양주시 다산동 </p>
          <p className="kr_text">이메일: wjdtjsans0714@naver.com </p>
          <p className="kr_text">전화번호: 010-9378-7268 </p>
          </div>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon2">
            <img className="about_img" src="img/services_icon03.png"></img>
          </div>
          <div className="h2_title">교육수료</div>
          <p className="kr_text">2020.03월~2023.02월</p>
          <p className="kr_text">경남도립거창대학교 컴퓨터공학 2년제 졸업</p>
          <p className="kr_text">2022.11월~2023.05월</p>
          <p className="kr_text">프로젝트 기반 프론트엔드(React&Vue) 웹&앱 SW개발자 양성과정</p>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon3">
            <img className="about_img" src="img/services_icon01.png"></img>
          </div>
          <div className="h2_title">자격증</div>
          <p className="kr_text">운전면허증 2종 자동</p>
          <p className="kr_text">취득일: 2020.02.14</p>
          </div>
        </li>
      </ul>
    </section>
    <section className="project margin_top">
      <div className="container">
      <div className="project_box">
        <div className="project_text_box">
          <div className="project_text">
            <span className="h3_text">프로젝트</span>
          <span className="h1_text">이미지를 클릭 시 해당 프로젝트의 상세정보를<br/> 확인하실 수 있습니다.</span> <br/>
          <span className="h4_text">HTML,CSS,SCSS,JavaScript,JQuery<br/>React,React Native로 작업한 프로젝트 입니다.</span>
          <ul className="arrow_box">
          <li><img src="img/arrow2.png"></img></li>
          <li> <img src="img/arrow11.png"></img></li>
          </ul>
          </div>
        </div>
          <ul className="project_items">
            <li className="project_item">
              <img src="img/prt1.png"></img>
            </li>
            <li className="project_item">
            <img src="img/prt2.png"></img>
            </li>
            <li className="project_item">
              <img src="img/prt3.png"></img>
            </li>
            <li className="project_item">4</li>
          </ul>
        </div>
        </div>
        <div>
        <img src='img/banner_shape09.png' className='shape09'></img>
        <img src='img/banner_shape08.png' className='shape08'></img>
        <img src='img/moon.png' className='moon'></img>
        </div>
    </section>
    </section>
    </PC>












    <Mobile>
    <div className='banner_img'>
      <div className='container'>
      <section className='header'>
        <div className='menu_nav'>
          <div className='logo'></div>
          <div className='menu_item'>
            <ul className='menu_drop'>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Portfolio</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='main_banner_mo'>
        <div className='main_banner_left'>
          <img className='img_banner' src="img/main.png"/> *
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox_mo'>
            <p className='h1_title'>해와 1달처럼<br></br> 조화로운 코드를<p/> </p>
            <div className="main_button_box">
            <a href='https://mango2.notion.site/008cc17e31554d1cbf85c6c993dcd561'><button>Notion</button></a>
            <a href='https://github.com/jungsm?tab=repositories'><button>Git Hub</button></a>
            </div>
        </div>
        </div>  
    </section>
    </div >
    <img src='img/img.png'className='shape01' ></img>
    <img src='img/banner_shape02.png'className='shape02'  ></img>
    <img src='img/banner_shape03.png'className='shape03' ></img>
    <img src='img/banner_shape05.png'className='shape05' ></img>
    <img src='img/banner_shape06.png'className='shape06' ></img>
    <img src='img/banner_shape07.png'className='shape07' ></img>
    <img src="img/sun.png" className="sunimg"></img>
    </div>
    <section className="about container">
      <ul className="about_items">
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
        </ul>
        <ul className="about_items">
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
      </ul>
    </section> 
    </Mobile>
    
    </>
  );
}
export default App;

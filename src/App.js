import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";

import SearchImg from "./img/Login1.png";
import LoginImg from "./img/Login2.png";
import URLImg from "./img/Search1.png";
import reactImg from "./img/Search3.png";
import welcome from "./img/Search2.png"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "Naver Open API", sub: "네이버 오픈 API를 이용해 창의적인 애플리케이션을 제작해 보세요." },
      welcome: { title: "환영합니다", desc: "Naver Open API 를 쉽게 알아보세요", image: welcome },
      contents: [
        { id: 1, 
          title: "검색", 
          desc: "검색 API는 비로그인 방식 오픈 API입니다. \n 비로그인 방식 오픈 API는 네이버 오픈API를 호출할 때 HTTP 요청 헤더에 클라이언트 아이디와 클라이언트  시크릿 값만 전송해 사용할 수 있는 오픈 API입니다. \n클라이언트 아이디와 클라이언트 시크릿은 네이버 오픈API에서 인증된 사용자인지 확인하는 수단입니다. \n네이버 개발자 센터에서 애플리케이션을 등록하면 클라이언트 아이디와 클라이언트 시크릿이 발급됩니다.\n\n", 
          image: SearchImg },

        { id: 2, 
          title: "네이버 로그인", 
          desc: "별도의 아이디, 비밀번호없이 네이버 아이디로 간편하게 외부 서비스에 로그인 할 수 있도록 하는 서비스입니다. \n이용자는 복잡하고 번거로운 회원 가입 절차 없이 편하게 서비스를 이용하고, 사업자는 회원 가입, 로그인에 대한 허들을 낮춰 회원수가 늘고 매출은 오르는 경험을 할 수 있습니다.\n\n 네이버 회원이라면, 여러분의 사이트를 간편하게 이용할 수 있습니다.\n 전 국민 모두가 가지고 있는 네이버 아이디 한개만 있으면 별도 가입없이 어떤 플랫폼에서도 간편하게 로그인할 수 있습니다.", 
          image: LoginImg },

        { id: 3, 
          title: "단축 URL", 
          desc: "단축 URL API는 원본 URL을 https://me2.do/example과 같은 형태의 짧은 URL로 반환하는 RESTful API입니다.\n 네이버가 서비스하는 QR코드 이미지도 함께 생성됩니다.\n https://me2.do/example.qr과 같이 반환받은 단축 URL의 끝에 .qr을 붙이면 QR코드 이미지 주소를 확인할 수 있습니다.\n단축 URL API의 하루 API 호출 한도는 25,000회입니다.", 
          image: URLImg },

        { id: 4, title: "파파고 번역", desc: "Papago 번역은 Papago의 인공 신경망 기반 기계 번역 기술(NMT, Neural Machine Translation)로 텍스트를 번역한 결과를 반환하는 RESTful API입니다.\n Papago 번역으로 한 번에 번역할 수 있는 분량은 최대 5,000자이며, 하루 번역 처리 한도는 10,000자입니다. \n\n Papago 번역을 사용하려면 먼저 네이버 개발자 센터에서 애플리케이션을 등록하고 클라이언트 아이디와 클라이언트 시크릿을 발급받아야 합니다.\n클라이언트 아이디와 클라이언트 시크릿은 인증된 사용자인지를 확인하는 수단이며, 애플리케이션이 등록되면 발급됩니다. \n클라이언트 아이디와 클라이언트 시크릿을 네이버 오픈API를 호출할 때 HTTP 헤더에 포함해서 전송해야 API를 호출할 수 있습니다. \nAPI 사용량은 클라이언트 아이디별로 합산됩니다.", image: reactImg },
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <div class = "hdr" >
          <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
          ></Subject>
        </div>
        <div>
          <div class = 'toc'>
            <TOC
            data={this.state.contents}
            onChangePage={function (id) {
              this.setState({ mode: "read", selected_content_id: Number(id) });
            }.bind(this)}
            ></TOC>
          </div>
          <div class='cnt'>
            <Content title={_title} desc={_desc} img={_image}></Content>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
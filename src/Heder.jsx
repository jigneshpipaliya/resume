import React from 'react'
import { IoIosMail } from "react-icons/io";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiCreatereactapp } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";


function Heder() {
  return (
    <div>
      <div className=' container'>
        <div className='header'>
          <h2 className=' text-white'>Jignesh pipaliya</h2>
          <p className='mark1'>Front-End Developer - React.js </p>
          <p className='mark2 text-white'>A highly motivated and skilled graduate looking for an entry-level position as a software engineer. Solid knowledge in writing well
            designed and testable code. I am well verses with front-end library like react. <br />
            Moreover, I have to make application responsive for different devices. I am currently looking for the opportunity for front- end
            development. </p>
        </div>
        <div className='mark3 row '>
          <div className=' col-6'>
            <p className=' text-white '><IoIosMail className='mark4' />   Jigneshpipaliya47@gmail.com</p>
            <p className=' text-white '><IoLocation className='mark4' />   Katargam,Surat</p>
            <p className=' text-white '><FaLinkedin className='mark4' />  <a href="https://www.linkedin.com/in/jignesh-pipaliya-32963117b/" className='mark5'> inkedin.com/in/jignesh-pipaliya-32963117b </a></p>
          </div>
          <div className=' col-6 '>
            <p className=' text-white '><TbDeviceMobileFilled className='mark4' />   8460390060</p>
            <p className=' text-white '><SiCreatereactapp className='mark4' /> <a href="https://demosite-wheat.vercel.app/" className='mark5'>  demosite-wheat.vercel.app/ </a></p>
            <p className=' text-white '><FaGithub className='mark4' /> <a href="https://github.com/jigneshpipaliya" className='mark5'> github.com/jigneshpipaliya </a> </p>
          </div>
        </div>
        <div className='mark6 row'>
          <div className='col-6 mb-5'>
            <h4 >EDUCATION</h4>
            <div>
              <p className=' mt-4 fw-bold fs-4 mb-0 '>React.js Course</p>
              <p className='fs-4 mb-0'>Creative Design & Multimedia institute</p>
              <p className='mark7'>02/2023- 11/2023.</p>
            </div>
            <div>
              <p className=' mt-4 fw-bold fs-4 mb-0 '>Bachelor's of Computer Application</p>
              <p className='fs-4 mb-0'>VNSGU University</p>
              <p className='mark7'>06/2012 - 03/2015.</p>
            </div>
            <div>
              <p className=' mt-4 fw-bold fs-4 mb-0 '>Higher Secondary Education </p>
              <p className='fs-4 mb-0'>Akhand anand school </p>
              <p className='mark7'>06/2011- 03/2012.</p>
            </div>
            <h4 >CERTIFICATES</h4>
            <div>
              <p className='fs-5 fw-bold'>Bachelor's of Computer Application (06/2012 - 03/2015)</p>
              <p >Completed the BCA graduation from Sutex bank collage with 2nd class. As part of course we have developed multiple UI application.</p>
            </div>
            <div>
              <p className='fs-5 fw-bold'>Front-End Developer- React.js(02/2023 - 11/2023)</p>
              <p >Completed the Full Stack Development course from creative institute with distinction. As part of course we have developed multiple UI application. </p>
            </div>
            <h4 >PROJECT</h4>
            <div>
              <p className='fs-5 fw-bold mb-0'>Auto Garage Project</p>
              <p className='mark7 ms-5'> 10/2023- 11/2023.</p>
              <p >
                Auto Garage project is a customer direct connection with service
                provider .customer show each garage service charge and and garage
                distant.Customer send service request to auto garage service provider.
                <br />
                Service provider show customer request and customer and service
                provider easily communicate. Service provider is add other service and
                update all service charge.  </p>
            </div>
            <h4 >INTERESTS </h4>
            <div>
              <button className='btn btn-outline-dark disabled '>Reading Book</button>
              <button className='btn btn-outline-dark disabled ms-4'>Learning</button>
              <button className='btn btn-outline-dark disabled ms-4'>Traveling</button>
            </div>
          </div>
          <div className='col-6'>
            <div className=' ms-5'>
          <h4 >SKILLS </h4>
          <div>
          <button className='btn btn-secondary btn-lg disabled mb-2'>HTML5</button><br />
          <button className='btn btn-secondary btn-lg disabled mb-2'>React</button>
          <button className='btn btn-secondary btn-lg disabled mb-2 ms-2'>ECMASCRIPT</button><br />
          <button className='btn btn-secondary btn-lg disabled mb-2'>Boostrap</button>
          <button className='btn btn-secondary btn-lg disabled mb-2 ms-2'>CSS</button><br />
          <button className='btn btn-secondary btn-lg disabled mb-2 '>Tailwind</button>
          <button className='btn btn-secondary btn-lg disabled mb-2 ms-2'>Material UI </button><br />
          <button className='btn btn-secondary btn-lg disabled mb-2'>JAVASCRIPT</button>
          </div>
          <h4 className='mt-5'>LANGUAGES </h4>
            <div>
              <p className=" fw-bold mb-0">Hindi  <FaCircle className='mark8 ms-5'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/> </p>
              <p>Native</p>
            </div>
            <div>
              <p className=" fw-bold mb-0  ">Gujarati &nbsp;<FaCircle className='mark8 ms-4'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/> </p>
              <p>Native</p> 
              <div>
              <p className=" fw-bold mb-0  ">English  &nbsp; &nbsp;<FaCircle className='mark8 ms-4'/><FaCircle className='mark8 ms-1'/><FaCircle className='mark8 ms-1'/><FaCircle className=' ms-1'/><FaCircle className=' ms-1'/> </p>
              <p>Native</p>
            </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>

    </div>
  )
}

export default Heder

import React from 'react';
import '../Project1/Project1.css';
import swaggerDoc from '../../../assets/projects/Project5/img1.png';
import adminAccount from '../../../assets/projects/Project5/img2.png';
import addProduct from '../../../assets/projects/Project5/img3.png';
import deleteProduct from '../../../assets/projects/Project5/img4.png';
import loginPage from '../../../assets/projects/Project5/img5.png';
import userAccount from '../../../assets/projects/Project5/img6.png';
import refreshToken from '../../../assets/projects/Project5/img7.png';
import ModalImage from 'react-modal-image';
import { MdOutlineArrowBack } from 'react-icons/md';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useRef } from 'react';

const Project5 = () => {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo(0, -document.body.scrollHeight);
    }
  }, []);


  return (
    <section className='project container section' id='project5' ref={elementRef}>
      <h1 className='section__title'>Web Application made with React and Flask</h1>
      <h2 className='project__subtitle'>React Frontend and Flask REST API Backend</h2>
      <p className='project__description'>The App leans toward a more complex and real data driven web app. Now the data is not hard-coded, but fetched from the backend that communicates with an PostgreSQL database. </p>
      <h2 className='project__subtitle'>Features</h2>
      <div className="item__containers">
        <div className="item__container first"></div>
        <div className="item__container second">
          <h2>Authentication</h2>
          <ul>
            <li>Register and login pages</li>
            <li>Storing hashed passwords with bcrypt in the database</li>
            <li>JWT Authentication</li>
          </ul>
          <ModalImage
            small={loginPage}
            medium={loginPage}
            alt="Register page"
            className='project__image'
          />
        </div>
        <div className="item__container third">
          <h2>User account</h2>
          <ul>
            <li>On the user account, the products are only displayed</li>
            <li>The only CRUD operation available for a normal account is GET</li>
          </ul>
          <ModalImage
            small={userAccount}
            medium={userAccount}
            alt="Student page"
            className='project__image'
          />
        </div>
        <div className="item__container fourth">
          <h2>Admin account</h2>
          <ul>
            <li>The admin/super-user account extends the interface with additional features</li>
            <li><i>Add products button</i> that opens up a modal and new products can be added on the menu</li>
            <li><i>Edit Button</i>, a particular product/fileds can be updated, such as price</li>
            <li><i>Delete button</i>, products can be deleted from the menu</li>
          </ul>
          <ModalImage
            small={adminAccount}
            large={adminAccount}
            alt="Admin page"
            className='project__image'
          />
        </div>
        <div className="item__container fifth">
          <h2>Add product</h2>
          <ul>
            <li>The add product modal</li>
          </ul>
          <ModalImage
            small={addProduct}
            large={addProduct}
            alt="Add product modal"
            className='project__image'
          />
        </div>
        <div className="item__container sixth">
          <h2>Delete product</h2>
          <h3>(only the admin id authorized)</h3>
          <ul>
            <li>When an admin/super-user account attempts deletion, an alert modal is triggered to make sure that the action is not done by mistake </li>
            <li>If the account doesen't have permission, is only a super-user, the modal will prompt the message "Not authorized!"</li>
          </ul>
          <ModalImage
            small={deleteProduct}
            large={deleteProduct}
            alt="Delete product modal"
            className='project__image'
          />
        </div>
        <div className="item__container seventh">
          <h2>JWT Refresh Token</h2>
          <ul>
            <li>JSON Web Token are an industry established way to grant roles and permissions to users</li>
            <li>Access and Refresh Tokens are created when a user logins</li>
            <li>Refresh Tokens are kept in the cookie storage for longer, whereas Access Tokens have a short duration</li>
            <li>Every protected route in the backend verifies if the request has the authorization by decoding his Access Token to verify the role</li>
            <li>If there is no valid Access Token, but there is a Refresh Token, then a new Access Token will be issued for the user </li>
            <li>This prevents forcing the user to login again after a longer session</li>
          </ul>
          <ModalImage
            small={refreshToken}
            large={refreshToken}
            alt="Files page"
            className='project__image'
          />
        </div>
        <div className="item__container eight">
          <h2>Swagger Documentation</h2>
          <ul>
            <li>Swagger is a way to describe the internal structure of the API</li>
            <li>It helps developers to see and test the available endpoints that exist in the current application</li>
          </ul>
          <ModalImage
            small={swaggerDoc}
            large={swaggerDoc}
            alt="Files page"
            className='project__image'
          />
        </div>
        <Link smooth to='/#projects' scroll={scrollWithOffset}>
          <button className='project1__button'>
            <MdOutlineArrowBack size={30} />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Project5

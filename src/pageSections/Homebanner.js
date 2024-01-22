import React, {useState, useEffect} from 'react';
// import Assets from './assets/Assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Sider from './assets/Sider';
import AllProperties from './AllProperties';
import { type } from '@testing-library/user-event/dist/type';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Cards from './assets/Cards';



function Homebanner() {
  const [active, setActive] = useState('active');
  const [deActive, setDeActive] = useState('active')
  const [searchActive, setSearchActive] = useState('active');
  function hide(e) {
    e.preventDefault();
    if (active === 'active' || deActive === true) {
      setActive('buyRentInfo');
      setDeActive('active')
    } else {
      setActive('active');
      setDeActive('active')
    }
  }
  function hide1(e){
    e.preventDefault()
    if (deActive === 'active' || active === true) {
      setDeActive('buyRentInfo');
      setActive('active');
    } else {
      setDeActive('active');
      setActive('active');
    }
  }
  function searcher(e){
    e.preventDefault()
    if(searchActive ==='active'){
      setSearchActive('allProperties')
    }else{
      setSearchActive('active')
    }
  }
  function closeBtn(e){
    e.preventDefault()
    if(searchActive==='allProperties'){
      setSearchActive('active')
    }
  }
  // data from the select tage to form the search key 
  const [formData, setFormData] = useState({
    Location:'',
    type:'',
    piceRange:'',
  })
  const handleSelectChange = (event) =>{
    const{name,Value} = event.target;

    // updating the corresponding key in formData state 
    setFormData((prevData) => ({...prevData,[name]:Value}))
    alert(formData)
  };
  // event handler for submission 
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData);
  }
  return (
    <div className='homebanner'>
      <div className='homebannerM'>
        <div className='mobileSearchbar'>
          <input type='text' className='m-srchbar' placeholder='Search' />
          <FaSearch />
        </div>
        <div className='popularSec'>
          <div className='caption'>
            <div className='title'>
              <h3>Most Popular</h3>
            </div>
            <div className='seeAll'>
              <h5>See All</h5>
            </div>
          </div>
          <div className='popularDisplay'>
            <div className='mobileGrid'>
              <div className='cardM'>
                <img src='/duplex1.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
              <div className='cardM'>
                <img src='/city1.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
              <div className='cardM'>
                <img src='/city2.jpeg' alt='' />
                <div className='cardMDescp'>
                  <FaLocationDot className='moble-icons' />
                  <p>Five bedroom duplex Lugbe, abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='categoryButton'>
          <button className='mobile-button'>Houses</button>
          <button className='mobile-button'>Land</button>
          <button className='mobile-button'>Duplex</button>
          <button className='mobile-button'>Flat</button>
        </div>

        <div className='justForYou'>
          <div className='caption'>
            <div className='title'>
              <h3>Just For You</h3>
            </div>
            <div className='seeAll'>
              <h5>See All</h5>
            </div>
          </div>
          <div className='forU'>
            <div className='cardM'>
              <img src='/duplex1.jpeg' alt='' />
              <div className='cardMDescp'>
                <FaLocationDot className='moble-icons' />
                <p>Five bedroom duplex Lugbe, abuja</p>
              </div>
            </div>
            <div className='cardM'>
              <img src='/city1.jpeg' alt='' />
              <div className='cardMDescp'>
                <FaLocationDot className='moble-icons' />
                <p>Five bedroom duplex Lugbe, abuja</p>
              </div>
            </div>
            <div className='cardM'>
              <img src='/city2.jpeg' alt='' />
              <div className='cardMDescp'>
                <FaLocationDot className='moble-icons' />
                <p>Five bedroom duplex Lugbe, abuja</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Sider
          firstImage='duplex2.avif'
          secImage='flat6.avif'
          thirdImage='flat7.jpeg'
        /> */}
      </div>
      <div className='desktopDetails'>
        <div className='homebannerImage'>
          <Sider
            firstImage='duplex2.avif'
            secImage='flat6.avif'
            thirdImage='flat7.jpeg'
          />
          {/* <img src='duplex4.png' alt='' className='homebannerImage' /> */}
        </div>
        <div>
          <button className='button'>Real Estate</button>

          <div className='headers'>
            <h1>
              Let's hunt for your <br /> dream residence
            </h1>
          </div>
          <p className='quote'>
            Explore our range of beautiful properties with addition of <br />{' '}
            separate accomodation suitable for you.
          </p>
          <div className='buyRent'>
            <button
              onClick={(e) => hide(e)}
              style={{ borderRight: '1px solid black' }}
            >
              Buy
            </button>
            <button onClick={(e) => hide1(e)}>Rent</button>
          </div>
          <form action='' on onSubmit={handleSubmit}>
            <div className={active}>
              <div className='location'>
                <p>Location</p>
                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='white'
                >
                  <Dropdown.Item href='#/action-1'>Dunamis Area3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>Kuje, Abuja </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-3'>Lugbe, Abuja </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='type'>
                <p>Type</p>
                <Dropdown
                  name='Location'
                  value={formData.Location}
                  onChange={handleSelectChange}
                >
                  <DropdownButton
                    id='dropdown-button-dark-example2'
                    variant='secondary'
                    title='select'
                    className='mt-2'
                    data-bs-theme='light'
                    value={formData.Location}
                    onChange={handleSelectChange}
                  >
                    <Dropdown.Item href='#/action-1'>Duplex</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href='#/action-2'>Flat</Dropdown.Item>
                  </DropdownButton>
                </Dropdown>
              </div>
              <div className='price'>
                <p>Price Range</p>

                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='light'
                >
                  <Dropdown.Item href='#/action-1'>$100 - $200</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>$350 - $500</Dropdown.Item>
                </DropdownButton>
              </div>
              <button
                className='buyRentSearchBtn'
                type='submit'
                onClick={(e) => searcher(e)}
              >
                Search
              </button>
            </div>
            <div className={deActive}>
              <div className='location'>
                <p>Location</p>
                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='white'
                >
                  <Dropdown.Item href='#/action-1'>Dunamis Area1</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>Kuje, Abuja </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-3'>Lugbe, Abuja </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='type'>
                <p>Type</p>
                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='light'
                >
                  <Dropdown.Item href='#/action-1'>Duplex</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>Flat</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='price'>
                <p>Price Range</p>

                <DropdownButton
                  id='dropdown-button-dark-example2'
                  variant='secondary'
                  title='select'
                  className='mt-2'
                  data-bs-theme='light'
                >
                  <Dropdown.Item href='#/action-1'>$100 - $200</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href='#/action-2'>$350 - $500</Dropdown.Item>
                </DropdownButton>
              </div>
              <button className='buyRentSearchBtn' onClick={(e) => searcher(e)}>
                Search
              </button>
            </div>
          </form>
        </div>
        <div className={searchActive}>
          <div>
            <div className='closebtn' onClick={(e) => closeBtn(e)}>
              X
            </div>
            <div className='gridHolder'>
              <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div>
              <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div>
              <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div>
              <div className='gridCrads'>
                <img src='duplex1.jpeg' alt='' className='gridImg' />
                <h5>A Duplex</h5>
                <span> An eight bedroom duplex</span>
                <div className='priceTag'>
                  <div className='cashP'>$120.00</div>
                  <div className='cashD'>
                    <button className='button'>Promo</button>
                  </div>
                </div>
                <div className='cardbtn'>Buy Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner
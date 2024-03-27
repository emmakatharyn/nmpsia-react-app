import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className='promo-banner'>
        <Link to='/mobile-app'>Get the NMPSIA Mobile App! 📱</Link>
      </div>

      <section className='hero'>
        <div className='container d-flex flex-column justify-content-start'>
          <h1 className='display-4 mb-5 pt-3 mt-1'>
            Welcome to the New Mexico Public Schools Insurance Authority
          </h1>
          <div className='hero-btn-container container d-flex flex-wrap'>
            <Link to='/news' className='btn btn-primary'>
              Happening Now
            </Link>
            <Link to='/program-guide' className='btn btn-primary'>
              2023 Program Guide
            </Link>
            <Link to='/plan-comparison' className='btn btn-primary'>
              Compare Medical Plans
            </Link>

            <Link to='/employee-notifications' className='btn btn-primary'>
              📢 2024 Annual Employee Notifications
            </Link>
            <Link
              to='https://www.stopitsolutions.com/nmpsia'
              target='_blank'
              className='btn btn-primary'
              rel='noreferrer'
            >
              STOPit Anonymous Reporting System
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

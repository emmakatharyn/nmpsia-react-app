function Hero() {
  return (
    <>
      <div className='promo-banner'>
        <a href='NMPSIAMobile.html'>Get the NMPSIA Mobile App! 📱</a>
      </div>

      <section className='hero'>
        <div className='container d-flex flex-column justify-content-start'>
          <h1 className='display-4 mb-5 pt-3 mt-1'>
            Welcome to the New Mexico Public Schools Insurance Authority
          </h1>
          <div className='hero-btn-container container d-flex flex-wrap'>
            <a href='#happening' className='btn btn-primary'>
              Happening Now
            </a>
            <a href='programGuide.html' className='btn btn-primary'>
              2023 Program Guide
            </a>
            <a href='comparisonChart.html' className='btn btn-primary'>
              Compare Medical Plans
            </a>

            <a
              href='modal'
              data-bs-toggle='modal'
              data-bs-target='#employeeNotifications'
              className='btn btn-primary'
            >
              📢 2024 Annual Employee Notifications
            </a>
            <a
              href='https://www.stopitsolutions.com/nmpsia'
              target='_blank'
              className='btn btn-primary'
              rel='noreferrer'
            >
              STOPit Anonymous Reporting System
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

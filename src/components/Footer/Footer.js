function Footer() {
  return (
    <footer>
      <h3 className='py-4 text-center'>Contact Us</h3>
      <div className='d-flex justify-content-around mb-5'>
        <div className='contactBox'>
          <h6 className='mb-3'>For Carrier Appeals/Concerns:</h6>
          <p>New Mexico Public Schools Insurance Authority</p>
          <p>410 Old Taos Highway</p>
          <p>Santa Fe, NM 87501</p>
        </div>
        <div className='contactBox'>
          <h6 className='mb-3'>For Enrollment and Eligibility Concerns:</h6>
          <p>NMPSIA Eligibility Administrative Office</p>
          <p>Erisa Administrative Services, Inc.</p>
          <p>PO Box 9054,</p>
          <p>Santa Fe, NM 87504</p>
        </div>
      </div>
      <p className='text-center copyright'>
        &copy; 2024 Erisa Administrative Services, Inc.
      </p>
    </footer>
  );
}

export default Footer;

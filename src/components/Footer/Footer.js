function Footer() {
  return (
    <footer className='pt-4'>
      <h3 className='py-4 text-center'>Contact Us</h3>
      <div className='contact-footer-container container mb-5 mt-3'>
        <div className='contactBox'>
          <h6 className='mb-3'>For Carrier Appeals/Concerns:</h6>
          <p>New Mexico Public Schools Insurance Authority</p>
          <p>410 Old Taos Highway</p>
          <p>Santa Fe, NM 87501</p>
          <p>
            Phone: <a href='tel:18005483724'>1 (800) 548-3724</a> or{" "}
            <a href='tel:15059882736'>(505) 988-2736</a>
          </p>
          <p>Fax: (505) 983-8670</p>
        </div>
        <div className='contactBox'>
          <h6 className='mb-3'>For Enrollment and Eligibility Concerns:</h6>
          <p>NMPSIA Eligibility Administrative Office</p>
          <p>Erisa Administrative Services, Inc.</p>
          <p>PO Box 9054,</p>
          <p>Santa Fe, NM 87504</p>
          <p>
            Phone: <a href='tel:18002333164'>(800) 233-3164</a> or{" "}
            <a href='tel:15059884794'>(505) 988-4974</a>
          </p>
          <p>Fax:(505)988-8943</p>
          <p>
            E-mail: <a href='mailto:sf@easitpa.com'>sf@easitpa.com</a>
          </p>
        </div>
      </div>
      <p className='text-center copyright'>
        &copy; 2024 Erisa Administrative Services, Inc.
      </p>
    </footer>
  );
}

export default Footer;

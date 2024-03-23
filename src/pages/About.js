function About() {
  return (
    <div
      className='matchd-content about mb-5 px-5'
      style={{
        paddingTop: "36px",
        paddingBottom: "48px",
        backgroundColor: "#fff",
      }}
    >
      <div
        className='container d-flex justify-content-center pt-4'
        style={{ backgroundColor: "#f6f9ffe0" }}
      >
        <img
          id='nmpsiaLogo'
          src='https://nmpsia.com/images/nmpsia_logo_2024.png'
          alt='logo'
        />
      </div>
      <div
        className='container'
        style={{ backgroundColor: "#f6f9ffe0", padding: "24px" }}
      >
        <h1 className='mb-5 mt-4 text-center'> Goals and Directions</h1>
        <p>
          NMPSIA was created by the NM Legislature in 1986 to serve as a
          purchasing agency for public school districts, post-secondary
          educational entities and charter Schools. Through NMPSIA, member
          schools are afforded the opportunity to offer quality employee benefit
          and risk coverages.
        </p>
        <p>
          <a href='/pdfs/NMPSIA_Org_Chart_10302023.pdf' target='_blank'>
            <img
              src='https://nmpsia.com/images/NMPSIA_Org_Chart_transparent_10302023.png'
              alt='NMPSIA Organization Chart'
              className='org-chart'
              id='orgChartImg'
            />
          </a>
        </p>
        <p>
          NMPSIA is governed by an 11 member Board of Directors. The NMPSIA
          Rules and Regulations provide the framework for the NMPSIA's day to
          day operations.
        </p>
        <p>
          Because of the purchasing power of our large group, covering over
          30,000 educational employees and their families, we are able to
          negotiate better premiums and better benefits than an individual
          school district. Also due to our size, our claims are more predictable
          and thus premium changes are not as erratic as they would be on a
          smaller group.
        </p>
        <p>
          You and your employer share the cost for the medical, dental, vision,
          and disability plans. Your payroll deduction represents approximately
          one-third of the total cost to fund the plans.
        </p>
        <p>
          Our medical plans are self-insured. This means NMPSIA is responsible
          for the design of the plan and the setting of contributions. We set
          the contribution rates to provide the necessary revenue to pay for the
          claims we all incur. When our claims exceed the contributions, the
          contribution rates have to go up to cover any deficit. Less than 10%
          of your contribution goes towards the medical plan administration
          (claims payment, customer service, provider networking, ID cards,
          booklets). The balance pays for the cost of our medical care and claim
          reserves as recommended by NMPSIA's actuaries.
        </p>
        <p>
          NMPSIA currently provides benefit and risk coverage to all public
          school districts except Albuquerque Public Schools, all charter
          schools, and other educational entities. Not all participating
          employers provide all lines of coverage offered through the NMPSIA
          program.
        </p>
        <p className='mb-5'>
          Risk coverages include property insurance, liability insurance,
          workers'compensation, student catastrophic insurance, student accident
          insurance, boiler & machinery insurance, and underground storage tanks
          coverage.
        </p>
        <p className='text-center'>
          <a className='my-5' href='MRF.html' target='_blank'>
            Federal Transparency in Coverage Rule
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;

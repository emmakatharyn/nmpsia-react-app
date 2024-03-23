import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./HappeningNow.module.css";

import {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";

const newsData = [
  {
    date: "01",
    month: "Mar",
    category: "events",
    headline: "March 2024 Wellness Events Calendar",
    blurb: "See what's in store for this month's NMPSIA Wellness Programs!",
    link: "https://nmpsia.com/pdfs/2024-March-Wellness/Mar_2024_Event_Calendar.pdf",
  },
  {
    date: "01",
    month: "Mar",
    category: "webinars",
    headline: "Life on Mindfulness Meditation Program",
    blurb:
      "On demand, online platform that gives users a clear and dynamic roadmap toward a life of greater health, well-being, and a ...",
    link: "https://themindful-e-center.com/courses/0000009d-000b-4489-52b1-0000000000cc/checkout/price-MJ8nHpwhbTB2u3YvKmvz2A?",
  },
  {
    date: "01",
    month: "Mar",
    category: "wellness",
    headline: "The Solutions Group - 30 Days of Well-Being",
    blurb:
      "Rolling registration! Sign up at any time and receive 30 days of emails.",
    link: "https://solutionsbiz.us7.list-manage.com/subscribe?u=2329664a7d85671709714e0d4&id=e66ea99bf8",
  },
  {
    date: "01",
    month: "Mar",
    category: "wellness",
    headline: "Delta Dental March 2024 - Fillings 101",
    blurb:
      "Fillings are a restorative dental procedure used to repair decayed, chipped, or cracked teeth as well as prevent further damage. If you need ...",
    link: "https://nmpsia.com/pdfs/Fillings_101_DDNM.pdf",
  },
  {
    date: "01",
    month: "Mar",
    category: "webinars",
    headline: "STOPit Anonymous Reporting - Introduction Webinar",
    blurb:
      "The first recorded introductory webinar is still available! Learn more about STOPit Anonymous Reporting System, SEL, & Wellness Center, as ...",
    link: "https://vimeo.com/871243333?share=copy",
  },
  {
    date: "28",
    month: "Mar",
    category: "events",
    headline: "March Cooking Show - Noodle Delight",
    blurb:
      "Spring into an expansive pasta experience by unleashing the power of antioxidant-rich herbs. Spices and herbs...",
    link: "https://phs-org-corp.zoom.us/webinar/register/WN_nzbuswSpRK-_JuYHP01pog#/registration",
  },
  {
    date: "26",
    month: "Apr",
    category: "events",
    headline: "April 26 & 27 - NM Mission of Mercy Clinic",
    blurb:
      "NM Mission of Mercy is a two-day large-scale dental clinic where dental treatment is provided at no cost to individuals who cannot access and/or afford dental care.",
    link: "https://nmdentalassociationfoundation.org/adcf-patient.aspx",
  },
];

function HappeningNow() {
  const newsItems = newsData.map((item) => {
    // need to find a way to determine what category color will be used
    let catColor;
    if (item.category === "wellness") {
      catColor = "green";
    } else if (item.category === "webinars") {
      catColor = "purple";
    } else if (item.category === "events") {
      catColor = "turquoise";
    }
    return (
      <SwiperSlide>
        <div className={styles.dateCategoryBox}>
          <span className={styles.date}>{`${item.date} ${item.month}`}</span>
          <span className={`${styles.category} ${catColor}`}>
            {item.category}
          </span>
        </div>
        <h4 className='py-2'>{item.headline}</h4>
        <p className={styles.newsBlurb}>{item.blurb}</p>
        <button className={`${styles.newsLink} btn btn-outline-primary`}>
          Learn More
        </button>
      </SwiperSlide>
    );
  });

  return (
    <div className='happening'>
      <h1 className='sectionTitle display-1'>Happening Now</h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
          },
          968: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
        className={`mySwiper`}
        style={{ width: "90%" }}
      >
        {newsItems}
      </Swiper>
      <div className='happBtns my-5 d-flex justify-content-between'>
        <a
          href='procurements.html'
          id='procurementsLink'
          className='btn btn-outline-secondary'
        >
          Active Procurements
        </a>
        <a href='list.html' className='btn btn-outline-secondary'>
          Previous Announcements
        </a>
      </div>
    </div>
  );
}

// function HappeningNow() {
//   return (
//     <>
//       <div className={`${styles.happeningNow}`}>
//         <h1>Happening Now</h1>
//         <p>Upcoming events and important announcements</p>
//         <ul className={styles.newsList}>
//           <li className={`swiper-slide ${styles.newsItem} p-3`}>
//             <div className={styles.dateCategoryBox}>
//               <span className={styles.date}>28 Mar</span>
//               <span className={styles.category}>wellness</span>
//             </div>
//             <h4 className='py-2'>How are You Even Real Omg is this a trick</h4>
//             <p className={styles.newsBlurb}>
//               lorem ipsum dolor sit on that shit again and again and again and
//               again and build shit and go do shit build more shit fuck around
//               yeah
//             </p>
//             <button className={`${styles.newsLink} btn btn-outline-primary`}>
//               Learn More
//             </button>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

export default HappeningNow;

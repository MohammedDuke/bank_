import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImg}`}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2}`}>
          Easily controll your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-10">
          <img
            src={google}
            alt="google"
            className="w-[120px] h-[42px] object-contain cursor-pointer mr-5"
          />
          <img src={apple} alt="apple" />
        </div>
      </div>
    </section>
  );
};

export default Billing;

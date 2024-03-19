import { useState } from "react";
import PropTypes from "prop-types";
import { FutureOfAIData, careerData, futureAITabContentData } from "../../../utils/mock/mockData";
import ScrollAwareSection from "../../../components/ScrollAwareSection";
import FutureAITabContent from "../../../components/FutureAITabContent";
const SvgIconWrapper = ({ IconComponent }) => <IconComponent />;

const FutureOfAI = () => {
  const [activeTab, setActiveTab] = useState(futureAITabContentData[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <section id='features'>
      <ScrollAwareSection className='pb-20 pt-32'>
        <div className='container'>
          <header className='mx-auto text-center w-2/5 mb-14 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full'>
            <h2 className='mb-[0.45em] font-secondary font-bold text-[53px] text-headingForeground'>The future of AI.</h2>
            <p className='text-[18px] leading-[1.444em]'></p>
          </header>
          <div className='grid grid-cols-3 justify-between gap-x-20 gap-y-9 max-lg:grid-cols-2 max-lg:gap-x-10 max-md:grid-cols-1'>
            {FutureOfAIData?.map((item) => (
              <div className='group flex gap-5' key={item?.id}>
                <div className='grid place-items-center shrink-0 w-11 h-11 rounded-lg bg-[#F2F2F2] text-heading-foreground transition-all group-hover:scale-125 group-hover:shadow-xl group-hover:bg-black group-hover:text-white'>
                  <SvgIconWrapper IconComponent={item?.svgIcon} />
                </div>
                <div className='relative shrink'>
                  <h4 className='mb-3 font-secondary text-lg text-headingForeground font-medium'>{item?.title}</h4>
                  <p className="text-[14px] text-lightGray font-primary" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAwareSection>
      <ScrollAwareSection>
        <div className='container'>
          <div className="rounded-[50px] border p-20 max-xl:px-10 max-lg:py-12 max-sm:px-5">
            <div className="lqd-tabs" data-lqd-tabs-style="1">
              <div className="lqd-tabs-triggers mb-9 grid grid-cols-5 justify-between gap-8 max-lg:grid-cols-3 max-lg:gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {futureAITabContentData.map((tab) => (
                  <button key={tab.id} className={`transition-all p-7 text-[1.25rem] text-center border rounded-xl font-secondary font-medium hover:text-headingForeground [&.lqd-is-active]:bg-white [&.lqd-is-active]:text-headingForeground [&.lqd-is-active]:border-white [&.lqd-is-active]:shadow-lg ${activeTab === tab.id ? 'lqd-is-active' : ''}`} onClick={() => handleTabClick(tab.id)} data-target={`#${tab.id}`}>
                    {tab.buttonTxt}
                  </button>
                ))}
              </div>
              <div className="lqd-tabs-content-wrap">
                {futureAITabContentData.map((tab) => (
                  <FutureAITabContent key={tab.id} {...tab} activeTab={activeTab} handleTabClick={handleTabClick} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAwareSection>
      <ScrollAwareSection className='py-20'>
        <div className="container">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {
              careerData.map((item) =>
                <div key={item.id} className={`lqd-color-box flex items-center py-5 px-9 gap-4 rounded-[15px] transition-all hover:shadow-lg hover:-translate-y-2 bg-opacity-[0.07] ${item.className.bg} ${item.className.shadow}`}>
                  <span className={`lqd-box-dot w-6 h-6 border-[8px] border-white rounded-full shadow-lg ${item.className.bg}`}></span>
                  <h3 className={`${item.className.text} text-xl text-inherit -tracking-tight`}>{item.title}</h3>
                </div>
              )
            }
          </div>
        </div>
      </ScrollAwareSection>
    </section>
  );
};

SvgIconWrapper.propTypes = {
  IconComponent: PropTypes.elementType.isRequired
};

export default FutureOfAI;
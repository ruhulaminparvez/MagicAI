import ScrollAwareSection from "../../../components/ScrollAwareSection";
import { useState } from "react";
import { faqData } from "../../../utils/mock/mockData";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <ScrollAwareSection className="py-10">
            <div className="container">
                <div className="relative rounded-[50px] border p-11 pb-16 max-sm:px-5">
                    <header className="mx-auto text-center w-1/2 mb-9 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
                        <h6 className="mb-6 inline-block rounded-md bg-[#60027C] bg-opacity-15 px-3 py-1 text-[13px] font-medium text-[#60027C]">
                            FAQ
                            <span className="dot"></span>
                            <span className="opacity-50">Help Center</span>
                        </h6>
                        <h2 className="mb-[0.45em]">Have a question?</h2>
                        <p className="text-[18px] leading-[1.444em]">Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                    </header>
                    <div className="lqd-accordion mx-auto w-5/6 max-lg:w-full">
                        {faqData.map((item, index) => (
                            <div className="lqd-accordion-item group" key={index}>
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`flex items-center justify-between w-full py-5 pl-4 text-headingForeground text-left text-[20px] font-normal font-primary tracking-wide border-b group/btn group-last:border-b-0 ${activeIndex === index ? 'lqd-is-active' : ''}`}>
                                    <span>{item.question}</span>
                                    <div className="inline-flex items-center justify-center ml-3 border w-7 h-7 rounded-3xl shrink-0">
                                        <span className="group-[&.lqd-is-active]/btn:hidden">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.552 6.489H11.617V5.061H6.552V0H5.082V5.061H5.96046e-08V6.489H5.082V11.571H6.552V6.489Z"></path>
                                            </svg>
                                        </span>
                                        <span className="hidden group-[&.lqd-is-active]/btn:block">
                                            <svg width="7" height="2" viewBox="0 0 7 2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.764C0.633344 1.67982 1.27225 1.64472 1.911 1.659H4.411C5.05675 1.64347 5.70273 1.67858 6.343 1.764V0C5.70266 0.0844217 5.05663 0.11786 4.411 0.0999999H1.911C1.27236 0.117286 0.63335 0.083848 0 0V1.764Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </button>
                                <div id={`faq-${index}`} className={`py-4 pl-3 lqd-accordion-content ${activeIndex === index ? 'block' : 'hidden'}`}>
                                    <p className="text-lg max-sm:text-[17px]">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollAwareSection>
    );
};

export default FAQ;
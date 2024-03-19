import { useState } from 'react';
import ScrollAwareSection from '../../../components/ScrollAwareSection'
import { pricingCardData, pricingTabData } from '../../../utils/mock/mockData';

const Pricing = () => {
    const [activeTab, setActiveTab] = useState(pricingTabData[0].id);
    return (
        <ScrollAwareSection className="relative py-10">
            <div className='container relative'>
                <div className='relative rounded-[50px] border p-11 max-lg:px-5'>
                    <header className="mx-auto text-center w-2/5 mb-7 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
                        <h2 className="mb-[0.45em]">Flexible Pricing.</h2>
                        <p className="text-[18px] leading-[1.444em]"></p>
                    </header>
                    <div className="lqd-tabs text-center">
                        <div className="lqd-tabs-triggers mx-auto mb-9 inline-flex flex-wrap gap-2 rounded-md border text-[15px] font-medium font-primary leading-none">
                            {pricingTabData.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`transition-all px-4 py-[0.35rem] min-w-[210px] rounded-lg hover:text-headingForeground [&.lqd-is-active]:text-headingForeground [&.lqd-is-active]:bg-white [&.lqd-is-active]:shadow-sm max-sm:w-full max-sm:h-10 ${activeTab === tab.id ? 'lqd-is-active' : ''}`}
                                    data-target={`#${tab.id}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                    {tab.save && <span className="ml-1 inline-block rounded-md bg-[#684AE2] bg-opacity-10 p-[0.375rem] px-2 text-[#684AE2]">{tab.save}</span>}
                                </button>
                            ))}
                        </div>
                        <div className="lqd-tabs-content-wrap px-10 max-xl:px-0">
                            <div className="lqd-tabs-content">
                                {pricingCardData.map((card, index) => (
                                    <div key={index + 1} id={card?.id} style={{ display: activeTab === card.id ? 'block' : 'none' }}>
                                        <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
                                            {card?.data?.map((plan) => (
                                                <div key={plan?.id} className={`px-12 pt-7 pb-11 rounded-3xl text-center max-xl:px-6 max-lg:px-4 ${plan?.border && 'border'}`}>
                                                    <h6 className="p-[0.35rem] mb-6 border rounded-md text-[11px] text-opacity-80">{plan.title}</h6>
                                                    <p className="text-[45px] font-medium text-headingForeground leading-none -tracking-wide mb-1">
                                                        <sup className="text-[0.53em]">$</sup>{plan.price}
                                                    </p>
                                                    <p className="mb-4 text-sm opacity-60">per month</p>
                                                    <a href={plan.link} className="block w-full p-3 mb-6 rounded-lg bg-black text-headingForeground bg-opacity-[0.03] font-medium hover:bg-black hover:text-white transition-colors">Select {plan.title}</a>
                                                    <ul className="px-3 text-left max-lg:p-0">
                                                        {plan.features.map((feature, index) => (
                                                            <li key={index} className="flex items-center mb-4">
                                                                <span className="inline-grid place-content-center w-[22px] h-[22px] mr-3 rounded-xl text-[#684AE2] bg-[#684AE2] bg-opacity-10 shrink-0">
                                                                    <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L1.78814e-07 5.545L1 4.545L3.952 7.537Z"></path>
                                                                    </svg>
                                                                </span>
                                                                <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-9 flex justify-center">
                        <div className="flex w-[305px] items-center gap-5 text-xs text-[#002A40] text-opacity-60">
                            <span className="size-10 inline-flex shrink-0 items-center justify-center rounded-xl bg-[#6C727B] bg-opacity-10">
                                <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.346 6.323H4.024V3.449C4.024 2.839 4.26632 2.25399 4.69765 1.82266C5.12899 1.39132 5.714 1.149 6.324 1.149C6.934 1.149 7.51901 1.39132 7.95035 1.82266C8.38168 2.25399 8.624 2.839 8.624 3.449C8.624 3.6015 8.68458 3.74775 8.79241 3.85559C8.90025 3.96342 9.0465 4.024 9.199 4.024C9.3515 4.024 9.49775 3.96342 9.60558 3.85559C9.71342 3.74775 9.774 3.6015 9.774 3.449C9.774 2.534 9.41052 1.65648 8.76352 1.00948C8.11652 0.362482 7.23899 -0.000999451 6.324 -0.000999451C5.409 -0.000999451 4.53148 0.362482 3.88448 1.00948C3.23748 1.65648 2.874 2.534 2.874 3.449V6.323H2.3C1.69001 6.323 1.10499 6.56532 0.673653 6.99666C0.242319 7.42799 0 8.013 0 8.623V14.946C0 15.248 0.0594935 15.5471 0.175079 15.8262C0.290665 16.1052 0.460078 16.3588 0.673653 16.5723C0.887227 16.7859 1.14078 16.9553 1.41983 17.0709C1.69888 17.1865 1.99796 17.246 2.3 17.246H10.347C10.649 17.246 10.9481 17.1865 11.2272 17.0709C11.5062 16.9553 11.7598 16.7859 11.9733 16.5723C12.1869 16.3588 12.3563 16.1052 12.4719 15.8262C12.5875 15.5471 12.647 15.248 12.647 14.946V8.622C12.6469 8.31996 12.5872 8.0209 12.4715 7.7419C12.3558 7.46291 12.1863 7.20943 11.9726 6.99595C11.759 6.78247 11.5053 6.61316 11.2262 6.49769C10.9472 6.38223 10.648 6.32287 10.346 6.323Z" fill="#6C727B"></path>
                                </svg>
                            </span>
                            <p className="font-primary leading-[18px]"><strong className='block'>Safe Payment:</strong> Use Stripe or Credit Card.</p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAwareSection>
    );
};

export default Pricing;
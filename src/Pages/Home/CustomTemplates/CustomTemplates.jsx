import { useState } from "react";
import PropTypes from "prop-types";
import ScrollAwareSection from "../../../components/ScrollAwareSection";
import { customTemplateCardData, customTemplateItemListData } from "../../../utils/mock/mockData";
const SvgIconWrapper = ({ IconComponent }) => <IconComponent />;

const CustomTemplates = () => {
    const [activeButton, setActiveButton] = useState(customTemplateItemListData[0].id);
    const [showMore, setShowMore] = useState(false);

    const handleButtonClick = (target) => {
        setActiveButton(target);
    };
    return (
        <ScrollAwareSection className="pb-9">
            <div className="container">
                <div className="rounded-[50px] border p-10 max-sm:px-5">
                    <header className="mx-auto text-center w-3/5 mb-7 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
                        <h6 className="mb-6 inline-block rounded-md bg-[#083D91] bg-opacity-15 px-3 py-1 text-[13px] font-medium text-[#083D91]">
                            Custom
                            <span className="dot"></span>
                            <span className="opacity-50">Prompts</span>
                        </h6>
                        <h2 className="mb-[0.45em]">Custom Templates.</h2>
                        <p className="text-[18px] leading-[1.444em]"></p>
                    </header>
                    <div className="flex flex-col items-center">
                        <div className="mx-auto mb-10 inline-flex flex-wrap items-center gap-2 rounded-lg border p-[0.35rem] text-xs font-primary font-semibold leading-none max-md:justify-center">
                            {customTemplateItemListData.map(item => (
                                <button key={item.id} className={`transition-all px-4 py-2 rounded-lg hover:text-headingForeground [&.lqd-is-active]:text-headingForeground [&.lqd-is-active]:bg-white [&.lqd-is-active]:shadow-xl ${activeButton === item.id && "lqd-is-active"}`} data-target={`.${item.id}`} onClick={() => handleButtonClick(item.id)}>
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`templates-cards grid ${showMore ? 'max-h-fit' : 'max-h-[28rem]'} grid-cols-3 gap-4 overflow-hidden max-lg:grid-cols-2 max-md:grid-cols-1`} style={{ overflow: showMore && "visible" }}>
                            {customTemplateCardData.map((card, index) => (
                                <div className={`group p-7 bg-[#F5F5F7] rounded-2xl templates-all ${card?.id}`} key={index + 1} style={{ display: (activeButton === "templates-all" || activeButton === card.id) ? "block" : "none" }}>
                                    <figure className="mix-blend-multiply group-hover:scale-125 relative z-0 inline-block transition-all duration-300">
                                        <span className="size-11 mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-bl from-[#f0f0f2] to-[#d7d7d9] [&amp;_path]:fill-inherit [&amp;_svg]:h-5 [&amp;_svg]:w-6 fill-[#7c7c7e]">
                                            <SvgIconWrapper IconComponent={card?.svgIcon} />
                                        </span>
                                    </figure>
                                    <div className="relative shrink">
                                        <h4 className="mb-3 font-semibold font-primary">
                                            {card?.title}
                                        </h4>
                                        <p className="text-[14px] font-primary">{card?.description}</p>
                                    </div>
                                </div>))}
                            <div className="templates-cards-overlay absolute inset-x-0 bottom-0 z-10 h-[230px] bg-gradient-to-t from-background from-20% to-transparent" style={{ visibility: showMore && "hidden" }}>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-20 mt-2 text-center">
                        <button className="templates-show-more text-[14px] font-semibold text-[#5A4791]" style={{ visibility: showMore && "hidden" }}>
                            <span className="size-7 mr-1 inline-grid place-content-center rounded-lg bg-[#885EFE] bg-opacity-10">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.671 11.796V0.996H7.125V11.796H5.671ZM0.998 7.125V5.671H11.798V7.125H0.998Z"></path>
                                </svg>
                            </span>
                            <span className="inline-grid h-7 place-content-center rounded-lg bg-[#885EFE] bg-opacity-10 px-2" onClick={() => setShowMore(true)}>
                                Show more
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </ScrollAwareSection>
    );
};

SvgIconWrapper.propTypes = {
    IconComponent: PropTypes.elementType.isRequired
};

export default CustomTemplates;
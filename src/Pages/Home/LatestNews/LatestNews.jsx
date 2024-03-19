import ScrollAwareSection from '../../../components/ScrollAwareSection';
import { latestNewsData } from '../../../utils/mock/mockData';

const LatestNews = () => {
    return (
        <ScrollAwareSection className="mb-14 py-10">
            <div className='container'>
                <header className="mx-auto text-center w-1/2 mb-9 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
                    <h6 className="mb-6 inline-block rounded-md bg-[#60027C] bg-opacity-15 px-3 py-1 text-[13px] font-medium text-[#60027C]">
                        Stay up-to-date
                    </h6>
                    <h2 className="mb-[0.45em]">Latest News</h2>
                    <p className="text-[18px] leading-[1.444em]"></p>
                </header>
                <div className="lg:grid-cols-3 mb-10 grid grid-cols-1 gap-14 md:grid-cols-2">
                    {latestNewsData.map((news, index) => (
                        <article className="shadow-[0_2px_4px_rgba(149,146,157,0.15)] rounded-2xl w-full flex flex-col" key={index + 1}>
                            <figure>
                                <a href={news?.link}>
                                    <img className="w-full h-40 object-cover rounded-t-2xl" src={news?.imageUrl} alt={news?.title} />
                                </a>
                            </figure>
                            <div className="p-5 min-h-[180px] flex flex-col font-medium">
                                <div className="flex justify-between space-x-6 mb-3 text-black font-primary">
                                    <time dateTime={news?.date} className="text-sm">{news?.date}</time>
                                    <div className="border-b grow relative -top-2"></div>
                                    <a className="text-sm" href="/">{news?.author}</a>
                                </div>
                                <h2 className="!text-[21px] mb-4 tracking-tight leading-[26px]"><a href={news?.link}>{news?.title}</a></h2>
                                <a className="flex items-center mt-auto text-[13px] text-black font-primary" href={news?.link}>
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 6l6 6l-6 6"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>))}
                </div>
                <div className="flex justify-center">
                    <a className="group flex space-x-2" href="/">
                        <div className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-500 transition-colors group-hover:bg-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 5l0 14"></path>
                                <path d="M5 12l14 0"></path>
                            </svg>
                        </div>
                        <div className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-500 transition-colors group-hover:bg-green-200">
                            Show more
                        </div>
                    </a>
                </div>
            </div>
        </ScrollAwareSection>
    );
};

export default LatestNews;
import PropTypes from "prop-types";

const FutureAITabContent = ({ id, smTitle, title, description, imageSrc, alt, imageDesc, backgroundColor, poweredBy, activeTab }) => {
  return (
    <div className={`lqd-tabs-content ${activeTab === id ? '' : 'hidden'}`} id={id}>
      <div className="flex flex-wrap justify-between max-md:gap-4">
        <div className="flex w-[47%] flex-col items-start rounded-xl p-8 shadow-lg max-md:w-full">
          <h6 className="mb-10 rounded-xl bg-[#F3E5F5] px-3 py-1">
            {smTitle}
            <span className="dot"></span>
            <span className="opacity-50">AI</span>
          </h6>
          <h3 className="mb-7 mt-auto">{title}</h3>
          <p className="text-lg [&amp;_strong]:font-semibold [&amp;_strong]:text-black" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="group w-[47%] rounded-xl p-8 max-md:w-full" style={{ backgroundColor }}>
          <div className="text-center">
            <figure className="mb-6 w-full">
              <img className="w-full rounded-2xl shadow-[0px_3px_45px_rgba(0,0,0,0.07)] transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.025] group-hover:shadow-[0px_20px_65px_rgba(0,0,0,0.05)]" width="878" height="748" src={imageSrc} alt={alt} />
            </figure>
            <p className="text-lg font-semibold text-headingForeground">{imageDesc}</p>
            <p className="text-sm text-heading-foreground">{poweredBy}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FutureAITabContent.propTypes = {
  id: PropTypes.string.isRequired,
  smTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageDesc: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  poweredBy: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default FutureAITabContent;

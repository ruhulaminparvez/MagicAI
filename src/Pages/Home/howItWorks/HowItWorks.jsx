import ScrollAwareSection from "../../../components/ScrollAwareSection"
import { centralImages } from "../../../utils/images/centralImages"

const HowItWorks = () => {
  const howItWorks = [
    {
      id: 1,
      title: 'Simply explain what your content is about and adjust settings according to your needs.'
    },
    {
      id: 2,
      title: 'Simply input some basic information or keywords about your brand or product, and let our AI algorithms do the rest.'
    },
    {
      id: 3,
      title: 'View, edit or export your result with a few clicks. And you’re done!'
    }
  ]
  return (
    <ScrollAwareSection className='py-10' id="how-it-works">
      <div className="container">
        <div className="rounded-[50px] bg-[#010101] bg-cover p-10 py-24 text-white text-opacity-60 shadow-xl max-sm:bg-bottom max-sm:px-5"
          style={{
            backgroundImage: `url(${centralImages.howItWorksBG})`
          }}>
          <div className="mx-auto mb-14 w-2/5 text-center max-xl:w-1/2 max-lg:w-8/12 max-md:w-full">
            <h2 className="text-[64px] leading-none text-[#E5E6E6] max-sm:text-[45px]">So, how does it work?
            </h2>
          </div>
          <div className="grid-cols-3 mb-20 grid gap-7 max-md:grid-cols-1">
            {
              howItWorks.map((item, index) =>
                <div key={item.id} className="group mx-auto flex max-w-[270px] flex-col items-center text-center text-xl font-medium">
                  <span className="size-16 mb-10 grid place-content-center rounded-full border-[2px] border-[#A2B2C9] border-opacity-15 text-[26px] font-medium transition-all group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-black">{index + 1}</span>
                  <p>Simply explain what your content is about and adjust settings according to your needs.</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </ScrollAwareSection>
  )
}

export default HowItWorks
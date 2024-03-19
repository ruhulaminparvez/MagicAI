import ScrollAwareSection from "../../../components/ScrollAwareSection"
import { toolsCardData } from "../../../utils/mock/mockData"

const MagicTools = () => {
  return (
    <ScrollAwareSection className='py-10'>
      <div className="container">
        <div className="rounded-[50px] border p-10 max-sm:px-6 max-sm:py-16">
          <header className="mx-auto text-center w-2/5 mb-14 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
            <h2 className="mb-[0.45em]">Magic Tools.</h2>
            <p className="text-[18px] leading-[1.444em]">MagicAI has all the tools you need to create and manage your SaaS platform.</p>
          </header>
          <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {
              toolsCardData.map(tool =>
                <div key={tool.id} className="group px-8 pb-12 bg-[#F5F5F7] rounded-[40px] text-center overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
                  <figure className="group-hover:scale-105 relative z-0 inline-block transition-all duration-300">
                    <img className="-mx-8 max-w-[calc(100%+4rem)]" src={tool.img} width="696" height="426" />
                  </figure>
                  <div className="relative shrink">
                    <h4 className="mb-3 font-bold">{tool.title}</h4>
                    <p className="text-[14px]">{tool.description}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </ScrollAwareSection>
  )
}

export default MagicTools
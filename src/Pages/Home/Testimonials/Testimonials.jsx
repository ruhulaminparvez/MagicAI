// import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import ScrollAwareSection from "../../../components/ScrollAwareSection"
import { centralImages } from "../../../utils/images/centralImages"
import { testimonialData } from "../../../utils/mock/mockData"
import { useEffect } from "react"

const Testimonials = () => {
  const options = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    classes: {
      prev: 'splide__arrow--prev avatar-carousel-prev hidden h-0',
      next: 'splide__arrow--next avatar-carousel-next hidden h-0',
    },
    pagination: false,
    drag: false,
  }
  const options2 = {
    type: 'loop',
    classes: {
      prev: 'splide__arrow--prev comment-carousel-prev -translate-x-20 -translate-y-1/2 opacity-40',
      next: 'splide__arrow--next comment-carousel-next translate-x-20 -translate-y-1/2 opacity-40',
    },
    pagination: false,
  }
  useEffect(() => {
    const avatarPrev = document.querySelector('.avatar-carousel-prev')
    const avatarNext = document.querySelector('.avatar-carousel-next')
    const commentPrev = document.querySelector('.comment-carousel-prev')
    const commentNext = document.querySelector('.comment-carousel-next')
    commentPrev.addEventListener('click', () => {
      avatarPrev.click()
    })
    commentNext.addEventListener('click', () => {
      avatarNext.click()
    })
  }, [])
  return (
    <ScrollAwareSection className='relative py-10' id='testimonials'>
      <div
        className="absolute inset-x-0 top-0 -z-1 h-[150vh]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F0EFFA, transparent)'
        }}
      ></div>
      <div className="container relative">
        <div
          className="rounded-[50px] border bg-contain bg-center bg-no-repeat p-11 pb-24 max-sm:px-5"
          style={{ backgroundImage: `url(${centralImages.testimonialBG})` }}
        >
          <header className="mx-auto text-center w-1/2 mb-10 max-xl:w-8/12 max-lg:w-10/12 max-md:w-full">
            <h6 className="mb-6 inline-block rounded-md bg-[#28027C] bg-opacity-15 px-3 py-1 text-[13px] font-medium text-[#28027C]">
              Testimonials
              <span className="dot"></span>
              <span className="opacity-50">Trustpilot</span>
            </h6>
            <h2 className="mb-[0.45em]">Trusted by millions.</h2>
            <p className="text-[18px] leading-[1.444em]"></p>
          </header>
          <div className="max-lg:11/12 mx-auto w-8/12 max-md:w-full">
            <div className="mb-20">
              <div
                className="mx-auto mb-7 w-[235px] gap-5" data-flickity="{ &quot;asNavFor&quot;: &quot;.testimonials-main-carousel&quot;, &quot;contain&quot;: false, &quot;pageDots&quot;: false, &quot;cellAlign&quot;: &quot;center&quot;, &quot;prevNextButtons&quot;: false, &quot;wrapAround&quot;: true, &quot;draggable&quot;: false }"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100% )',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100% )'
                }}
                tabIndex="0">
                <Splide options={options}>
                  {
                    testimonialData.map((testimonial) => (
                      <SplideSlide className="group" key={testimonial.id}>
                        <div className="w1/3 cursor-pointer pb-[16px] pt-9 text-center text-[15px] font-medium">
                          <figure className="size-11 mx-auto mb-4 overflow-hidden rounded-full transition-all group-[&amp;.is-active]:-translate-y-4 group-[&.is-active]:scale-[1.75] group-[&.is-active]:border-[5px] group-[&.is-active]:border-white group-[&.is-active]:shadow-sm max-sm:group-[&.is-active]:scale-150">
                            <img className="h-full w-full object-cover object-center" src={testimonial.avatar} alt="Tom Daniel" />
                          </figure>
                          <div className="whitespace-nowrap opacity-0 transition-all group-[&.is-active]:opacity-100">
                            <p className="text-heading-foreground">{testimonial.client}</p>
                            <p className="text-heading-foreground opacity-15">{testimonial.position}</p>
                          </div>
                        </div>
                      </SplideSlide>
                    ))
                  }
                </Splide>
              </div>
              <div className="cursor-pointer text-center text-[26px] leading-[1.27em] text-heading-foreground max-sm:text-lg max-sm:[&amp;_.flickity-button-icon]:!left-1/4 max-sm:[&amp;_.flickity-button-icon]:!top-1/4 max-sm:[&amp;_.flickity-button-icon]:!h-1/2 max-sm:[&amp;_.flickity-button-icon]:!w-1/2 [&amp;_.flickity-button.next]:-right-16 max-md:[&amp;_.flickity-button.next]:-right-10 [&amp;_.flickity-button.previous]:-left-16 max-md:[&amp;_.flickity-button.previous]:-left-10 [&amp;_.flickity-button]:opacity-40 [&amp;_.flickity-button]:transition-all [&amp;_.flickity-button]:hover:bg-transparent [&amp;_.flickity-button]:hover:opacity-100 [&amp;_.flickity-button]:focus:shadow-none max-sm:[&amp;_.flickity-button]:relative max-sm:[&amp;_.flickity-button]:!left-auto max-sm:[&amp;_.flickity-button]:!right-auto max-sm:[&amp;_.flickity-button]:top-auto max-sm:[&amp;_.flickity-button]:!mx-4 max-sm:[&amp;_.flickity-button]:translate-y-0 flickity-enabled is-draggable" data-flickity="{ &quot;contain&quot;: true, &quot;wrapAround&quot;: true, &quot;pageDots&quot;: false, &quot;adaptiveHeight&quot;: true }" tabIndex="0">
                <Splide options={options2}>
                  {
                    testimonialData.map((testimonial, index) => (
                      <SplideSlide key={index}>
                        <div className="w-full shrink-0 grow-0 basis-full">
                          <blockquote className="max-sm:mb-7">
                            <p>{testimonial.quote}</p>
                          </blockquote>
                        </div>
                      </SplideSlide>
                    ))
                  }
                </Splide>
              </div>
            </div>
            <div className="flex justify-center gap-20 opacity-80 max-lg:gap-12 max-sm:gap-4">
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_1} alt="Envato" title="Envato"
              />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_2} alt="Envato" title="Envato" />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_3} alt="Envato" title="Envato" />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_4} alt="Envato" title="Envato" />
              <img className="h-full w-full object-cover object-center"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                src={centralImages.testimonial_avatar_5} alt="Envato" title="Envato" />
            </div>
          </div>
        </div>
      </div>
    </ScrollAwareSection>
  )
}

export default Testimonials
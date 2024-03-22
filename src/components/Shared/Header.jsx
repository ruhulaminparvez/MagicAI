import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 48) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`site-header group/header absolute inset-x-0 z-50 text-white transition-[background,shadow] [&.lqd-is-sticky]:bg-white [&.lqd-is-sticky]:text-black [&.lqd-is-sticky]:shadow-[0_4px_20px_rgba(0,0,0,0.03)] top-12 ${isSticky && 'lqd-is-sticky'}`}
      style={{
        position: isSticky ? 'fixed' : '',
        top: isSticky ? '0px' : '',
      }}
    >
      <nav className="relative flex items-center justify-between border-b border-white border-opacity-10 px-7 py-4 text-[14px] opacity-0 transition-all duration-500 group-[.lqd-is-sticky]/header:border-black group-[.lqd-is-sticky]/header:border-opacity-5 group-[.page-loaded]/body:opacity-100 max-sm:px-2" id="frontend-local-navbar">
        <a className="site-logo relative basis-1/3 max-lg:basis-1/3" href="https://magicai.liquid-themes.com">
          <img className="peer absolute start-0 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 transition-all group-[.lqd-is-sticky]/header:translate-x-0 group-[.lqd-is-sticky]/header:opacity-100" src="/themes/default/assets/img/logo/magicAI-logo.svg" alt="MagicAI logo" />
          <img className="transition-all group-[.lqd-is-sticky]/header:peer-first:translate-x-2 group-[.lqd-is-sticky]/header:peer-first:opacity-0" src="/themes/default/assets/img/logo/magicAI-logo-dark.svg" alt="MagicAI logo" />
        </a>
        <div className="site-nav-container basis-1/3 transition-all max-lg:absolute max-lg:right-0 max-lg:top-full max-lg:max-h-0 max-lg:w-full max-lg:overflow-hidden max-lg:bg-[#343C57] max-lg:text-white [&amp;.lqd-is-active]:max-lg:max-h-[calc(100vh-150px)]">
          <div className="max-lg:max-h-[inherit] max-lg:overflow-y-scroll">
            <ul className="flex items-center justify-center gap-14 whitespace-nowrap text-center max-xl:gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-lg:p-10">

              <li>
                <a href="#banner" target="_self" className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:scale-75 before:rounded-lg before:bg-current before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-10 [&amp;.active]:before:scale-100 [&amp;.active]:before:opacity-10">
                  Home
                </a>
              </li>

              <li>
                <a href="/page/about" target="_self" className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:scale-75 before:rounded-lg before:bg-current before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-10 [&amp;.active]:before:scale-100 [&amp;.active]:before:opacity-10">
                  About
                </a>
              </li>

              <li>
                <a href="/page/features" target="_self" className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:scale-75 before:rounded-lg before:bg-current before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-10 [&amp;.active]:before:scale-100 [&amp;.active]:before:opacity-10">
                  Features
                </a>
              </li>

              <li>
                <a href="/page/how-it-works" target="_self" className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:scale-75 before:rounded-lg before:bg-current before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-10 [&amp;.active]:before:scale-100 [&amp;.active]:before:opacity-10">
                  How it Works
                </a>
              </li>

              <li>
                <a href="#pricing" target="_self" className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:scale-75 before:rounded-lg before:bg-current before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-10 [&amp;.active]:before:scale-100 [&amp;.active]:before:opacity-10">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#faq" target="_self" className="relative before:absolute before:-inset-x-4 before:-inset-y-2 before:scale-75 before:rounded-lg before:bg-current before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-10 [&amp;.active]:before:scale-100 [&amp;.active]:before:opacity-10">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="group relative -mt-3 block border-t border-white/5 px-10 pb-5 pt-6 md:hidden">
              <p className="mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M3.6 9h16.8"></path>
                  <path d="M3.6 15h16.8"></path>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
                Languages
              </p>
              <a className="block border-b border-black border-opacity-5 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/de" rel="alternate"
              // hreflang="de"
              >🇩🇪
                Deutsch</a>
              <a className="block border-b border-black border-opacity-5 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/en" rel="alternate"
              // hreflang="en"
              >🇬🇧
                English</a>
              <a className="block border-b border-black border-opacity-5 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/es" rel="alternate"
              // hreflang="es"
              >🇪🇸
                español</a>
              <a className="block border-b border-black border-opacity-5 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/fr" rel="alternate"
              // hreflang="fr"
              >🇫🇷
                français</a>
              <a className="block border-b border-black border-opacity-5 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/ar" rel="alternate"
              // hreflang="ar"
              >🇦🇪
                العربية</a>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 justify-end gap-2 max-lg:basis-2/3">
          <div className="group relative hidden md:block">
            <button className="size-10 inline-flex items-center justify-center rounded-full border-2 border-solid border-white !border-opacity-20 transition-colors before:absolute before:end-0 before:top-full before:h-4 before:w-full group-hover:!border-opacity-100 group-hover:bg-white group-hover:text-black group-[.lqd-is-sticky]/header:border-black group-[.lqd-is-sticky]/header:group-hover:bg-black group-[.lqd-is-sticky]/header:group-hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
            </button>
            <div className="pointer-events-none absolute end-0 top-[calc(100%+1rem)] min-w-[145px] translate-y-2 rounded-md bg-white text-black opacity-0 shadow-lg transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <a
                className="block border-b border-black border-opacity-5 px-3 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5"
                href="https://magicai.liquid-themes.com/de"
                rel="alternate"
              // hreflang="de"
              >🇩🇪 Deutsch</a>
              <a className="block border-b border-black border-opacity-5 px-3 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/en" rel="alternate"
              // hreflang="en"
              >🇬🇧
                English</a>
              <a className="block border-b border-black border-opacity-5 px-3 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/es" rel="alternate"
              // hreflang="es"
              >🇪🇸
                español</a>
              <a className="block border-b border-black border-opacity-5 px-3 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/fr" rel="alternate"
              // hreflang="fr"
              >🇫🇷
                français</a>
              <a className="block border-b border-black border-opacity-5 px-3 py-3 transition-colors last:border-none hover:bg-black hover:bg-opacity-5" href="https://magicai.liquid-themes.com/ar" rel="alternate"
              // hreflang="ar"
              >🇦🇪
                العربية</a>
            </div>
          </div>

          <a className="relative inline-flex items-center overflow-hidden rounded-lg border-[2px] border-white !border-opacity-10 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-lg group-[.lqd-is-sticky]/header:border-black group-[.lqd-is-sticky]/header:text-black group-[.lqd-is-sticky]/header:hover:text-white" href="https://magicai.liquid-themes.com/login">
            Sign In
          </a>
          <a className="relative inline-flex items-center overflow-hidden rounded-lg border-[2px] border-white !border-opacity-0 bg-white !bg-opacity-10 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-black hover:bg-black hover:!bg-opacity-100 hover:text-white hover:shadow-lg group-[.lqd-is-sticky]/header:bg-black group-[.lqd-is-sticky]/header:text-black group-[.lqd-is-sticky]/header:hover:!bg-opacity-100 group-[.lqd-is-sticky]/header:hover:text-white" href="https://magicai.liquid-themes.com/register">
            Join Hub
          </a>

          <button className="mobile-nav-trigger size-10 group flex shrink-0 items-center justify-center rounded-full bg-white !bg-opacity-10 group-[.lqd-is-sticky]/header:bg-black lg:hidden">
            <span className="flex w-4 flex-col gap-1">
              <span className="inline-flex h-[2px] w-full bg-white transition-transform first:origin-left last:origin-right group-[.lqd-is-sticky]/header:bg-black group-[&amp;.lqd-is-active]:first:-translate-y-[2px] group-[&amp;.lqd-is-active]:first:translate-x-[3px] group-[&amp;.lqd-is-active]:first:rotate-45 group-[&amp;.lqd-is-active]:last:-translate-x-[2px] group-[&amp;.lqd-is-active]:last:-translate-y-[8px] group-[&amp;.lqd-is-active]:last:-rotate-45"></span>
              <span className="inline-flex h-[2px] w-full bg-white transition-transform first:origin-left last:origin-right group-[.lqd-is-sticky]/header:bg-black group-[&amp;.lqd-is-active]:first:-translate-y-[2px] group-[&amp;.lqd-is-active]:first:translate-x-[3px] group-[&amp;.lqd-is-active]:first:rotate-45 group-[&amp;.lqd-is-active]:last:-translate-x-[2px] group-[&amp;.lqd-is-active]:last:-translate-y-[8px] group-[&amp;.lqd-is-active]:last:-rotate-45"></span>
            </span>
          </button>
        </div>
      </nav>

      <div className="fixed z-50 hidden invisible opacity-0 transition-opacity group-[.lqd-is-sticky]/header:opacity-100 group-[.lqd-is-sticky]/header:visible md:block start-24 bottom-6">
        <a className="flex items-center gap-5 rounded-xl bg-white px-3 py-3 text-sm text-[#002A40] text-opacity-60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-md" data-fslightbox="html5-youtube-videos" href="https://youtu.be/galNNnEcK7I">
          <span className="lqd-is-in-view inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3655df] via-[#A068FA] via-70% to-[#327BD1]">
            <svg style={{ padding: "16px" }} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="#fff"></path>
            </svg>
          </span>
          <span className="[&amp;_strong]:block">See it in action <strong className="text-[0.9rem] text-black">How it works? &nbsp;</strong></span>
        </a>
      </div>
    </header>
  )
}

export default Header
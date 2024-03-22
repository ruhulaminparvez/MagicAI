const UpperNav = () => {
    return (
        <div className='absolute inset-x-0 top-0 z-50 flex h-12 items-center justify-center bg-[#343C57] bg-cover px-3 text-center text-sm text-white opacity-0 bg-blend-luminosity transition-all duration-500 group-[.page-loaded]/body:opacity-100 upperNavBg'>
            <p className="font-primary">
                <span className='mr-3 text-[10px] font-semibold  uppercase tracking-wide'>Limited Offer</span>
                <span className='opacity-70 text-[.75rem]'>Sign up and receive 20% bonus discount on checkout.</span>
            </p>
        </div>
    );
};

export default UpperNav;
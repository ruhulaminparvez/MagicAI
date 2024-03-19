const UpperNav = () => {
    return (
        <div className='flex h-12 items-center justify-center bg-[#343C57] px-3 text-center text-white upperNavBg'>
            <p className="font-primary">
                <span className='mr-3 text-sm font-semibold  uppercase tracking-wide'>Limited Offer</span>
                <span className='opacity-70 text-xs'>Sign up and receive 20% bonus discount on checkout.</span>
            </p>
        </div>
    );
};

export default UpperNav;
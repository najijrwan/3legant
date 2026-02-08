
const HEADER_ITEMS = ['Shopping cart', 'Checkout details', 'Order complete'];

const CartHeader = () => {
    return (
        <header className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-6">
                <h4 className="text-brand 2xl:h3">Cart</h4>

                <div className="flex gap-8">
                    {HEADER_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="
                            w-[256px] pb-6.5 
                            flex justify-between border-b-2 border-b-n7100"
                        >
                            <div
                                className="
                                size-[42px]
                                flex items-center justify-center
                                bg-n2 rounded-full"
                            >
                                {i + 1}
                            </div>

                            <p className=""></p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="2xl:hidden flex items-center gap-1"
            >
                <Icon
                    name='ChevronLeft'
                    spanClassName='size-3'
                    iconClassName='w-[4px] h-[7px] text-black-600'
                />

                <span className='text-black-600 btn-sx'>Back</span>
            </button>
        </header>
    )
}
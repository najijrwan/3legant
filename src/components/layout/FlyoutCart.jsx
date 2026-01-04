import { Icon } from '@ui';

const FlyoutCart = ({ isOpen, onClose }) => {
    return (
        <aside
            className={`
            absolute top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            w-[343px] 2xl:w-[413px] h-full max-h-[812px] 2xl:max-h-[1024px] p-6 2xl:py-10
            flex flex-col justify-between
            bg-white
            transition-transform duration-300 ease-out
            z-30`}
        >
            {/* Top Container: Cart Produts & Products Actions */}
            <div
                data-id='cartProducts'
                className="
                w-full
                flex flex-col"
            >
                <header
                    className='
                    w-full
                    flex justify-between'
                >
                    <h6 className='text-[#121212]'>Cart</h6>
                    <button
                        onClick={onClose}
                        className="size-6 text-(--neutral-4-100)"
                    >
                        <Icon
                            name="Close"
                            className="size-3.5 2xl:size-5"
                        />
                    </button>
                </header>
            </div>

            {/* Bottom Container: Cart Checkout & Actions */}
            <div
                data-id='cartSummary'
                className="
                w-full
                flex flex-col"
            >

            </div>
        </aside>
    );
}

export default FlyoutCart;
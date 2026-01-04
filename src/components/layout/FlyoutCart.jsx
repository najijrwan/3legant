import { Icon } from '@ui';

const cartItems = [
    {
        image: 'src/assets/images/product image 1.png',
        name: 'Tray Table',
        color: 'black',
        quantity: 2,
        price: 19.19,
    },
    {
        image: 'src/assets/images/product image 2.png',
        name: 'Tray Table',
        color: 'red',
        quantity: 2,
        price: 19.19,
    },
    {
        image: 'src/assets/images/product image 3.png',
        name: 'Table Lamp',
        color: 'Gold',
        quantity: 2,
        price: 39,
    },
]

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
                {/* Brand & Close Menu Button */}
                <header
                    className='
                    w-full
                    flex justify-between items-center gap-4'
                >
                    <h6
                        className='
                        w-full
                        text-[#121212]'>Cart</h6>
                    <button
                        onClick={onClose}
                        className="
                        2xl:hidden"
                    >
                        <Icon
                            name="Close"
                            className="size-6 text-(--neutral-4-100)"
                        />
                    </button>
                </header>

                {/* Cart Products Action */}
                <ul className="
                    w-full
                    flex flex-col gap-4 2xl:gap-6"
                >
                    {cartItems.map((item, i) => (
                        <li
                            className="
                            w-full py-6"
                        >
                            <div className="
                                w-full
                                flex flex-col gap-4"></div>
                        </li>
                    ))}
                </ul>
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
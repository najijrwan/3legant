import { Icon } from '@ui';
import { formatPrice } from '@utils';

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
            flex 2xl:hidden flex-col justify-between
            bg-white
            transition-transform duration-100 ease-out
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
                            key={i}
                            className="
                            w-full py-6"
                        >
                            <div className="
                                w-full
                                flex gap-4"
                            >
                                <div
                                    className='
                                    w-20 h-24
                                    bg-[#F3F5F7]'>
                                    <img
                                        src={item.image}
                                        alt={`${item.name} image`}
                                        className="size-full object-cover"
                                    />
                                </div>

                                <div
                                    className="
                                    w-full
                                    flex flex-col gap-2"
                                >
                                    <p className="w-full
                                    flex justify-between
                                    text-(--neutral-7-100) caption-1-semi">
                                        <span>{item.name}</span>
                                        <span>{formatPrice(item.price)}</span>
                                    </p>

                                    <p className="w-full
                                    flex justify-between
                                    text-(--neutral-4-100) caption-2">
                                        <span>Color: {item.color}</span>
                                        <span><Icon name="Close" className='size-6' /></span>
                                    </p>
                                </div>
                            </div>
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
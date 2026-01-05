import { asideClass } from '@layout/FlyMenu.jsx';
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
            data-id='Flyout Cart'
            className={`
            ${asideClass}
            right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-30
            2xl:w-[413px] 2xl:py-10`}
        >
            <div
                className={`
                    h-screen pb-30
                    flex flex-col justify-between`}
            >
                {/* Top Container: Cart Products*/}
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

                    {/* Cart Products Summary */}
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
                                            className="size-full object-cover object-center"
                                        />
                                    </div>

                                    <div
                                        className="
                                    w-49.75 2xl:w-[267px]
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

                {/* Bottom Container: Cart Checkout */}
                <div
                    data-id='cartCheckout'
                    className="w-full flex flex-col gap-4 justify-between text-n7100"
                >
                    <div className="">
                        <p className="flex justify-between py-3.25">
                            <span className='body-2'>Subtotal</span>
                            <span className='body-2-semi'>$99.00</span>
                        </p>
                        <div className="h-px bg-n3100"></div>
                        <p className="flex justify-between py-3.25 h7">
                            <span>Total</span>
                            <span>$234.00</span>
                        </p>
                    </div>

                    <button className="px-6.5 py-2.5 bg-n7100 ">

                    </button>

                    <button className="">

                    </button>
                </div>
            </div>
        </aside>
    );
}

export default FlyoutCart;
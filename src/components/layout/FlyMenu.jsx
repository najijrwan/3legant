import { Icon, Brand, CartButton, SocialLinks } from '@ui';
import { NavLinks } from '@navigation';

const userSavedProducts = [
    {
        label: "Cart",
        tool: <CartButton iconName="ShoppingBag" count={2} />,
    },
    {
        label: "Wishlist",
        tool: <CartButton iconName="Heart" count={2} />,
    }
]

const FlyMenu = ({ onClose }) => {
    return (
        <aside
            data-title='Fly Menu'
            className='
            absolute top-0 left-0
            w-[343px] h-screen p-6
            flex flex-col justify-between
            bg-white
            z-20'
        >
            {/* Top Container: Accessibility & Branding */}
            <div
                data-id='topContainer'
                className="
                w-full
                flex flex-col gap-4"
            >
                <div
                    className="
                    w-full
                    flex justify-between">
                    <Brand />
                    <button
                        className=""
                    >
                        <Icon
                            onClick={onClose}
                            name="Close"
                            className="size-6 2xl:size-5" />
                    </button>
                </div>

                <form
                    className="
                    w-full h-11.5 px-4 rounded-[6px]
                    border border-(--neutral-4-100)
                    flex items-center"
                >
                    <div
                        type="text"
                        className="
                        w-full
                        flex gap-2"
                    >
                        <span className='size-6'>
                            <Icon name="Search" />
                        </span>
                        <input
                            type="text"
                            id="searchPrduct"
                            name="search"
                            placeholder='Search'
                            className='
                            w-full
                            text-(--neutral-4-100) caption-1
                            outline-0'
                        />
                    </div>
                </form>

                <NavLinks
                    showChevron
                    ulClass='
                    w-full
                    flex flex-col gap-4
                    btn-xs text-(--neutral-7-100)'
                    liClass='
                    w-full pb-1.75
                    border-b border-(--neutral-3-100) box-border'
                    divClass='
                    w-full h-8'
                    aClass='w-full'
                />
            </div>

            {/* Bottom Container: Account Actions & Social Links */}
            <div
                className="
                w-full h-52.5
                flex flex-col justify-between"
            >
                <div
                    className="
                    w-full
                    flex flex-col gap-2
                    text-(--neutral-4-100)
                    border-b border-(--neutral-4-100) box-border"
                >

                    {userSavedProducts.map((item) => (
                        <div
                            className="
                            w-full h-8 pb-1.75
                            flex justify-between
                            border-b border-(--neutral-3-100) box-border"
                        >
                            <span>{item.label}</span>
                            {item.tool}
                        </div>
                    ))}
                </div>

                <button className="
                    w-full py-2.5 px-6.5 rounded-md
                    flex items-center justify-center
                    bg-(--neutral-7-100)
                    btn-m text-white"
                >
                    <span className=''>Sign In</span>
                </button>

                <div className="w-full">
                    <SocialLinks color='--neutral-7-100' />
                </div>
            </div>
        </aside>
    );
}

export default FlyMenu;
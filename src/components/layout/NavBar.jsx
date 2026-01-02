import { Icon, CartButton } from '@ui';

const navitems = [
    {
        page: 'Home',
        href: '#',
    },
    {
        page: 'Shop',
        href: '#',
    },
    {
        page: 'Product',
        href: '#',
    },
    {
        page: 'Contact Us',
        href: '#',
    },
]

const NavBar = () => {
    return (
        <nav
            data-title="Navigation Bar"
            className="
            w-full py-4 px-8 2xl:px-40
            flex justify-between"
        >

            <div
                className='
                flex gap-1'
            >
                <button
                    className="
                    size-6 flex 2xl:hidden items-center justify-center"
                >
                    <Icon
                        name="Menu"
                        className=""
                    />
                </button>
                <header
                    className='
                    text-(--primary) text-base 2xl:text-2xl leading-6 2xl:leading-6 tracking-[0] font-poppins font-medium whitespace-break-spaces'
                >
                    3legant<span className="text-(--neutral-4-100)">. </span>
                </header>
            </div>

            <ul
                className="
                    w-fit h-fit
                    hidden 2xl:flex items-center gap-10
                    text-(--neutral-4-100) btn-xs font-space-grotesk"
            >
                {navitems.map((item, index) => (
                    <li
                        key={index}
                        className="w-fit h-fit"
                    >
                        <a
                            href={item.href}
                            className=""
                        >
                            {item.page}
                        </a>
                    </li>
                ))}
            </ul>

            <div
                className="
                flex flex-row-reverse items-center gap-4"
            >
                <CartButton count={2} />

                <button
                    className="
                    size-6 flex items-center justify-center"
                >
                    <Icon
                        name="UserCircle"
                        className="hidden 2xl:block"
                    />
                </button>

                <button
                    className="
                    size-6 flex items-center justify-center"
                >
                    <Icon
                        name="Search"
                        className="hidden 2xl:block"
                    />
                </button>
            </div>

        </nav>
    );
}

export default NavBar;
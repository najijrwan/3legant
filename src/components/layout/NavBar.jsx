import { Icon } from '@ui';

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
        page: 'About',
        href: '#',
    },
    {
        page: 'Contact Us',
        href: '#',
    },
]

const NavBar = ({ }) => {
    return (
        <nav
            data-title="NavBar"
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
                    flex items-center gap-10
                    text-(--neutral-4-100) btn-xs font-space-grotesk"
            >
                {navitems.map((item, index) => (
                    <li
                        key={index}
                        className=""
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
                w-12.5 h-7
                flex items-center justify-between"
            >
                <button
                    className="
                    size-6 flex items-center justify-center"
                >
                    <Icon
                        name="ShoppingBag"
                        className=""
                    />
                </button>
                <span
                    className="
                    size-5 rounded-full
                    flex items-center justify-center
                    text-white text-xs leading-2.5 tracking-normal font-inter font-bold
                    bg-(--neutral-7-100)"
                >
                    2
                </span>
            </div>

        </nav>
    );
}

export default NavBar;
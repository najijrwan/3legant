import { Icon } from '@ui';

const NavBar = ({ }) => {
    return (
        <nav
            data-title="NavBar"
            className="
            w-full py-4 px-8
            flex justify-between"
        >

            <div
                className='
                flex gap-1'
            >
                <button
                    className="
                    size-6 flex items-center justify-center"
                >
                    <Icon
                        name="Menu"
                        className=""
                    />
                </button>
                <header
                    className='
                    text-(--primary) text-base leading-6 tracking-[0] font-poppins font-medium whitespace-break-spaces'
                >
                    3legant<span className="text-(--neutral-4-100)">. </span>
                </header>
            </div>

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
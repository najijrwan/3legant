import { Icon, Brand, CartButton } from '@ui';
import { NavLinks } from '@navigation';

const NavBar = ({ onMenuOpen }) => {
    return (
        <nav
            data-id="NavigationBar"
            className="
            w-full py-4 px-8 2xl:px-40
            flex justify-between"
        >
            {/* Brand & Menu */}
            <div
                data-id='brand&menu'
                className='
                flex gap-1'
            >
                <button
                    onClick={onMenuOpen}
                    className="
                    size-6 flex 2xl:hidden items-center justify-center"
                >
                    <Icon name="Menu" />
                </button>

                <Brand />
            </div>

            {/* Pages Navigation Links */}
            <NavLinks
                data-id='pages'
                ulClass="
                w-fit h-fit 
                hidden 2xl:flex items-center gap-10 
                text-(--neutral-4-100) btn-xs font-space-grotesk"
                liClass="w-fit h-fit"
                aClass=""
            />

            {/* Action & Accessiblity Buttons */}
            <div
                data-id='navButtons'
                className="
                flex flex-row-reverse items-center gap-4"
            >
                <CartButton count={2} iconName="ShoppingBag" />

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
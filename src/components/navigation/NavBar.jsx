import { useNavigate, Link } from 'react-router-dom';
import { Icon, Brand, CartWishlistButton } from '@ui';
import { NavLinks } from '@navigation';

const NavBar = ({ onMenuOpen, onCartOpen }) => {
    const navigate = useNavigate();

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

                <Link to='/'>
                    <Brand className='text-base 2xl:text-2xl'/>
                </Link>
            </div>

            {/* Pages Navigation Links */}
            <NavLinks
                exclude={['Blog']}
                classNames={{
                    ul: `
                    w-fit h-fit
                    hidden 2xl:flex items-center gap-10
                    text-(--neutral-4-100) btn-xs font-space-grotesk`,
                    li: `
                    w-fit h-fit`,
                }}
            />

            {/* Action & Accessiblity Buttons */}
            <div
                data-id='navButtons'
                className="
                flex flex-row-reverse items-center gap-4"
            >
                <CartWishlistButton
                    onClick={onCartOpen}
                    count={2}
                    iconName="ShoppingBag"
                />

                <button
                    onClick={() => navigate('/auth')}
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
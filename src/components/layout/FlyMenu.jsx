import { Icon, Brand, CartButton } from '@ui';
import {NavLinks} from '@navigation';

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
            <div className="">

            </div>
        </aside>
    );
}

export default FlyMenu;
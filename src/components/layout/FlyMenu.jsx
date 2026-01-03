import { Icon, Brand, CartButton } from '@ui';

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
                w-full "
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

                
            </div>

            {/* Bottom Container: Account Actions & Social Links */}
            <div className="">

            </div>
        </aside>
    );
}

export default FlyMenu;
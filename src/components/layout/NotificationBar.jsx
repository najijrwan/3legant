import { Icon } from '@ui';

const NotificationBar = ({ }) => {
    return (
        <header
            data-title="notification-bar"
            className="
            relative
            h-10
            flex items-center justify-center gap-5.5 2xl:gap-[508px] 2xl:justify-end 2xl:pr-6
            bg-(--neutral-2-100)"
        >

            <div
                className="
                flex items-center gap-3"
            >
                <div
                    className="
                    flex items-center gap-2 2xl:gap-3"
                >
                    <Icon name="TicketPercent" className="size-4 2xl:size-6" />
                    <p
                        className="
                        caption-2-semi 2xl:caption-1-semi text-(--neutral-5-100)"
                    >
                        30% off storewide — Limited time!
                    </p>
                </div>

                <button
                    className="
                    hidden 2xl:flex items-center gap-1
                    btn-xs text-(--blue) border-b border-b-inherit"
                >
                    <span className=''>Shop Now</span>
                    <Icon name="ArrowRight" />
                </button>
            </div>

            <button
                className="
                "
            >
                <Icon
                    name="Close"
                    className="size-4 2xl:size-5" />
            </button>

        </header>
    );
}

export default NotificationBar;
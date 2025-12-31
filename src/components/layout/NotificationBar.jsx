import { Icon } from '@ui';

const NotificationBar = ({ }) => {
    return (
        <div
            data-title="notification-bar"
            className="
            relative
            h-10
            flex items-center justify-center gap-5.5
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
                    <Icon name="TicketPercent" size={24} color="#28303F" strokeWidth={1.5} fill="none" />
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
                    <Icon name="ArrowRight" size={16} />
                </button>
            </div>

            <button
                className="
                2xl:absolute top-2.5 right-4">
                <Icon name="Close" size={16} />
            </button>

        </div>
    );
}

export default NotificationBar;
import { Close, TicketPercent, ArrowRight } from '@icons';

const NotificationBar = ({ }) => {
    return (
        <div
            data-title="notification-bar"
            className="
            relative
            h-10
            flex items-center justify-center
            bg-(--neutral-2-100)"
        >

            <div
                className="
                flex items-center gap-3"
            >
                <div
                    className="
                    flex gap-3"
                >
                    <TicketPercent />
                    <p
                        className="
                        caption-1-semi"
                    >
                        30% off storewide — Limited time!
                    </p>
                </div>
                <button
                    className="
                    flex items-center gap-1
                    btn-xs text-(--blue) border-b border-b-inherit"
                >
                    <span className=''>Shop Now</span>
                    <ArrowRight />
                </button>
            </div>

            <button
                className="
                absolute top-2.5 right-4">
                <Close />
            </button>

        </div>
    );
}

export default NotificationBar;
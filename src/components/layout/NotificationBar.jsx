import { Icon } from '@ui';

const NotificationBar = () => {
    return (
        <header
            data-id="notificationBar"
            className="
            relative
            h-10
            flex items-center justify-center gap-5.5 2xl:gap-[508px] 2xl:justify-end 2xl:pr-6
            bg-(--neutral-2-100)"
        >
            {/* Notification Message & Shop Button */}
            <div
                data-id='notificationMessege'
                className="
                flex items-center gap-3"
            >
                {/* Message */}
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

                {/* Shop */}
                <button
                    className="
                    hidden 2xl:flex items-center gap-1
                    btn-xs text-(--blue) border-b border-b-inherit"
                >
                    <span className=''>Shop Now</span>
                    <span
                        className='
                        size-4.5
                        flex items-center justify-center'
                    >
                        <Icon
                            name="ArrowRight"
                            className="
                            size-3
                            text-(--blue)"
                        />
                    </span>
                </button>
            </div>

            {/* Close Notification Button */}
            <button
                data-id='closeNotification'
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
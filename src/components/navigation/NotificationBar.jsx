import { Iconm, MoreActionBtn } from '@ui';

const NotificationBar = ({ className = '' }) => {
    return (
        <header
            data-id="notificationBar"
            className={`
            relative
            h-10
            flex items-center justify-center gap-5.5 2xl:gap-[508px] 2xl:justify-end 2xl:pr-6
            bg-(--neutral-2-100)
            ${className}`}
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
                <MoreActionBtn
                    label='Shop Now'
                    buttonClass='hidden 2xl:block shadow-blue'
                    labelClass='btn-sx text-blue'
                    iconClass='w-[10.5px] h-[9px]'
                />
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
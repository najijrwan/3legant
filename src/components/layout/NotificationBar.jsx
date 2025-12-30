import { Close } from '@icons';

const NotificationBar = ({ }) => {
    return (
        <div
            className="
            relative
            h-10
            items-center justify-center
            bg-(--neutral-2-100)"
        >
            <button 
                className="
                absolute top-2.5 right-4">
                <Close />
            </button>
        </div>
    );
}

export default NotificationBar;
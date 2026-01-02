import { Icon } from '@ui';

const HeroSlider = ({ }) => {
    return (
        <section
            className="
            pb-10
            flex flex-col gap-8"
        >
            <div
                className="
                relative w-full h-[304px] 2xl:h-[536px] 
                overflow-visible"
            >
                <img
                    src="src/assets/images/hero image 1.png"
                    alt=""
                    className="h-full w-full object-cover object-[60%_100%]"
                />

                <button
                    className="
                    absolute top-[238px] left-6
                    size-13 rounded-full
                    flex items-center justify-center
                    bg-white"
                >
                    <span
                        className="
                        size-8
                        flex items-center justify-center"
                    >
                        <Icon
                            name="ArrowLeft"
                            className="
                            w-4.5 h-4
                            text-(--neutral-7-100)"
                        />
                    </span>
                </button>
                <button
                    className="
                    absolute top-[238px] right-6
                    size-13 rounded-full
                    flex items-center justify-center
                    bg-white"
                >
                    <span
                        className="
                        size-8
                        flex items-center justify-center"
                    >
                        <Icon
                            name="ArrowRight"
                            className="
                            w-4.5 h-4
                            text-(--neutral-7-100)"
                        />
                    </span>
                </button>

                <div
                    className="
                    "
                >
                </div>
            </div>

            <div className=""></div>
        </section>
    );
}

export default HeroSlider;
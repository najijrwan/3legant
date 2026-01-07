import { Icon } from '@ui';

const ProductCard = ({ image, rating, label, discountPercentage, price }) => {
    return (
        <li
            className="
            h-[392px]
            flex flex-col gap-3"
        >
            <div
                className="
                relative"
            >
                <div
                    className="
                    w-[231px] h-[308px]"
                >
                    <img
                        src={image}
                        alt={`${image} image`}
                        className=""
                    />
                </div>
            </div>

            <div
                className="
                "
            >

            </div>
        </li>
    );
}

export default ProductCard;
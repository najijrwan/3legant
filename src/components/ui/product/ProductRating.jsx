import { Icon } from '@ui';

const ProductRating = ({ rating }) => {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, index) => (
                <Icon
                    key={index}
                    name="StarFill"
                    spanClassName="size-4"
                />
            ))}
        </div>
    );
}

export default ProductRating;
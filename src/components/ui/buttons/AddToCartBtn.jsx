const AddToCartBtn = ({ className = '' }) => {
    return (
        <button className={`rounded-lg bg-n7100 shadow-1 ${className}`}>
            Add to cart
        </button>
    );
}

export default AddToCartBtn;
import CartHeader from './CartHeader';

const ShoppingCart = () => {
    return (
        <section
            className="
            px-8 2xl:px-40 pb-20 pt-4 2xl:py-20
            flex flex-col gap-10 2xl:gap-0"
        >
            <CartHeader />
        </section>
    )
}

export default ShoppingCart;
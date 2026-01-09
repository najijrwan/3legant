import { ShopMoreBtn } from '@ui';

const Blog = ({ title }) => {
    return (
        <section
            className='
            w-full px-8 2xl:px-40 py-10 2xl:py-20
            flex flex-col 2xl:flex-row gap-10'
        >
            <header
                className='
                w-full
                flex justify-between items-end 2xl:items-center'
            >
                <h5 className='text-brand 2xl:h4'>{title}</h5>

                <ShopMoreBtn
                    label='More Articles'
                    btnClassName='text-n7100 btn-xs 2xl:btn-s'
                />
            </header>

            
        </section>
    );
}

export default Blog;
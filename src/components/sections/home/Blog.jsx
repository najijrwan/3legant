import { ShopMoreBtn } from '@ui';
import { HOME_ARTICLES } from '@data';

const Blog = ({ title }) => {
    return (
        <section
            className='
            w-full px-8 2xl:px-40 py-10 2xl:py-20
            flex flex-col gap-10'
        >
            <header
                className='
                w-full
                flex justify-between items-end 2xl:items-center'
            >
                <h5 className='text-brand 2xl:h4'>{title}</h5>

                <ShopMoreBtn
                    label='More Articles'
                    btnClassName='text-n7100'
                    spanClassName='size-4 2xl:size-5'
                />
            </header>

            <div
                className='
                flex flex-col 2xl:flex-row gap-6 2xl:gap-6.25'
            >
                {HOME_ARTICLES.map((article, index) => (
                    <div
                        key={index}
                        className='
                        flex flex-col gap-4 2xl:gap-6'
                    >
                        <img
                            src={article.image}
                            alt=""
                            className="w-[311px] h-[283px] 2xl:w-[357px] 2xl:h-[325px] object-cover"
                        />

                        <div
                            className='
                            flex flex-col gap-2'
                        >
                            <p className='text-[#23262F] body-2-semi 2xl:h7'>{article.title}</p>

                            <ShopMoreBtn
                                label='Read More'
                                btnClassName='text-n7100'
                                spanClassName='size-4 2xl:size-5 text-n4100'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;
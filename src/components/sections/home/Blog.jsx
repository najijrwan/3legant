import { ShopMoreBtn } from '@ui';
import { HOME_ARTICLES } from '@home';

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

            <div
                className='
                flex flex-col gap-6 2xl:gap-6.25'
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
                            className="w-[311px] h-[283px] 2xl:w-[357px] 2xl:h-[325px]"
                        />

                        <div
                            className='
                            '></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;
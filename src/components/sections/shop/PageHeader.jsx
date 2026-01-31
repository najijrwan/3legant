import { Link } from 'react-router-dom';
import { Icon } from '@ui';

const PageHeader = ({ title }) => {
    return (
        <section className='px-8 2xl:px-40'>
            <div
                className='
                w-full h-[308px] 2xl:h-[392px]
                flex flex-col items-center justify-center gap-4 2xl:gap-6
                bg-[url("src/assets/images/shop-hero-image.png")] bg-cover bg-center'
            >
                <div className='flex gap-4 btn-xs'>
                    <Link to="/" className='flex items-center gap-1'>
                        <span className='text-black-600'>Home</span>
                        <Icon
                            name='ChevronRight'
                            spanClassName='size-3'
                            iconClassName='w-[3px] h-[6px] text-black-600'
                        />
                    </Link>

                    <p className='text-black-900'>Shop</p>
                </div>

                <h4 className='2xl:h3 text-brand'>{title}</h4>

                <p className='w-full text-black-900 body-2 2xl:body-1 text-center'>
                    Let’s design the place you always imagined.
                </p>
            </div>
        </section >
    )
}

export default PageHeader;


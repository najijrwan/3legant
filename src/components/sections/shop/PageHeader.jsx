import { Icon } from '@ui';

const PageHeader = ({ title }) => {
    return (
        <section className='relative px-8 2xl:px-40'>
            <img
                src="src/assets/images/shop hero image.png"
                alt=""
                className="w-full h-[392px] object-cover object-center"
            />
        </section>
    )
}

export default PageHeader;


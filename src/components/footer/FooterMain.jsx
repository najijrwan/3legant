import { NavLinks } from '@navigation';
import { Brand } from '@ui';

const FooterMain = () => {
    return (
        <footer
            className="
            w-full px-8 2xl:px-40 pl-8 pt-20 py-12
            flex flex-col gap-10 gap[49px]
            text-center
            bg-n7100"
        >
            <div
                className="
                w-full
                flex flex-col items-center 2xl:flex-row 2xl:justify-between gap-10"
            >
                <div
                    className="
                    w-full 2xl:w-[544px]
                    flex flex-col 2xl:flex-row gap-4 2xl:gap-8"
                >
                    <Brand className='text-white text-2xl' />

                    <p
                        className="
                        text-n3100 caption-1"
                    >
                        Gift & Decoration Store
                    </p>
                </div>

                <NavLinks
                    showBlog={true}
                    ulClass='
                    flex flex-col justify-center 2xl:flex-row gap-8 2xl:gap-10
                    text-n1100 caption-1'
                    liClass=''
                    divClass='justify-center'
                />
            </div>
        </footer>
    );
}

export default FooterMain;
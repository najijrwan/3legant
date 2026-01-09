import { Icon } from '@ui';

const NewsLetter = () => {
    return (
        <section
            className='
            w-full px-8 py-[95px] 2xl:p-0
            flex flex-col gap-8
            text-center
            bg-[#F2F4F6]'
        >
            <header className='flex flex-col gap-2 text-n7100'>
                <h6>Join Our Newsletter</h6>
                <p className='caption-1'>Sign up for deals, new products and promotions</p>
            </header>

            <form
                action=""
                className='
                    w-full max-w-[488px] h-13
                    flex items-center justify-between
                    border-b border-b-n450'
            >
                <Icon name='Email' spanClassName='size-6 text-n7100' />

                <input 
                    type="email"
                    placeholder='Email address'
                    className='h-full text-n4100 btn-s outline-none'/>

                <button className='text-n4100 btn-s'>Signup</button>
            </form>
        </section>
    );
}

export default NewsLetter;
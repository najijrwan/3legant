import { Icon } from '@ui';
import { VALUES } from '@data';

const Values = () => {
    console.log(VALUES);
    return (
        <section
            className='
            p-8 2xl:px-40 2xl:py-12
            grid grid-cols-2 2xl:grid-cols-4 gap-x-2 2xl:gap-x-6 gap-y-6'
        >
            {VALUES.map((value, index) => (
                <div
                    key={index}
                    className='
                    px-4 py-8 2xl:px-8 2xl:py-12
                    flex flex-col items-start gap-4
                    bg-n2100'
                >
                    <Icon
                        name={value.iconName}
                        spanClassName='size-12'
                    />
                    <div
                        className='
                        flex flex-col gap-1 2xl:gap-2'>
                        <header className='text-n7100 caption-1-semi 2xl:h7'>
                            {value.title}
                        </header>

                        <p className='text-n4100 caption-1 2xl:caption whitespace-pre-line'>
                            {value.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Values;
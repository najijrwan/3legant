import { Icon } from '@ui';
import { VALUES } from '@home';

const Values = () => {
    return (
        <section
            className='
            p-8 2xl:px-40 2xl:py-12
            grid grid-cols-2 gap-6 gap-x-6'
        >
            {VALUES.map((value, index) => (
                <div
                    className='
                    px-4 py-8 2xl:px-8 2xl:py-12
                    flex flex-col gap-4'
                >
                    
                </div>
            ))}
        </section>
    );
}

export default Values;
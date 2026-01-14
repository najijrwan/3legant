import { Link } from 'react-router-dom';

const Brand = ({ className = '' }) => {
    return (
        <Link to='/' aria-label="Go to home">
            <header
                className={`
                    text-brand text-2xl leading-6 tracking-[0] 
                    font-poppins font-medium whitespace-break-spaces
                    ${className}`}
            >
                3legant<span className="text-n4100">. </span>
            </header>
        </Link>
    );
}

export default Brand;
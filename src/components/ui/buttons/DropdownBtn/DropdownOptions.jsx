

const DropdownOptions = ({ items }) => {
    return (
        <div
            className='
            2xl:absolute -bottom-2 2xl:translate-y-full z-20
            hidden 2xl:w-[262px] p-2
            flex flex-col gap-2.5
            bg-white border-[1.5px] border-n2100 rounded-xl shadow-2'
        >
            {items.map((item, index) => (
                <p
                    key={index}
                    className='w-full p-2 text-n4100 body-2'
                >
                    {item}
                </p>
            ))}
        </div>
    )
}

export default DropdownOptions;
import { Icon } from '@ui';

const SOCIAL_LINKS = [
    {
        link: '#',
        iconName: 'Instagram'
    },
    {
        link: '#',
        iconName: 'Facebook',
    },
    {
        link: '#',
        iconName: 'YouTube'
    },
]

const SocialLinks = ({ iconClassName = '' }) => {
    return (
        <div
            className='
            w-30
            flex justify-between'
        >
            {SOCIAL_LINKS.map((social, i) => (
                <a
                    key={i}
                    href={social.link}
                    className="size-6 flex items-center justify-center"
                >
                    <Icon
                        name={social.iconName}
                        className={`size-5 ${iconClassName}`}
                    />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
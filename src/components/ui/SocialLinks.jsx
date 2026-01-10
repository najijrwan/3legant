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

const SocialLinks = ({ color = '' }) => {
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
                        className={`size-5 text-${color}`}
                    />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
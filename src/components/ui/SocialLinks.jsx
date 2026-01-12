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
    const COLOR_MAP = {
        light: 'text-n1100',
        dark: 'text-n7100',
    };
    return (
        <div
            className='
            flex gap-6'
        >
            {SOCIAL_LINKS.map((social, i) => (
                <a
                    key={i}
                    href={social.link}
                    className="size-6 flex items-center justify-center"
                >
                    <Icon
                        name={social.iconName}
                        className={`size-5 ${COLOR_MAP[color] ?? ''}`}
                    />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
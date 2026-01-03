import { Icon } from '@ui';

const navitems = [
  {
    page: 'Home',
    href: '#',
  },
  {
    page: 'Shop',
    href: '#',
  },
  {
    page: 'Product',
    href: '#',
  },
  {
    page: 'Contact Us',
    href: '#',
  },
]

const NavLinks = ({ showChevron, ulClass = "", liClass = "", divClass = "", aClass = "", }) => {
  return (
    <ul className={ulClass}>
      {navitems.map((item, index) => (
        <li key={index} className={liClass}>
          <div className={`flex justify-between ${divClass}`}>
            <a href={item.href} className={aClass}>
              {item.page}
            </a>
            {
              showChevron &&
              <span className='size-6 flex items-center justify-center'>
                <Icon
                  name="ChevronDown"
                  className='w-3 h-1.5' />
              </span>
            }
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

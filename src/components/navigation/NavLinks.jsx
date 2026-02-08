import { Link } from 'react-router-dom';
import { Icon } from '@ui';
import { NAV_ITEMS } from '@data';

const NavLinks = ({
  items = NAV_ITEMS,
  showChevron = false,
  exclude = [],
  classNames = {},

}) => {

  const {
    ul = '',
    li = '',
    row = '',
    link = '',
  } = classNames;

  return (
    <ul className={ul}>
      {items
        .filter(item => !exclude.includes(item.label))
        .map(item => (
          <li key={item.label} className={li}>
            <div className={`flex justify-between ${row}`}>
              <Link to={item.link} className={link}>
                {item.label}
              </Link>

              {showChevron && (
                <span className="size-6 flex items-center justify-center">
                  <Icon name="ChevronDown" className="w-3 h-1.5" />
                </span>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
};

export default NavLinks;

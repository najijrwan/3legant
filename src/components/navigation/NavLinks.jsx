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
              <a href={item.href} className={link}>
                {item.label}
              </a>

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

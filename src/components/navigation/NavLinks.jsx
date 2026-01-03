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

const NavLinks = ({ ulClass = "", liClass = "", divClass, aClass = "" }) => {
  return (
    <ul className={ulClass}>
      {navitems.map((item, index) => (
        <li key={index} className={liClass}>
          <div className={divClass}>
            <a href={item.href} className={aClass}>
              {item.page}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

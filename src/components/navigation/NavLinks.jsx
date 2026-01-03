const NavLinks = ({ navitems, ulClass = "", liClass = "", aClass = "" }) => {
  return (
    <ul className={ulClass}>
      {navitems.map((item, index) => (
        <li key={index} className={liClass}>
          <a href={item.href} className={aClass}>
            {item.page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

import * as Icons from '@icons';

const Icon = ({ name, spanClassName = '', iconClassName = '', ...props }) => {
  const Component = Icons[name];

  if (!Component) {
    console.warn(`⚠️ Icon "${name}" does not exist in @icons`);
    return null;
  }

  return (
    <span
      className={`
        ${spanClassName}
        flex items-center justify-center`}
      >
      <Component className={iconClassName} {...props} />
    </span>
  );
};

export default Icon;

import * as Icons from '@icons';

const Icon = ({ name, className = '', ...props }) => {
  const Component = Icons[name]; // Dynamically pick the icon

  if (!Component) {
    console.warn(`⚠️ Icon "${name}" does not exist in @icons`);
    return null;
  }

  return <Component className={className} {...props} />;
};

export default Icon;

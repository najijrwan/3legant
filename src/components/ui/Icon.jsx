import * as Icons from '@icons';

const Icon = ({ name, size = 'inherit', className = '', ...props }) => {
  const Component = Icons[name]; // Dynamically pick the icon

  if (!Component) {
    console.warn(`⚠️ Icon "${name}" does not exist in @icons`);
    return null;
  }

  return (
    <span 
    className={`
      size-[${size}]
      flex items-center justify-center`}
      >
      <Component className={className} {...props} />
    </span>
  );
};

export default Icon;

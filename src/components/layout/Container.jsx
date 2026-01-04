const Container = ({ children, className = '' }) => {
  return (
    <div
      data-id="container"
      className={`
      relative
      w-full 2xl:w-[1440px] min-h-[1024px] mx-auto
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

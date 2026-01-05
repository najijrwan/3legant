const Container = ({ children, className = '' }) => {
  return (
    <div
      data-id="container"
      className={`
      w-full 2xl:w-[1440px] mx-auto
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

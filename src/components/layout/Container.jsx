const Container = ({ children, className = '' }) => {
  return (
    <div
      data-id="container"
      className={`
      relative
      w-[375px] 2xl:w-[1440px] mx-auto overflow-hidden
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

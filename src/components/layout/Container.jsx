const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`
      w-[375px] max-w-[1440px] mx-auto 
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

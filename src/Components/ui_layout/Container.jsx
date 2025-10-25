const Container = ({ className = "", children }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Container component content goes here */}
      {children}
    </div>
  );
};

export default Container;

const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
  
  const CardContent = ({ children }) => <div className="p-4">{children}</div>;
  
  export { Card, CardContent };
  
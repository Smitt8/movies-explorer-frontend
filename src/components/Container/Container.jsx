import './Container.css'

function Container({ className, children }) {
  const style = (className) ? className : '';
  return (
    <div className={`container ${style}`}>
      {children}
    </div>
  );
};

export default Container;
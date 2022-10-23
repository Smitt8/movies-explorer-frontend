import './MainText.css'

function MainText({ children, className }) {
  const style = (className) ? className : '';
  return (<p className={`text ${style}`}>
    {children}
  </p>);
};

export default MainText;
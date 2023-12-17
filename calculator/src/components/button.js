import "./button.css";

const button = ({symbol, color}) => {
    return <div className="button-wrapper" style={{backgroundColor: color}}>{symbol}</div>
};

export default button;
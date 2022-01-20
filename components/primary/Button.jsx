import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { onClick, text, textClass = '', classNames = '', loading, disabled, icon } = this.props;
    return (
      <button
        disabled={loading || disabled}
        onClick={onClick}
        className={` mt-6 rounded-md  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer '} ${classNames}`}>
        {!!icon ? (
          <div className="flex py-3 px-6 ">
            <img src={icon} alt="verified check" className="mr-1" />
            <p className={`font-medium text-sm ${textClass}`}>{text}</p>
          </div>
        ) : (
          <p className={`font-medium py-3 px-6 text-sm ${textClass}`}>{text}</p>
        )}
      </button>
    );
  }
}

export default Button;

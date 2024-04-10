import css from './buttom.module.css';

export const CssButton = ({ text, isPrimary, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${css.button} ${isPrimary ? css.shown : css.hide}`}
    >
      {text}
    </button>
  );
};

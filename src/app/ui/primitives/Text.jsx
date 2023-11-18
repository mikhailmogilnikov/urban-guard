import PropTypes from 'prop-types';

function Text({ tag = 'p', text = '', classNames = '' }) {
  let textStyles;

  switch (tag) {
    case 'h1':
      textStyles = 'font-bold text-xl';
      break;
    case 'h2':
      textStyles = 'text-lg font-semibold';
      break;
    case 'h4':
      textStyles = 'text-md font-semibold';
      break;
    case 'h5':
      textStyles = 'text-sm';
      break;
    default:
      textStyles = 'text-xs';
  }

  const Tag = tag;

  return <Tag className={`${textStyles} ${classNames}`}>{text}</Tag>;
}

Text.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  classNames: PropTypes.string,
};

export default Text;

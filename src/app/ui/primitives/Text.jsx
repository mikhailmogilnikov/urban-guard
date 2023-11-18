const Text = ({ tag, text, classNames }) => {
  let textStyles;

  switch (tag) {
    case 'h1':
      textStyles = '';
      break;
    case 'h2':
      textStyles = '';
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

  const Tag = tag || 'p';

  return <Tag className={`${textStyles} ${classNames}`}>{text}</Tag>;
};

export default Text;

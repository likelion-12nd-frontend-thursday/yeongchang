import PropTypes from 'prop-types'


const MyComponet = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제이름은 {name}입니다 <br />
      childeren 값은 {children}
      입니다.

    </div>
  );
}
MyComponet.defaultProps = {
  name: '기본 1이름'
};

MyComponet.prototype = {
  name: PropTypes.string
}
export default MyComponet;
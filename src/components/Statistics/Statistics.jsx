import PT from 'prop-types';
import { ItemStyled } from './Statistics.styled';

const Statistics = props => {
  const arrProps = Object.entries(props);
  return (
    <ul>
      {arrProps.map(el => (
        <ItemStyled key={el[0]}>
          {el[0]}: {el[1]}
        </ItemStyled>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  props: PT.objectOf(PT.number),
};

export default Statistics;

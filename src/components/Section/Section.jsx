import PT from 'prop-types';
import { TitleStyled } from '../Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <TitleStyled>
      {title}
      {children}
    </TitleStyled>
  );
};

Section.propTypes = {
  title: PT.string,
  children: PT.object,
};

export default Section;

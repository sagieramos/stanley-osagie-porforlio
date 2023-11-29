import { TypeAnimation } from 'react-type-animation';

const StackSummary = () => (
  <TypeAnimation
    sequence={[
      'Programmer',
      3000,
      'Front-End Developer',
      3000,
      'Back-end Developer',
      3000,
      'Freelancer',
      3000,
    ]}
    wrapper="span"
    speed={35}
    style={{ color: '#ff8c00', display: 'inline-block' }}
    repeat={Infinity}
  />
);

export default StackSummary;

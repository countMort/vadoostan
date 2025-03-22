import { ExperienceListProvider } from './provider';
import { ExperienceList } from './list';
import LoginSigninInFooter from '../components/molecules/loginSigninInFooter';

const Experiences = () => {
  return (
    <ExperienceListProvider>
      <ExperienceList>
        <LoginSigninInFooter />
      </ExperienceList>
    </ExperienceListProvider>
  );
};

export default Experiences;

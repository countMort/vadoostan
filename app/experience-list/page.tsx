import LoginSigninInFooter from '@/app/components/molecules/loginSigninInFooter';
import { ExperienceListProvider } from './provider';
import { ExperienceList } from './list';

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

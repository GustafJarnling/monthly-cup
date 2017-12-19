import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import WrapperSection from '../components/partials/WrapperSection';
import HeaderWithSubtitle from '../components/partials/HeaderWithSubtitle';
import SeperatorSmall from '../components/partials/SeperatorSmall';
import WrapperGrid from '../components/partials/WrapperGrid';
import BoxIcon from '../components/partials/BoxIcon';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <WrapperSection>
        <HeaderWithSubtitle
          title="Projects"
          subtitle="Stop the taboo of menstruation, ensuring future schooling and education."
        />
        <SeperatorSmall/>
        <WrapperGrid>
          <BoxIcon
            image_src="images/-dark3x.png"
            title="Stopping the taboo of menstruation"
            text="You can&#x27;t see it or feel the MenstrualCup, and you can practice any physical activity remaining protected for up to 12 hours."
          />
          <BoxIcon
            image_src="images/-dark3x.png"
            title="Stopping the taboo of menstruation"
            text="You can&#x27;t see it or feel the MenstrualCup, and you can practice any physical activity remaining protected for up to 12 hours."
          />
          <BoxIcon
            image_src="images/-dark3x.png"
            title="Stopping the taboo of menstruation"
            text="You can&#x27;t see it or feel the MenstrualCup, and you can practice any physical activity remaining protected for up to 12 hours."
          />
        </WrapperGrid>
      </WrapperSection>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};

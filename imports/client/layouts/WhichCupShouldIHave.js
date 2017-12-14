import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import HeaderWithSubtitle from '../components/partials/HeaderWithSubtitle';
import TextTwoColumns from '../components/partials/TextTwoColumns';
import TextOneColumn from '../components/partials/TextOneColumn';
import Seperator from '../components/partials/Seperator';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <div className="section-1">
        <div className="container w-container">
          <HeaderWithSubtitle
            title="Which cup should I have"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <TextTwoColumns
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          />
          <TextOneColumn
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          />
        </div>
      </div>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};

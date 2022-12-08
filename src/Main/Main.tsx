import React, { useCallback, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import FlagHandler from '../flagHandler';
import SolidPage from '../SolidPage/SolidPage';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('Solid');
  const [flagHandler] = useState(new FlagHandler());

  const constructTab = useCallback(() => {
    switch (selectedTab) {
      case 'Solid':
        return <SolidPage handler={flagHandler} />;
      default:
        return <></>;
    }
  }, [selectedTab, flagHandler]);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar onSelect={setSelectedTab} selected={selectedTab} />
      {constructTab()}
    </div>
  );
}

export default Main;

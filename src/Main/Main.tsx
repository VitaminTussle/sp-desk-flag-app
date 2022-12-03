import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('Solid');

  return (
    <div className="flex flex-row h-screen">
      <Sidebar onSelect={setSelectedTab} selected={selectedTab} />
    </div>
  );
}

export default Main;

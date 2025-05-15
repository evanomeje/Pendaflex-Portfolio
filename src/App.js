import React, { useState } from 'react';
import FolderTab from './folderTab';
import './App.css';

const folderData = [
  { label: "O", number: "010", items: ["oil lamp", "pants", "plant 003", "orange juice", "oval mirror", "oscillator", "oak frame"], lux: true, tabPosition: 0 },
  { label: "P", number: "012", items: ["polisher", "piano", "pencil", "paper clip", "printer", "poster", "painting"], lux: false, tabPosition: 0  },
  { label: "Q", number: "005", items: ["quiet", "questions", "quiz", "quartz", "quill", "quotations"], lux: true, tabPosition: 1  },
  { label: "R", number: "002", items: ["rum", "rain", "ruby", "radio", "rocket", "ruler", "roses"], lux: false, tabPosition: 0  },
  { label: "S", number: "002", items: ["sony", "sun", "sims", "stereo", "scissors", "stamp", "steel"], lux: true, tabPosition: 1  },
  { label: "F", number: "Fav Song", items: ["ony", "un", "ims", "tereo", "cissors", "tamp", "sel"], lux: true, tabPosition: 1  }
];

function App() {
  const [activeTab, setActiveTab] = useState(folderData.length - 1);
  
  const handleTabClick = (index) => {
    if (activeTab === index && index !== folderData.length - 1) {
      setActiveTab(folderData.length - 1);
    } else {
      setActiveTab(index);
    }
  };

  return (
  <div className="App-wrapper">
    <div className="App">
      <h1>Pendaflex-Style Folder Tabs</h1>
      <div className="folder-stack">
        {folderData.map((tab, i) => (
          <FolderTab 
            key={i}
            {...tab}
            index={i}
            totalTabs={folderData.length}
            isActive={activeTab === i}
            onClick={() => handleTabClick(i)}
          />
        ))}
      </div>
    </div>
  </div>
);

}

export default App;
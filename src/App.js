import React, { useState } from 'react';
import FolderTab from './folderTab';
import './App.css';

// Import your local GIF files (assuming they're in a 'gifs' folder)
//import visualAudioGif from './gifs/visual-audio.gif';
import albumBrowserGif from './gifs/album-browser.gif'
import visualAudioGif from './gifs/visual-audio.gif'
import digitalSignature from './gifs/digital-signature.gif'
import Video2ASCII from './gifs/video2ascii.gif'

const folderData = [
  { 
    label: "RESUME", 
    number: "000", 
    items: [""], 
    lux: false, 
    tabPosition: 0,
    projectData: null 
  },
  { 
    label: "003", 
    number: "Video2ASCII", 
    items: [""], 
    lux: true, 
    tabPosition: 0,
    projectData: {
      gifUrl: Video2ASCII, // Using imported local GIF
      projectUrl: "https://your-video2ascii-project.com",
      githubUrl: "https://github.com/yourusername/video2ascii",
      processNote: "Developed a tool that converts video files into ASCII art animations."
    }
  },
  { 
    label: "002", 
    number: "Signature", 
    items: [""], 
    lux: true, 
    tabPosition: 1,
    projectData: {
      gifUrl: digitalSignature, // Using imported local GIF
      projectUrl: "https://your-signature-project.com",
      githubUrl: "https://github.com/yourusername/signature",
      processNote: "Built a digital signature application with secure authentication."
    }
  },
  { 
    label: "001", 
    number: "Music-Browser", 
    items: [""], 
    lux: true, 
    tabPosition: 0,
    projectData: {
      gifUrl: albumBrowserGif, // Using imported local GIF
      projectUrl: "https://your-music-browser.com",
      githubUrl: "https://github.com/evanomeje/Music-Browser",
      processNote: "Created this music browser to practice ui/ux design"
    }
  },
  { 
    label: "000", 
    number: "Visual-Audio", 
    items: [""], 
    lux: true, 
    tabPosition: 1,
    projectData: {
      gifUrl: visualAudioGif, // Using imported local GIF
      projectUrl: "https://visual-audio.vercel.app/",
      githubUrl: "https://github.com/evanomeje/Visual-Audio",
      processNote: "Inpsired by my fav dj set. AI did the WebGL heavy lifting"
    }
  },
  { 
    label: "Projects", 
    number: "003", 
    items: ["ony", "un", "ims", "tereo", "cissors", "tamp", "sel"], 
    lux: false, 
    tabPosition: 0,
    projectData: null
  }
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
import React, { useState } from 'react';
import FolderTab from './folderTab';
import './App.css';
import { Analytics } from '@vercel/analytics/react'; 


import albumBrowserGif from './gifs/album-browser-opt.gif'
import visualAudioGif from './gifs/visual-audio-opt.gif'
import digitalSignature from './gifs/digital-signature-opt.gif'
import Video2ASCII from './gifs/video2ascii-opt.gif'

import resumeSticker from './stickers/resume.png'
import linkdenSticker from './stickers/linkedin-outline.svg'
import githubSticker from './stickers/github-outline.svg'

const folderData = [
 { 
    label: "DATA", 
    number: "000", 
    items: [""], 
    lux: false, 
    tabPosition: 0,
    projectData: null,
    sticker: [
      {image: resumeSticker, url: "https://www.dropbox.com/scl/fi/r7yx1r04kooaqrmompzsq/Evan-Omeje-Resume.pdf?rlkey=i11546ugh2hem73bcptyj2aav&st=l4b2sgbz&dl=0" },
      { image: linkdenSticker, url: "https://www.linkedin.com/in/evan-omeje-7a2880231/" },
      { image: githubSticker, url: "https://github.com/evanomeje" }
    ]
  },
  { 
    label: "003", 
    number: "Video2ASCII", 
    items: [""], 
    lux: true, 
    tabPosition: 0,
    projectData: {
      gifUrl: Video2ASCII, // Using imported local GIF
      projectUrl: "https://github.com/evanomeje/Video2ASCII",
      githubUrl: "https://github.com/evanomeje/Video2ASCII",
      processNote: ">> welcome_to_the_matrix █▓▒░  @#$%"
    },
    sticker: null
  },
  { 
    label: "002", 
    number: "Signature", 
    items: [""], 
    lux: true, 
    tabPosition: 1,
    projectData: {
      gifUrl: digitalSignature, // Using imported local GIF
      projectUrl: "https://digital-signature-bay.vercel.app/",
      githubUrl: "https://github.com/evanomeje/Digital-Signature",
      processNote: "What if your digital signature actually looked like signature????"
    },
    sticker: null
  },
  { 
    label: "001", 
    number: "Music-Browser", 
    items: [""], 
    lux: true, 
    tabPosition: 0,
    projectData: {
      gifUrl: albumBrowserGif, // Using imported local GIF
      projectUrl: "https://music-browser-xyz.vercel.app/",
      githubUrl: "https://github.com/evanomeje/Music-Browser",
      processNote: "What I would create if I ran spotify headquater"
    },
    sticker: null
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
      processNote: "Make something unhinge and cool, that could get me into Berghain"
    },
    sticker: null
  },
  { 
    label: "Projects", 
    number: "003", 
    items: ["", "", "", "", "", "", ""], 
    lux: false, 
    tabPosition: 0,
    projectData: null,
    sticker: null
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
        <h1>EVAN PROJECT</h1>
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
      <Analytics />
    </div>
  );
}

export default App;
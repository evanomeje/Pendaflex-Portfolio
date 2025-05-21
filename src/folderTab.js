import React from 'react';
import './folderTab.css';
import CorpLogo from '../src/corp-logo.png';

const FolderTab = ({ label, number, items, index, lux, isActive, onClick, totalTabs, projectData, sticker }) => {
  const numA = 15;
  const numB = 3;
  const zIndex = numA - numB;
  const baseColor = '#f0f0f0';
  const tabPositions = [60, 275, 100, 50, 400];
  const labelLeft = lux
    ? tabPositions[index % tabPositions.length]
    : tabPositions[(index + 8) % tabPositions.length] + 20;
  const isBottomTab = index === totalTabs - 1;

  return (
    <div
      className={`folder-tab ${isActive ? 'active' : ''}`}
      style={{
        zIndex,
        top: `${index * 30}px`,
        backgroundColor: baseColor,
        minHeight: isActive ? '300px' : '150px',
        transform: isActive
          ? (isBottomTab ? 'translateY(0px)' : 'translateY(-200px)')
          : 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {/* sticker container - positioned top right */}
      {sticker && (
        <div className="sticker-container">
          {sticker.map((sticker, i) => (
            <a 
              key={i}
              href={sticker.url} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="sticker-link"
            >
              <img 
                src={sticker.image} 
                alt="sticker" 
                className="sticker"
              />
            </a>
          ))}
        </div>
      )}

      {lux ? (
        <div
          className="lux-folder-label"
          style={{ backgroundColor: baseColor, left: `${labelLeft}px` }}
        >
          <div className="lux-folder-core">
            <strong>{label}</strong> {number}
          </div>
          <div className="lux-dot-wrapper">
            <div className="lux-dot left-dot"></div>
            <div className="lux-dot right-dot"></div>
          </div>
        </div>
      ) : (
        <div
          className="folder-label"
          style={{ left: `${labelLeft}px` }}
        >
          <strong>{label}</strong> {number}
        </div>
      )}

      {lux && (
        <>
          <div
            className="lux-dashed-line"
            style={{ left: `${labelLeft - 15}px` }}
          />
          <div
            className="lux-line"
            style={{ left: `${labelLeft - 9}px`, width: '214.9px' }}
          />
        </>
      )}

      {/* Content area - only show if active and not the bottom tab */}
      {isActive && !isBottomTab && (
        <div className="folder-content">
          {projectData ? (
            <div className="project-display">
              <div className="project-preview">
                <div 
                  className="gif-container"
                  onClick={() => window.open(projectData.projectUrl, '_blank')}
                >
                  <img 
                    src={projectData.gifUrl} 
                    alt={`${label} preview`}
                    className="project-gif"
                  />
                  <div className="gif-overlay">
                    <span>VIEW PROJECT</span>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <div className="process-note">
                  <h3>Process Note</h3>
                  <p>{projectData.processNote}</p>
                </div>
                <button 
                  className="source-code-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(projectData.githubUrl, '_blank');
                  }}
                >
                  &lt;/sourceCode&gt;
                </button>
              </div>
            </div>
          ) : (
            <div className="folder-items">
              {items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {isBottomTab && (
        <div
          className="bottom-tab-branding"
          style={{
            transform: isActive ? 'translateY(30px)' : 'translateY(0px)',
          }}
        >
          <img
            src={CorpLogo}
            alt="Corp Logo"
            className="bottom-tab-logo"
            style={{
              height: '280px',
              width: 'auto',
            }}
          />
          <div className="bottom-tab-text">
            Chima's Secret Files
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderTab;
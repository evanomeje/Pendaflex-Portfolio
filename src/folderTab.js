import React from 'react';
import './folderTab.css';
import CorpLogo from '../src/corp-logo.png';

const FolderTab = ({ label, number, items, index, lux, isActive, onClick, totalTabs }) => {
  const numA = 15;
  const numB = 3;
  const zIndex = numA - numB;
  const baseColor = '#f0f0f0';

  const tabPositions = [60, 275, 100, 950, 400];
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
        minHeight: isActive ? '300px' : '40px',
        transform: isActive 
          ? (isBottomTab ? 'translateY(0)' : 'translateY(-200px)') 
          : 'none',
        cursor: 'pointer',
        
      }}
      onClick={onClick}
    >
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

      <div className="folder-items">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>


      {isBottomTab && (
  <div 
    className="bottom-tab-branding"
    style={{
      transform: isActive ? 'translateY(30px)' : 'translateY(0)',
   // transition: 'transform 0.4s ease'
    }}
  >
    <img
      src={CorpLogo}
      alt="Corp Logo"
      className="bottom-tab-logo"
      style={{ 
        height: '280px', 
        width: 'auto',
    //  transition: 'all 0.4s ease' 
      }}
    />
    <div 
      className="bottom-tab-text"
      style={{
    //  transition: 'all 0.4s ease' 
      }}
    >
      * Evan's Secret Files
    </div>
  </div>
)}
    </div>
  );
};

export default FolderTab;
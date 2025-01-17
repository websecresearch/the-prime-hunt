import React from 'react';
import './styles.scss';

export const NotFoundContentView: React.FC = () => {
  return (
    <div className="not-found-content-view">
      <div>
        No supported platform detected.<br />
        You can use this extension with<br />
        Microsoft Sentinel or<br />
        Microsoft Defender for Endpoint.
      </div>
    </div>
  );
};

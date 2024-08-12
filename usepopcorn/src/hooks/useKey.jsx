import React, { useEffect } from 'react';

function useKey(key, action) {
  useEffect(() => {
    const callbackEscape = e => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener('keydown', callbackEscape);

    return () => {
      document.removeEventListener('keydown', callbackEscape);
    };
  }, [key, action]);
}

export default useKey;

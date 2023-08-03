import React from 'react';
import WOW from 'wow.js';

export const useWow = () => {
  React.useEffect(() => {
    new WOW({ live: false }).init();
  }, []);
};

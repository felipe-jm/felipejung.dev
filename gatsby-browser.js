import React from 'react';

import 'lazysizes';

import 'prismjs/themes/prism-tomorrow.css';

import { MenuProvider } from '@/hooks/menu';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);

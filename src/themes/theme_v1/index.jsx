import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ThemeV1({ data }) {
  return (
    <h1 className="text-red-500">
      Hello <FontAwesomeIcon icon={faBars} />
    </h1>
  );
}

export default ThemeV1;

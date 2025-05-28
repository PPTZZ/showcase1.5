import React from 'react'
import type { TSvgProps } from '@/lib/definitons';

function CustomSvg({ href, id, className }: TSvgProps){
  return (
    <svg className={`${className}`}>
      <use href={`${href}#${id}`}></use>
    </svg>
  );
};

export default CustomSvg
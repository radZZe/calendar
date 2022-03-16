import React from 'react';

const Title =(props) => {
  return (
  <div>
      <h1 class="h1title mt30 mb30"> <span class="create-tab-prev" data-step="3"><i class="las la-arrow-left"></i></span> <span class="variant-price-name">{props.text}</span> </h1>
  </div>
  );
}

export default Title;

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'


import React from "react";

import Directory from './directory.component';


const LandingPageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  text-align: justify;
  .page-info {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:20px 0 40px 0;
  }
`

const LandingPage = () => (
  <div css={LandingPageStyle}>
  <div className='page-info'>
    <h1>Welcome to Gem!</h1>
    <p>Integer venenatis fermentum pulvinar. Donec imperdiet sem pulvinar feugiat finibus. Donec tempus dictum massa, et suscipit nulla vulputate quis. Donec at mollis elit. Etiam ut lorem sit amet ante ultricies facilisis. Curabitur egestas congue purus sit amet hendrerit. Nulla pharetra mollis tortor, eget volutpat tellus congue ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer porta tempor nisl, non accumsan libero.</p>
  </div>
    <Directory />
  </div>
)

export default LandingPage;

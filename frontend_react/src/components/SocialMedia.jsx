import React from 'react';
import { BsLinkedin,BsGithub,BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return(
    <div className='app__social' style={{cursor: 'pointer'}}>
        <div>
          <a href="https://github.com/Manishbd17/">
          <BsGithub />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/man_ms_17" style={{cursor: 'pointer'}}>
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/manishsharma-/" style={{cursor: 'pointer'}}>
            <BsLinkedin />
          </a>
        </div>
    </div>
  );
}

export default SocialMedia; 
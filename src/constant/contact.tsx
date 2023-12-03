import { RiGithubLine, RiLinkedinFill, RiWechat2Fill, RiWechatFill } from 'react-icons/ri'
import devToLogo from '@/assets/devto-logo.svg';

export const LINKS = {
  cv: 'https://docs.google.com/document/d/1fHUQRdyf2RzSXUNME7ASAehzVarY-Fl2541if2EUQyI/edit?usp=sharing',
  github: 'https://github.com/lil-armstrong',
  linkedin: 'https://www.linkedin.com/in/utibe-ebong-649358223',
  wechat: 'weixin://dl/chat?captionstudioz',
  phone: 'tel:+2348109875593',
}

export const CONTACT_LINKS: any[] = [
  <a
    rel="noreferrer"
    target="_blank"
    href={LINKS?.wechat}
    title="WeChat account"
    aria-label="Visit and connect with me on WeChat"
  >
    <RiWechatFill aria-label="WeChat logo" />
  </a>,
  <a
    rel="noreferrer"
    target="_blank"
    aria-label="Visit and connect with me via linkedin"
    href={LINKS?.linkedin}
    title="Linkedin account"
  >
    <RiLinkedinFill aria-label="Linkedin logo" />
  </a>,
  
]

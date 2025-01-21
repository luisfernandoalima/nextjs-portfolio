import { IContact } from '@/types/dictionary';

import './Contact.scss';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';

export const Contact = ({dictionary}: {dictionary:IContact}) => {
    return(
        <section className='contactSection py-9 px-5'>
            <h2 className="text-4xl font-semibold text-center">{dictionary.title}</h2>

            <div className="buttonArea">
          <a href="https://github.com/luisfernandoalima" target="_blank">
            <button className="github"><FaGithub/><span>GitHub</span></button>
          </a>
          <a href="mailto:lima.luisfernando.dev@gmail.com">
            <button className="gmail"><FaGoogle/><span>E-mail</span></button>
          </a>
          <a href="https://www.linkedin.com/in/luis-fernando-a-43aaa2230/" target="_blank">
            <button className="linkedin"><FaLinkedin/><span>LinkedIn</span></button>
          </a>
        </div>
        </section>
    )
}
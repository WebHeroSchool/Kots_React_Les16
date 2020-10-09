import React from 'react';

const Footer = ({dealNumber}) => (<footer>
  <span>Осталось выполнить {dealNumber} задания</span>
  <div className='filter'>
    <button>Все</button>
    <button>Активные</button>
    <button>Выполненные</button>
  </div>
  <button>Удалить выполненные</button>
</footer>);

export default Footer;

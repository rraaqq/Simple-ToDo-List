import React from 'react';
import style from './Title.css';

const Title = ({title, number}) => <div className={style.Title}><h1>{title}</h1><p>({number})</p></div>

export default Title;
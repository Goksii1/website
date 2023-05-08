import React from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"

export default function Header() {
  return (
    <ul className="nav navbar bg-dark" data-bs-theme="dark">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/soups">Суп</Link></li>
        <li><Link to="/pies">Пирог</Link></li>
        <li><Link to="/beverages">Напиток</Link></li>
    </ul>
    
  )
}

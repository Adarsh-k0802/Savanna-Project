import React from 'react'
import '../Header/Header.css'
import Logo from "../Header/Images/logo.jpg"
import Settingg from "../Header/Images/setting.png"


function Header() {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar--bg">
  <div class="container-fluid">
  <a class="navbar-brand img---cont" href="#">
      <img src={Logo} alt="Bootstrap" width="47" height="40"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav--mid" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item nav--items">
          <a class="nav-link active nav---link nav---link1" aria-current="page" href="#">Entities</a>
        </li>
        <li class="nav-item nav--items">
          <a class="nav-link nav---link" href="#">Manage Teams</a>
        </li>
       
      </ul>
      <a class="navbar-brand img---cont" href="#">
      <img src={Settingg} alt="setting" width="24" height="20"/>
      </a>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header
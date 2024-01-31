import React from 'react'
import './Footer.css'

const Footer = () => {
    const d = new Date()
    const currentYear = d.getFullYear() 
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 copy-right">
          <strong>magnifico</strong>@{currentYear}. All rights reserved
        </div>
        {/*  */}
        <ul class="list-group list-group-horizontal col-md-6 col-sm-12">
          <li class="list-group-item">Terms</li>
          <li class="list-group-item">Privacy</li>
          <li class="list-group-item">Support</li>
          <li class="list-group-item">About</li>
          <li class="list-group-item">Resources</li>
          <li class="list-group-item">about</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
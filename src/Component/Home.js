import React, { Component } from 'react'
import '../Mycss/mystyle1.css'

export default class Home extends Component {
    render() {
        return (
            <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>NIKE</h5>
        <p className="ww">"Just do it".</p>
      </div>
    </div>
    <div className="carousel-item">
      <img  src="https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  className="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>ADIDAS</h5>
        <p className="ww">Impossible is nothing.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1589089956163-bb7a3eae3dbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VjY2klMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100 h-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>PUMA</h5>
        <p className="ww">Run any time any place.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                
            </div>
        )
    }
}

import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
  return (
    <>
        <header>
            <h1 class="site-heading text-center text-faded d-none d-lg-block" >
                <span class="site-heading-upper text-primary mb-3">Every glass is made with care</span>
                <span class="site-heading-lower">SamPor Café</span>
            </h1>
        </header>
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4 sticky-top" id="mainNav" >
            <div class="container">
                <a class="navbar-brand text-uppercase fw-bold d-lg-none " href="#index">SamPor Café</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="#">Home</a></li>
                        <li class="nav-item px-lg-4"><Link to="about"  class="nav-link text-uppercase" href="#about">About</Link></li>
                        <li class="nav-item px-lg-4"><Link to="products"  class="nav-link text-uppercase" href="#products">Products</Link></li>
                        <li class="nav-item px-lg-4"><Link to="store"  class="nav-link text-uppercase" href="#store">Store</Link></li>
                        <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="https://th.wikipedia.org/wiki/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C_%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%AD%E0%B8%8A%E0%B8%B2" target='_blank'>Call</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
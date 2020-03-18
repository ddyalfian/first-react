import React, { PureComponent } from 'react'
import './Header.css'

export default class Header extends PureComponent {
    render() {
        return (
            <header>
                <nav class="nav-wrapper transparent">
                    <div class="container">
                        <a href="#" class="brand-logo">First React</a>
                        <a href="#" class="sidenav-trigger" data-target="mobile-menu">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                        <ul class="sidenav grey lighten-2" id="mobile-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

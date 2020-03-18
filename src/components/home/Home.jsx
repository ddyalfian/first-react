import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Slider from './Slider';

export default class Index extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12 l4">
                        <h5>This is Home</h5>
                    </div>
                </div>
            </div>
        )
    }
}

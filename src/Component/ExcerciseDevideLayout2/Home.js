import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 bg-primary">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bg-danger">
                        <Body />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bg-success">
                        Footer
                    </div>
                </div>
            </div>
        )
    }
}

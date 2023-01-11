import React, { Component } from 'react'

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps{
    children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
    <div className='w-full h-screen container bg-gray-200 flex flex-col'>
        <Navbar/>
        <div className="h-full overflow-auto p-3">
            {this.props.children}</div>
    </div>)
  }
}

import React, { Children } from 'react'
import Navbar from './Navbar'
import Content from './Content'
type LayoutProps = {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Content>{children}</Content>
        </div>
    )
}

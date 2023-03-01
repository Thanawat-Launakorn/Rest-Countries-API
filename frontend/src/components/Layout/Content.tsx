import React from 'react'

type ContentProps = {
    children: React.ReactNode
}

export default function Content({ children }: ContentProps) {
    return (
        <main className=''>{children}</main>
    )
}

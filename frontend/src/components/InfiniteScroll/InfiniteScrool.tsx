import React from 'react'
type InfiniteScrollProps<T> = {
    items: Array<T>
    renderItem: (itemProps: {
        item: T
        idx: number
        array: Array<T>
        key: string | number
    }) => React.ReactNode
    renderEmptyList?: () => React.ReactNode
    keyExtractor: (item: T, idx: number) => string
    className?: string
}

export default function InfiniteScrool({
    items,
    renderItem,
    keyExtractor,
    renderEmptyList,
    className = ''
}: InfiniteScrollProps<any>) {
    return (
        <div className={`${className} infinite-scroll`}>
            {renderEmptyList && !items?.length && renderEmptyList()}
            {items?.map((item, idx, array) => {
                return (
                    <React.Fragment key={keyExtractor(item, idx)}>
                        {renderItem({ item, idx, array, key: keyExtractor(item, idx) })}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

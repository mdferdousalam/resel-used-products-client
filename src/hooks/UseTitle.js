import { useEffect } from 'react'
const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Buy and sell your old phones.`
    }, [title])
}


export default UseTitle;
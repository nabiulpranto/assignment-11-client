import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Juice Bar`;

    }, [title])
}

export default useTitle;
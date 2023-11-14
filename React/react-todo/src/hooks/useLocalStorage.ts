import { useEffect, useState } from "react";

const useLocalStorage = <T>(storageKey: string) => {

    const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey) ?? "[]"))

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value))
    }, [value])

    return [value, setValue]

}

export default useLocalStorage;
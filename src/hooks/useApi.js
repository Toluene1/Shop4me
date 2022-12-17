import { useEffect, useState } from "react"
import axios from "axios";



const useApi = (url) => {
    const [ProductApi, setPrductApi] = useState([])

    useEffect(() => {
        const FetchProducts = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setPrductApi(data)
                console.log(data);
            } catch (error) {
                setPrductApi([])
            }
        }
    }, [])

    return { ProductApi }
}
export default useApi;
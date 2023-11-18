import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {

    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            let isMounted = true;
            const source = axios.CancelToken.source();
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error) {
                setFetchError(error.message);
                setData([]);
            } finally {
                isMounted && setIsLoading(false);
            }
        }
        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }
        return cleanUp;

    }, [dataUrl]);

    return { data, isLoading, fetchError };

}

export default useAxiosFetch;
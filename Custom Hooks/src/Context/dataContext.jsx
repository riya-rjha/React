import {useState, useEffect, createContext} from 'react';
import API_Axios from '../API/post.jsx'
import UseWindowSize from '../Hooks/useWindowSize.jsx';
import UseAxiosFetch from '../Hooks/useAxiosFetch.jsx';
import { useNavigate } from 'react-router-dom';

const dataContext = createContext({});

export const DataProvider = ({children}) => {

    const [post, setPost] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { width } = UseWindowSize();

    useEffect(() => {
        const filteredResults = post.filter(posts => (
            ((posts.title.toLowerCase()).includes(search.toLowerCase()))
        ))

        setSearchResults(filteredResults.reverse()); //reverses the elements of array
    }, [post, search]);


    //Using AXIOS API Requests
    const { data, isLoading, fetchError } = UseAxiosFetch('http://localhost:3500/posts');
    useEffect(() => {
        setPost(data);
    }, [data]);


    return (
        <dataContext.Provider value={{
            width, search, setSearch, searchResults, isLoading, fetchError, post, setPost
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;
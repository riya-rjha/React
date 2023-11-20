import {useState, useEffect, createContext} from 'react';
import { format } from 'date-fns';
import API_Axios from '../API/post.jsx'
import UseWindowSize from '../Hooks/useWindowSize.jsx';
import UseAxiosFetch from '../Hooks/useAxiosFetch.jsx';
import { useNavigate } from 'react-router-dom';

const dataContext = createContext();

export const DataProvider = ({children}) => {

    const [post, setPost] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
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

    const handleDelete = async (id) => {
        try {
            const data = await API_Axios.delete(`/posts/${id}`);
            const postLists = post.filter(posts => posts.id !== id);
            setPost(postLists);
            navigate('/');//Navigate to home page -> history.push() - V5
        }
        catch (error) {
            console.log(`Error : ${error.message}`);
        }
    }


    const handleEdit = async (id) => {
        const dateTime = format(new Date(), "MMMM dd, yyyy pp") //format of date and time
        console.log(dateTime);
        const updatedPost = { id, title: editTitle, dateTime, body: editBody };
        try {
            const response = await API_Axios.put(`/posts/${id}`, updatedPost);
            setPost(post.map(post =>
                (post.id === id) ? { ...response.data } : post
            ));
            setEditBody('');
            setEditTitle('');
            navigate('/');

        } catch (error) {
            console.log(`Error : ${error.message}`);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const id = post.length ? post[post.length - 1] + 1 : 1;
        const lastPost = post.length ? post[post.length - 1] : { id: 0 };
        const id = lastPost.id + 1;
        const dateTime = format(new Date(), "MMMM dd, yyyy pp") //format of date and time
        console.log(dateTime);
        const newPost = { id, title: title, dateTime, body: body };
        try {
            const response = await API_Axios.post('/posts', newPost);
            const allPosts = [...post, response.data];
            setPost(allPosts);
            setTitle('');
            setBody('');
            navigate('/'); //history.push('/') -V5
        }
        catch (error) {
            console.log(`Error : ${error.message}`);
            console.log('Data:', error.response.data);
            console.log('Headers:', error.response.headers);
        }
    }


    return (
        <dataContext.Provider value={{

        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;
import axios from 'axios';
import { useState } from 'react';


const useAxios (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return { data, loading, error };
}

export default useAxios;
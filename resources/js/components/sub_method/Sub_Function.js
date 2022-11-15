import React, {Fragment, useRef, useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import { useParams, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
// パラメータを取得
export function Palam_get(palam) {
    // パラメーターを取得
   const { search } = useLocation();
   // パラメーターのクエリ名取得
   const query = new URLSearchParams(search);
   return query.get(palam);
}

// DBパラメータを取得
export function Db_date_func(path) {
    const [Db_Get_Date, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const response = await axios.get(path);
        setUsers(response.data)
    }

    return Db_Get_Date;
}

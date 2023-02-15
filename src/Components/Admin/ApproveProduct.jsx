import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'

const ApproveProduct = () => {
    const URL = process.env.REACT_APP_API_URL

    const [prod, setProd] = useState([])
    useEffect(() => {
        const callPro = async () => {
            let res = await axios.get(URL+'/userAdmin/getallproducts')
            console.log(res.data.messaage);
            setProd(res.data.messaage)
        }
        callPro()

    }, [URL])


    return (
        <div className='container my-12 mx-auto px-4 md:px-12'>
        <div className="flex flex-wrap -mx-1 lg:-mx-4" >{prod.map((p) => (
            <Products key={p._id} prod={p}/>
        ))}
        </div></div>
    )
}

export default ApproveProduct
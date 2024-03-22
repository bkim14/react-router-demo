import React from 'react'
import useNavigate from "../router/hooks/useNavigation";

const Page1 = ()=> {

    const navigate = useNavigate();


    return <div>
        <button onClick={() => {
            navigate('/1')
        }}>move to 1
        </button>
        <button onClick={() => {
            navigate('/2')
        }}>move to 2
        </button>
    </div>
}

export default Page1;
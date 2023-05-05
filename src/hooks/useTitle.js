
import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(()=>{
        document.title =`${title}_Dragon News`
    },[title])
}

export default useTitle
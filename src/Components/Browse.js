import Header from './Header'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useToprated from '../hooks/useToprated';
import useUpcoming from '../hooks/useUpcoming';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';



const Browse = () => {
  const showgptsearch = useSelector((store) => store.gpt.showgpt)
 
useNowplaying();
useToprated();
useUpcoming();


  return (
    <div >
      <Header/>
      {
        showgptsearch ? <GptSearch/> : <>  <Maincontainer/> <Secondarycontainer/> </>
      }
      </div>
    
  )
}

export default Browse
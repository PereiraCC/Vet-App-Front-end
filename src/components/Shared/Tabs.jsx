import { useSelector } from "react-redux";
import { IteamsTab } from "./IteamsTab";

export const Tabs = () => {

    const state = useSelector( state => state.tabs );
    const { currentTab } = state;

    console.log(currentTab);
    return (
      <>

        <IteamsTab />

      </>
        
    )
}

import { useContext, useState } from "react";
import "./dashboard.scss"
import { AuthContext } from "../../context/authContext"
import RightBar from "../rightBar/RightBar";
import refer from '../../assets/refer.png';
import SendIcon from '@mui/icons-material/Send';
const MainDashboard = () => {

  const { currentUser } = useContext(AuthContext)
  const [activeCard, setActiveCard] = useState(1);

  const toggleCards = () => {
    setActiveCard(activeCard === 1 ? 2 : 1);
  };


  return (
    <>
      <div className="dashCards">
        <div className={`dashCard grey ${activeCard === 1 ? 'active' : ''}`}>
          {/* <img src={currentUser.profilePic} alt="" /> */}
          <span>total amount</span>
          {/* <button>+</button> */}
        </div>
        <div className={`dashCard grey ${activeCard === 2 ? 'active' : ''}`} >
          {/* <img src={currentUser.profilePic} alt="" /> */}
          <span>earning</span>
        </div>
       <button onClick={toggleCards}>toggle</button>

      </div>
      {/* ________________________________________________________________________________________________________________ */}
      <div className="dashmain" >
        <div className="dashboardLeft" >
          <div className="dashleft_buttons">
            <div className="button greenbtn grey" >
              <span>Investment</span>
              <img src="https://source.unsplash.com/500x500?nature" />
            </div>
            <div className="button redbtn grey" >
              <span>Investment</span>
              <img src="https://source.unsplash.com/500x500?nature" />
            </div>
            <div className="button bluebtn grey" >
              <span>Investment</span>
              <img src="https://source.unsplash.com/500x500?nature" />
            </div>
            <div className="button yellowbtn grey " >
              <span>Investment</span>
              <img src="https://source.unsplash.com/500x500?nature" />
            </div>


          </div>

          {/* // left bottom */}

          <div className="dash_liveEarings">
          <div className="dash_liveEaringsleft grey">
          <center className="referheading"><span className="">REFER EARNING</span></center>
            <img className="dash_liveEaringsleft_img" src={refer} />
            <div className="referBUttons">
            <button className="referbutton_active">Refer Earning<br/><span>20,000</span></button>
            <button className="referbutton_activeN">Next Earning <br/><span>500+</span></button>
            </div>
            <button className="referpagebtn"><SendIcon /></button>
            
          </div>
          <div className="dash_liveEaringsRight grey"></div>
          </div>

        </div>
        <div className="dashboardRight" >
          <div className="dashRight_buttons">
            <div className="global_btn">Recharge</div>
            <div className="global_btnBB">Withdraw</div>
          </div>
         <div className="mainPlans">
         <span >RECOMMENDED PLAN</span>
         <div className="myCurrentRecharge grey">
            activate plan
          </div>
          <div className="myCurrentRecharge grey">
            activate plan
          </div>
          <div className="myCurrentRecharge grey">
            activate plan
          </div>
         </div>
        </div>
      </div>

    </>
  )
}

export default MainDashboard
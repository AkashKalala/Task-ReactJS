import Footer from "./Footer";
import Lastinfo from "./Lastinfo";
import '../CSS/Body.css';
import Body4c from "./Body4c";
import Body6c from "./Body6c";
import bg1 from "../IMG/bg1.jpg";
import bg5 from "../IMG/bg5.png";
import B3card from "./B3card.js";

function Body() {
    return (
      <div className="Body">
        <div className="Body-Total">
          <div className="extra-1"></div>
          <div className="body-div-1">
            <div className="b1c">
              <div className="b1main">
                <div className="b1top">
                  <p>AnyTime, anywhere Learn on your schedule from any device</p>
                </div>
                <div className="b1mid">
                  <p>We Believe everyone has the capcity to be creative <span className="a">Course Pro</span> is a place where people develop their own potential</p>
                </div>
                <button className="b1button">Let's Get Start</button>
              </div>
            </div>
            <div className="b1img">
              <img src={bg1} className="imgb1"/>
            </div>
          </div>
          <div className="body-div-2">
            <div className="main2">
              <div className="main2-1">
                <p>Total Students</p>
              </div>
              <div className="m212">
                  <p>5140</p>
              </div>
            </div>
            <div className="main2">
              <div className="main2-1">
                <p>Partners</p>
              </div>
              <div className="m212">
                <p>4123</p>
              </div>
            </div>
            <div className="main2">
              <div className="main2-1">
                <p>Affiliate Distribution</p>
              </div>
              <div className="m212">
                <p>4.18 Lac</p>
              </div>
            </div>
          </div>
          <div className="body-div-3">
            <div className="b3main">
              <div className="b3t">
                <p className="b3t-1">Courses</p>
                <p className="b3t-2">Our most popular courses</p>
              </div>
              <div className="b3c">
                <div className="b3cmain">
                  <B3card />
                </div>
              </div>
            </div>
          </div>
          <div className="body-div-4">
            <div className="div4">
              <div className="title4">
                <div className="t-4-1">
                  <p>
                    Top Earners
                  </p>
                </div>
                <div className="t-4-2">
                  <p>
                  Transformng your ideas into reality
                  </p>
                </div>
              </div>
              <div className="c-4">
                <Body4c />
              </div>
            </div>
          </div>
          <div className="body-div-5">
             <div className="b5main">
               <div className="b5t">
                 <p className="b5t-1">Refer</p>
                 <p className="b5t-2">How it's Work</p>
               </div>
               <div className="b5c">
                 <img src={bg5} className="bg5img"/>
               </div>
             </div>
          </div>
          <div className="body-div-6">
            <div className="b-div-6">
              <div className="d-6-t">
                <p>Testimonials</p>
                <div className="d-6-t-p2">
                  <p>
                  Check out What Our Students Think About Us
                  </p>
                </div>
              </div>
              <div className="d-6-c">
                <Body6c />
              </div>
            </div>
          </div>
          <div className="body-div-7">
              <p>Contact Us</p>
              <div className="b-7-p-2">
                <p>Reach Out with any question you have</p>
              </div>
          </div>
          <div className="body-div-8">
            <Lastinfo />
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
  
  export default Body;
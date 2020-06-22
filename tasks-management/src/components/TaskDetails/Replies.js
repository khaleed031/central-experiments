import React from "react";
import { useAppContext } from "../../context/AppContext";

const Replies = (props) => {
  const { loggedInContact } = useAppContext();

  return <div>
            <b>Replies</b>
            <br/><br/>
          <table>
              <tr>
                <td valign="top">
                <span className="well-blue" ><center>S</center></span>
                </td>
                <td>
                  <p className="p_blue">Sanjoy Sarkar  Jun 11, 2020, 3:07 PM  |  Notified 3 people</p>
                  <div>
                    The Sign-in page will also have an option to layer data; however, that is out of scope to start.  We will focus on the essentials and then add features as required.  Forgot password can also be on hold initially.
                  </div>
                </td>
              </tr>
          </table>
    </div>;
};

export default Replies;
import React from "react";
import "../style/Profile.css";

import Button from "./Button";

const Profile = () => {
  return (
    <div>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td rowSpan={3} className="imageprofile">
                <img src={require("../img/photo7.jpeg")} alt="Profile" />
              </td>
              <td className="nameprofile font-bold text-xl font-[poppins]">
                <h1>AGUS KURNIAWAN</h1>
              </td>
            </tr>
            <tr>
              <td>
                <p className="post text-medium font-[poppins]">
                  <span>20</span> Post <span>10M</span> Followers <span>1</span> Following
                </p>
              </td>
            </tr>
            <tr>
              <td className="desc font-[poppins]">Jika kabut asap menjadi resiko bagi kehidupan manusia, maka hidup di alam tanpa technology adalah kematian yang pasti. GEETOOR MAVEN BERKATA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="containerline">
        <hr />
      </div>
      <div className="containerpost ">
        <ul className="md:flex place-content-center md:items-center font-[poppins] bg:white duration-500 ease-in">
          <li className="md:ml-8 text-medium md:my-0 my-7">
            <a href="" className="text-gray-800 hover:text-gray-400 duration-500">
              Collection
            </a>
          </li>
          <li className="md:ml-8 text-medium md:my-0 my-7">
            <a href="" className="text-gray-800 hover:text-gray-400 duration-500">
              Tagged
            </a>
          </li>
          <Button>Post</Button>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

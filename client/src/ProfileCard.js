function ProfileCard({ user }) {

  return (
    <div className="font-sans m-auto w-80 p-4 border-4 border-black rounded-md lg:max-w-lg bg-gray-200">
    <div className="text-center space-y-2">
      <img className="border-2 border-black rounded-sm m-auto h-36" src="/avatar.jpeg" alt="avatar" />
      <h3 className="text-2xl font-sans font-extrabold">{user.username.toUpperCase()}</h3>
      <p className="text-gray-600">
        I want to be able to delete or add an avatar image. I want to be
        able to delete or add a note.
      </p>
      <div className="space-x-1">
        <button className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105">
          Change Avatar
        </button>
        <button className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105">
          Add Note
        </button>
      </div>
    </div>
  </div> 
  )
}

export default ProfileCard;




// import 'antd/dist/antd.css'
// import { Avatar } from "antd";
// import ProfilePicChanger from "./AvatarComponents/ProfilePicChanger";
// import { useState } from "react";
// import Pic1 from "./AvatarComponents/Pics/1.png";
// import Pic2 from "./AvatarComponents/Pics/2.png";
// import Pic3 from "./AvatarComponents/Pics/3.png";
// import Pic4 from "./AvatarComponents/Pics/4.png";
// import Pic5 from "./AvatarComponents/Pics/5.png";
// import Pic6 from "./AvatarComponents/Pics/6.png";
// import Pic7 from "./AvatarComponents/Pics/7.png";
// import Pic8 from "./AvatarComponents/Pics/8.png";
// import Pic9 from "./AvatarComponents/Pics/9.png";
// import Pic10 from "./AvatarComponents/Pics/10.png";
// import Pic11 from "./AvatarComponents/Pics/11.png";
// import Pic12 from "./AvatarComponents/Pics/12.png";
// import Pic13 from "./AvatarComponents/Pics/13.png";

  // console.log(user.username)
//   const [image, setImage] = useState("");

//   const handleImageChange = (profileImage) => {
//     setImage(profileImage);
//   };


//     <div className="font-sans m-auto w-80 p-4 border-4 border-black rounded-md lg:max-w-lg bg-gray-200">
//       <div className="text-center space-y-2">
//         <h3 className="text-2xl font-sans font-extrabold">
//           {user.username.toUpperCase()}
//         </h3>
//       </div>
//       <div className="m-auto">
//         <Avatar size={64} icon="user" src={image} />
//         <ProfilePicChanger
//           handleImageChange={handleImageChange}
//           pic1={Pic1}
//           pic2={Pic2}
//           pic3={Pic3}
//           pic4={Pic4}
//           pic5={Pic5}
//           pic6={Pic6}
//           pic7={Pic7}
//           pic8={Pic8}
//           pic9={Pic9}
//           pic10={Pic10}
//           pic11={Pic11}
//           pic12={Pic12}
//           pic13={Pic13}
//         />
//       </div>
//     </div>
//   );
// }
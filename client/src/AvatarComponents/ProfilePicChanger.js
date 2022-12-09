// // import { Avatar } from "antd";
// import { Button, Modal } from "antd";
// import { useState } from "react";

// function ProfilePicChanger({
//   handleImageChange,
//   pic1,
//   pic2,
//   pic3,
//   pic5,
//   pic6,
//   pic7,
//   pic8,
//   pic9,
//   pic10,
//   pic11,
//   pic12,
//   pic13,
// }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const imagesArray = [
//     pic1,
//     pic2,
//     pic3,
//     pic5,
//     pic6,
//     pic7,
//     pic8,
//     pic9,
//     pic10,
//     pic11,
//     pic12,
//     pic13,
//   ];

//   const imageMapper = imagesArray.map((image) => {
//     return (
//       <img
//         className="inline-flex"
//         src={image}
//         onClick={() => handleImageChange(image)}
//         alt="avatar"
//       />
//     );
//   });

//   return (
//     <div className="text-center">
//       <Button
//         className="bg-orange-200 p-1 text-xs rounded-md border-2 border-orange-500 hover:scale-105"
//         onClick={showModal}
//       >
//         <h5 className="text-center">Change Avatar</h5>
//       </Button>
//       <Modal
//         title="Choose Your Avatar:"
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         {imageMapper}
//       </Modal>
//     </div>
//   );
// }

// export default ProfilePicChanger;

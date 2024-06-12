// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../../css/Chat.css";
// import { Button, Drawer, Space, notification } from "antd";
// import type { DrawerProps } from "antd";
// import svg from "../../images/svg/chat_bot.svg";
// function Chat() {
//   const [open, setOpen] = useState(false);
//   const [size, setSize] = useState<DrawerProps["size"]>();
//   const [userAllMessage, setUserAllMessage] = useState<string[]>([]);
//   const [userOneMessage, setUserOneMessage] = useState<string>("");
//   const fetchData = async () => {
//     try {
//       const response = await axios.post(
//         "https://api.coze.com/open_api/v2/chat",
//         {
//           conversation_id: "123",
//           bot_id: "7372605356138758150",
//           user: "29032201862555",
//           query: `${userOneMessage}`,
//           stream: false,
//         },
//         {
//           headers: {
//             Authorization:
//               "Bearer pat_t66PDpqOvs2CGvJibklCpBDWAHOiQDGnexR48yI5kX8l434x7AcwsJE6ZYUcqaSI",
//             "Content-Type": "application/json",
//             Accept: "*/*",
//             Host: "api.coze.com",
//             Connection: "keep-alive",
//           },
//         }
//       );
//       console.log("Response data:", response.data);
//       setUserAllMessage([...userAllMessage, response.data.messages[1].content]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const showLargeDrawer = () => {
//     setSize("large");
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const showNotification = () => {
//     notification.info({
//       message: `Азирет менеджер`,
//       description: "Меня зовут Азирет, чем я могу вам помочь?",
//       duration: 2.5,
//       placement: "bottomRight",
//       style: {
//         position: "fixed",
//         right: "100px",
//         bottom: "10px",
//         backgroundColor: "#fff",
//       },
//       onClick() {},
//     });
//   };

//   useEffect(() => {
//     if (!open) {
//       showNotification();
//     }
//   }, [open]);
//   const addMessage = () => {
//     if (userOneMessage.trim()) {
//       setUserAllMessage([...userAllMessage, userOneMessage.trim()]);
//       setUserOneMessage("");
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUserOneMessage(e.target.value);
//   };

//   const handleKeyPress = (e: any) => {
//     if (e.key === "Enter") {
//       addMessage();
//       setUserOneMessage("");
//       fetchData();
//     }
//   };
//   console.log(userAllMessage);

//   return (
//     <div className="mt-[30px]">
//       <Space>
//         <Button
//           style={{ background: "none", border: "none" }}
//           onClick={showLargeDrawer}
//         >
//           <img src={svg} alt="" />
//         </Button>
//       </Space>
//       <Drawer
//         title={`чат с менеджером`}
//         placement="right"
//         size={size}
//         onClose={onClose}
//         open={open}
//         style={{ background: "#232323", color: "white", fontSize: "24px" }}
//         extra={
//           <Space>
//             <Button type="primary" onClick={onClose}>
//               закрыть
//             </Button>
//           </Space>
//         }
//       >
//         <div className="flex flex-col gap-[25px]">
//           <div
//             className="flex flex-col items-end gap-[25px] scrool__chat"
//             style={{ height: "82vh", overflow: "scroll" }}
//           >
//             {userAllMessage.map((el: string, inx: number) => (
//               <div className="chat__client__message" key={inx}>
//                 <h1 className="text-end">{el}</h1>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center">
//             <input
//               onChange={(e) => setUserOneMessage(e.target.value)}
//               type="text"
//               value={userOneMessage}
//               onKeyPress={handleKeyPress}
//               className="input__chat"
//               placeholder="text"
//             />
//             <button onClick={addMessage}>отправить</button>
//           </div>
//         </div>
//       </Drawer>
//     </div>
//   );
// }

// export default Chat;
import axios from "axios";
import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
import "../../css/Chat.css";
import { Button, Drawer, Space, notification } from "antd";
import type { DrawerProps } from "antd";
import svg from "../../images/svg/chat_bot.svg";

function Chat() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();
  const [userAllMessage, setUserAllMessage] = useState<string[]>([]);
  const [userOneMessage, setUserOneMessage] = useState<string>("");

  const fetchData = async (message: string) => {
    try {
      const response = await axios.post(
        "https://api.coze.com/open_api/v2/chat",
        {
          conversation_id: "123",
          bot_id: "7372605356138758150",
          user: "29032201862555",
          query: message,
          stream: false,
        },
        {
          headers: {
            Authorization:
              "Bearer pat_t66PDpqOvs2CGvJibklCpBDWAHOiQDGnexR48yI5kX8l434x7AcwsJE6ZYUcqaSI",
            "Content-Type": "application/json",
            Accept: "*/*",
            Host: "api.coze.com",
            Connection: "keep-alive",
          },
        }
      );
      console.log("Response data:", response.data);
      setUserAllMessage((prevMessages) => [
        ...prevMessages,
        response.data.messages[1].content,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showNotification = () => {
    notification.info({
      message: `Азирет менеджер`,
      description: "Меня зовут Азирет, чем я могу вам помочь?",
      duration: 2.5,
      placement: "bottomRight",
      style: {
        position: "fixed",
        right: "100px",
        bottom: "10px",
        backgroundColor: "#fff",
      },
      onClick() {},
    });
  };

  useEffect(() => {
    if (!open) {
      showNotification();
    }
  }, [open]);

  const addMessage = () => {
    if (userOneMessage.trim()) {
      setUserAllMessage((prevMessages) => [
        ...prevMessages,
        userOneMessage.trim(),
      ]);
      fetchData(userOneMessage.trim());
      setUserOneMessage("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserOneMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };

  console.log(userAllMessage);

  return (
    <div className="mt-[30px]">
      <Space>
        <Button
          style={{ background: "none", border: "none" }}
          onClick={showLargeDrawer}
        >
          <img src={svg} alt="" />
        </Button>
      </Space>
      <Drawer
        title={`чат с менеджером`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        style={{ background: "#232323", color: "white", fontSize: "24px" }}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              закрыть
            </Button>
          </Space>
        }
      >
        <div className="flex flex-col gap-[25px]">
          <div
            className="flex flex-col items-end gap-[25px] scrool__chat"
            style={{ height: "82vh", overflowY: "scroll" }}
          >
            {userAllMessage.map((el: string, inx: number) => (
              <div className="chat__client__message" key={inx}>
                <h1 className="text-end">{el}</h1>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              onChange={handleInputChange}
              type="text"
              value={userOneMessage}
              onKeyPress={handleKeyPress}
              className="input__chat"
              placeholder="text"
            />
            <button onClick={addMessage}>отправить</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Chat;

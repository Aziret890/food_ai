// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../../css/Chat.css";
// import { Button, Drawer, Flex, Space, notification } from "antd";
// import type { DrawerProps } from "antd";
// import svg from "../../images/svg/chat_bot.svg";
// function Chat() {
//   const [open, setOpen] = useState(false);
//   const [size, setSize] = useState<DrawerProps["size"]>();
//   const [dataMsg, setDataMsg] = useState([]);

//   useEffect(() => {
//     try {
//       axios
//         .post(
//           "https://api.coze.com/open_api/v2/chat",
//           {
//             conversation_id: "123",
//             bot_id: "7372605356138758150",
//             user: "29032201862555",
//             query: "привет",
//             stream: false,
//           },
//           {
//             headers: {
//               Authorization:
//                 "pat_t66PDpqOvs2CGvJibklCpBDWAHOiQDGnexR48yI5kX8l434x7AcwsJE6ZYUcqaSI",
//               "Content-Type": "application/json",
//               Accept: "/",
//               Host: "api.coze.com",
//               Connection: "keep-alive",
//             },
//           }
//         )
//         .then((res: any) => setDataMsg(res.data.messages))
//         .catch((e) => console.log(e));
//     } catch (error) {
//       console.log("ee", error);
//     }
//   }, []);

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
//       duration: 5, // Duration in seconds
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
//   }, []);
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
//             <Button onClick={onClose}>Cancel</Button>
//             <Button type="primary" onClick={onClose}>
//               OK
//             </Button>
//           </Space>
//         }
//       >
//         <div className="flex flex-col">
//           <Flex style={{ height: "82vh" }}>
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//           </Flex>
//           {/* <Input /> */}
//           <div className="input-container">
//             <input type="text" id="input" />
//             <label htmlFor="input" className="label">
//               Enter Text
//             </label>
//             <div className="underline"></div>
//           </div>
//         </div>
//       </Drawer>
//     </div>
//   );
// }

// export default Chat;
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/Chat.css";
import { Button, Drawer, Space, notification } from "antd";
import type { DrawerProps } from "antd";
import svg from "../../images/svg/chat_bot.svg";

function Chat() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();
  const [dataMsg, setDataMsg] = useState([]);
  const [userAllMessage, setUserAllMessage] = useState<string[]>([]);
  const [userOneMessage, setUserOneMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.coze.com/open_api/v2/chat",
          {
            conversation_id: "123",
            bot_id: "7372605356138758150",
            user: "29032201862555",
            query: "привет",
            stream: false,
          },
          {
            headers: {
              Authorization:
                "pat_t66PDpqOvs2CGvJibklCpBDWAHOiQDGnexR48yI5kX8l434x7AcwsJE6ZYUcqaSI",
              "Content-Type": "application/json",
              Accept: "/",
              Host: "api.coze.com",
              Connection: "keep-alive",
            },
          }
        );
        console.log("Response data:", response.data); // Added logging
        setDataMsg(response.data.messages);
      } catch (error) {
        console.error("Error fetching data:", error); // Enhanced error logging
      }
    };

    fetchData();
  }, []);

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
      duration: 5, // Duration in seconds
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
      setUserAllMessage([...userAllMessage, userOneMessage.trim()]);
      setUserOneMessage(""); // Clear the input field after adding the message
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserOneMessage(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      addMessage();
      setUserOneMessage(""); // Clear the input field after adding the message
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
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col items-end gap-[25px]" style={{ height: "82vh" }}>
            {userAllMessage.map((el: string, inx: number) => (
              <div className="chat__client__message" key={inx}>
                <h1 className="text-end">{el}</h1>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              onChange={(e) => setUserOneMessage(e.target.value)}
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

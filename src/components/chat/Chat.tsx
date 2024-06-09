import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/Chat.css";
import {
  Button,
  Drawer,
  Flex,
  Space,
  notification,
} from "antd";
import type { DrawerProps } from "antd";
import svg from "../../images/svg/chat_bot.svg";
function Chat() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();
  const [dataMsg, setDataMsg] = useState([]);

  useEffect(() => {
    if (isOpen) {
      axios
        .post(
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
                "Bearer pat_t66PDpqOvs2CGvJibklCpBDWAHOiQDGnexR48yI5kX8l434x7AcwsJE6ZYUcqaSI",
              "Content-Type": "application/json",
              Accept: "/",
              Host: "api.coze.com",
              Connection: "keep-alive",
            },
          }
        )
        .then((res: any) => setDataMsg(res.data.messages));
    }
  }, [isOpen]);

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
  }, []);
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
        style={{ background: "#232323", color:'white' , fontSize:'24px' }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="flex flex-col">
          <Flex style={{ height: "82vh" }}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Flex>
          {/* <Input /> */}
          <div className="input-container">
            <input type="text" id="input" />
            <label htmlFor="input" className="label">
              Enter Text
            </label>
            <div className="underline"></div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Chat;

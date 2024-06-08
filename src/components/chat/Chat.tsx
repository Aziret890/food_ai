import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../css/Cart.module.css";
import { Button, Drawer, Space, notification } from "antd";
import type { DrawerProps } from "antd";
import svg from "../../images/svg/chat_bot.svg";
function Chat() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();
  const [dataMsg, setDataMsg] = useState([]);

  // useEffect(() => {
  //   if (isOpen) {
  //     axios
  //       .post(
  //         "https://api.coze.com/open_api/v2/chat",
  //         {
  //           conversation_id: "123",
  //           bot_id: "7372605356138758150",
  //           user: "29032201862555",
  //           query: "привет",
  //           stream: false,
  //         },
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer pat_t66PDpqOvs2CGvJibklCpBDWAHOiQDGnexR48yI5kX8l434x7AcwsJE6ZYUcqaSI",
  //             "Content-Type": "application/json",
  //             Accept: "/",
  //             Host: "api.coze.com",
  //             Connection: "keep-alive",
  //           },
  //         }
  //       )
  //       .then((res: any) => setDataMsg(res.data.messages));
  //   }
  // }, [isOpen]);

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
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
      duration: 3500,
      placement: "bottomRight",
    });
  };
  return (
    <div>
      <Button
        style={{ background: "none", border: "none" }}
        onClick={showNotification}
      >
        <img src={svg} alt="" />
      </Button>
      <Space>
        <Button type="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default Chat;

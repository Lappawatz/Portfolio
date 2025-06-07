import React from "react";
import { Form, Input, Button, Card, Textarea } from "@heroui/react";

export default function Message({ onClose }) {
  const [action, setAction] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("http://127.0.0.1:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      alert(`✅ Message sent!\nName: ${data.name}\nEmail: ${data.email}`);
      if (onClose) onClose(); // ปิด modal ถ้า onClose ถูกส่งมา
      
    } catch (error) {
      console.error("Submit error", error);
      setAction(`error ${error.message}`);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center  "
    >
      {/* input fields เหมือนเดิม */}
      <h1 className="m-2 text-2xl font-bold">Send a Message</h1>
      <Input name="name" label="Your name" isRequired className="" />
      <Input name="email" label="Email" type="email" isRequired />
      <Textarea name="message" label="Message" isRequired />
      <Button color="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}

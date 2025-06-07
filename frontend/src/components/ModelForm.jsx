import React from "react";
import { Form, Input, Button, Card, Textarea } from "@heroui/react";
import { API_URL } from "../page/url.jsx";

export default function Message({ onClose }) {
  const [action, setAction] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(API_URL + "/api/messages", {
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
      className="flex flex-col gap-4 items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 sm:p-6"
    >
      <h1 className="m-2 text-2xl font-bold text-center">Send a Message</h1>
      <Input name="name" label="Your name" isRequired className="w-full" />
      <Input
        name="email"
        label="Email"
        type="email"
        isRequired
        className="w-full"
      />
      <Textarea
        name="message"
        label="Message"
        isRequired
        className="w-full"
        minRows={3}
      />
      <Button color="primary" type="submit" className="w-full">
        Send
      </Button>
    </Form>
  );
}

import React from "react";
import { Form, Input, Button, Card } from "@heroui/react";
import { API_URL } from "./url.jsx"; // Adjust the import path as necessary
export default function App() {
  const [action, setAction] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    setAction(`submit ${JSON.stringify(data)}`);

    try {
      const res = await fetch(API_URL + "/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.skill,
          category: data.category,
        }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setAction(`✅ Skill saved: ${data.skill} (${data.category})`);
    } catch (error) {
      console.error("Error submitting form:", error);
      setAction(`error ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="card bg-slate- max-w-2xl mx-auto py-64 justify-center items-center  ">
        <Card className="w-full py-10 ">
          <h1 className="text-3xl text-center font-bold text-primary dark:text-white mb-6">
            Skill Form
          </h1>
          <div className="flex items-center justify-center">
            <Form
              className="w-full max-w-xs flex flex-col gap-4 items-center"
              onReset={() => setAction("reset")}
              onSubmit={(e) => {
                handleSubmit(e);
                setAction("submit");
              }}
            >
              <Input
                isRequired
                errorMessage="Please enter a valid skill"
                label="Skill"
                labelPlacement="outside"
                name="skill"
                placeholder="Enter your skill"
                type="text"
              />

              <Input
                isRequired
                errorMessage="Please enter a valid category"
                label="Category"
                labelPlacement="outside"
                name="category"
                placeholder="Enter your category skill"
                type="text"
              />
              <div className="flex gap-2">
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button type="reset" variant="flat">
                  Reset
                </Button>
              </div>
              {action && (
                <div className="text-small text-default-500">
                  Action: <code>{action}</code>
                </div>
              )}
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}

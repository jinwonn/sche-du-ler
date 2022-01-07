import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { action } from "@storybook/addon-actions/dist/preview";

export default function Form(props) {
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value="Daniel"
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers}
          value={3}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={action("onCancel")}>Cancel</Button>
          <Button confirm onClick={action("onConfirm")}>Save</Button>
        </section>
      </section>
    </main>
  )
}
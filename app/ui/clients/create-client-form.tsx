"use client";
import { useState } from "react";
import EVInput from "../ev-Input";
import { ClientDto, ClientIn } from "@/app/lib/definitions";
import { EButton } from "../loans/buttons";

export default function CreateClientForm({
  className,
}: {
  className?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <form className={`${className} grid gap-4`}>
      <div className="font-bold text-lg py-2 ">New Client</div>
      <EVInput
        label="Name"
        className="grid"
        name="name"
        type="text"
        value={formData.name}
        onChange={(v: string) => {
          setFormData({
            ...formData,
            name: v,
          });
        }}
      />
      <EVInput
        label="Email Address"
        className="grid"
        name="email"
        type="email"
        value={formData.name}
        onChange={(v: string) => {
          setFormData({
            ...formData,
            email: v,
          });
        }}
      />
      <EVInput
        label="Phone Number"
        className="grid"
        name="phone_number"
        type="number"
        value={formData.name}
        onChange={(v: string) => {
          setFormData({
            ...formData,
            phone: v,
          });
        }}
      />
      <EButton type="submit" className="px-4 py-2">
        Submit
      </EButton>
    </form>
  );
}

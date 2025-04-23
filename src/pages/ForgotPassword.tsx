import React, { useState } from "react";
import FormLayout from "common/components/templates/FormLayout";
import ForgetPasswordSection from "common/components/organisms/ForgetPasswordSection";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const formData = new URLSearchParams();
        formData.append("email", email);
  
        const response = await axios.put(
          "https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/password/forgot",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
  
        if (response.status === 200) {
          toast.success("Password reset link sent successfully!");
        }
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
        console.error("Error:", err);
      }
    };

  return (
    <FormLayout>
      <ForgetPasswordSection
        data={email}
        onChange={(e) => setEmail(e.target.value)}
        onSubmit={() => handleSubmit(new Event("submit") as unknown as React.FormEvent)} 
      />
    </FormLayout>
  );
};

export default ForgotPassword;

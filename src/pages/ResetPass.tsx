import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FormLayout from "common/components/templates/FormLayout";
import ChangePasswordForm from "common/components/molecules/ChangePasswordForm";

const ResetPass = () => {
  const navigate = useNavigate()
  const { tokenId } = useParams(); 
  const [formData, setFormData] = useState({
    oldPassword: "", 
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        password: formData.newPassword,
        tokenId,
      };

      const response = await axios.put(
        "https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/password/reset",
        payload
      );

      if (response.status === 200) {
        toast.success("Password reset successfully!");
        navigate('/login')
      }
    } catch (error: any) {
      const errMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errMsg);
    }
  };

  return (
    <>
      <FormLayout>
        <div>
          <h1 className="heading">Reset Password</h1>
          <ChangePasswordForm
            data={formData}
            onChange={handleChange}
            onSubmit={() => handleSubmit(new Event("submit") as unknown as React.FormEvent)} 
          />
        </div>
      </FormLayout>
     
    </>
  );
};

export default ResetPass;

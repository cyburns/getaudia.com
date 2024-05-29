"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TextField, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FIREBASE_STORE } from "@/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import AudiaTextLogo from "@/public/Audia-5-29-2024.png";
import AudiaApp from "@/public/audia-app.png"

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const database = FIREBASE_STORE;

  const handleSubmit = async () => {
    if (!email || !name) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const newData = {
        email,
        name,
        createdAt: new Date(),
      };

      await addDoc(collection(database, "subscribers"), newData);
      toast.success("Thank you for joining!");

      setEmail("");
      setName("");
      setErrorMessage("");
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const mediumScreenSize = useMediaQuery("(min-width:1300px)");

  return (
    <section className="flex flex-col sm:flex-row items-center px-4 mt-[-1rem]">
      <div className="flex flex-col max-w-sm ">
        <div className="flex justify-center items-center">
          <Image
            src={AudiaTextLogo}
            alt="Portrait"
            width="200"
            priority={true}
            quality={100}
          />
        </div>
        <h1 className="text-black text-md font-medium mt-5">
          Join our mailing list to get updates as soon as they come out.
        </h1>
        <div className="mt-5 flex flex-col ">
          <TextField
            id="outlined-basic"
            label="What's your email?"
            variant="outlined"
            sx={{ background: "#fafafa" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="What's your full name?"
            variant="outlined"
            sx={{ background: "#fafafa", marginTop: 1, color: "#fff" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mt-2">
            <p className="text-red-500 text-sm">{errorMessage}</p>
          </div>

          <Button
            onClick={handleSubmit}
            className="bg-[#0295F6] hover:bg-[#52baff] text-white text-lg mt-5"
            variant="contained"
            disabled={isLoading}
            sx={{
              marginTop: 2,
              textTransform: "none",
              height: 50,
              fontSize: 20,
            }}
          >
            {isLoading ? (
              <svg
                aria-hidden="true"
                className="w-8 h-8 animate-spin text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Form;

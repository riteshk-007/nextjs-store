"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "./Firebase";
import { Context } from "./Context";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [file, setFile] = useState(null);
  const [uploding, setUploding] = useState(false);
  const [media, setMedia] = useState("");
  const storage = getStorage(app);
  const { setMessage, setError } = useContext(Context);

  // upload image
  useEffect(() => {
    const Upload = async () => {
      setUploding(true);
      const name = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploding(false);
          });
        }
      );
    };

    file && Upload();
  }, [file]);

  // create Product
  const fetchProduct = async () => {
    try {
      if (media === undefined) {
        setError(true);
        setMessage("Please upload an image");
        return;
      }
      if (uploding) {
        setError(true);
        setMessage("Please wait while image is uploading");
        return;
      }
      {
        const res = await axios.post("/api/product", {
          name,
          price,
          description,
          category,
          mainImage: media,
          size,
        });
        setProducts(res.data);
      }
    } catch (error) {
      setError(true);
      setMessage(error.message);
      console.log(error);
      return;
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        file,
        setFile,
        uploding,
        setMedia,
        fetchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "./Firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [uploading, setUploading] = useState(false);
  const storage = getStorage(app);
  const route = useRouter();

  const [products, setProducts] = useState([]);

  // upload image
  useEffect(() => {
    const upload = () => {
      setUploading(true);
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
            setUploading(false);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  // create Product
  const fetchProduct = async (e) => {
    e.preventDefault();
    try {
      if (media === undefined) {
        toast.error("Please upload an image");

        return;
      }
      if (uploading) {
        toast.error("Please wait while image is uploading");
        return;
      }
      {
        const res = await axios.post("/api/product", {
          name: name,
          price: price,
          description: description,
          category: category,
          mainImage: media,
        });
        route.push("/products");
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setFile(null);
        setMedia("");
        toast.success("Product created successfully");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);

      return;
    }
  };
  //  get all products
  useEffect(() => {
    axios.get("/api/product").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <ProductContext.Provider
      value={{
        uploading,
        setMedia,
        fetchProduct,
        name,
        setName,
        price,
        setPrice,
        description,
        setDescription,
        category,
        setCategory,
        file,
        setFile,
        media,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

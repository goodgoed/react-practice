import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useForm, useWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { X } from "react-feather";
import { ReactComponent as CloudUpload } from "../assets/cloud-upload.svg";
import { axiosInstance } from "../lib/axios";

import ErrorMessage from "./ErrorMessage";

Modal.setAppElement("#root");

const PostModal = ({
  isOpen,
  onRequestClose,
  id,
  defaultValue = { title: null, images: [], content: null, priority: false },
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [images, setImages] = useState(defaultValue.images || []);
  const imageWatch = useWatch({ control, name: "images" });

  const buttonDesc = id ? "수정" : "등록";

  const deleteImage = async (id) => {
    return await axiosInstance.delete(`/upload/files/${id}`, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });
  };

  const onSubmit = (data) => {
    const body = new FormData();

    if (data["images"].length > 0) {
      Array.from(data["images"]).forEach((image) =>
        body.append("files.images", image)
      );
    }
    const subBody = {
      author: user.id,
      title: data.title,
      content: data.content,
      priority: data.priority,
    };
    body.append("data", JSON.stringify(subBody));

    if (id) {
      const needsDeleteImages = defaultValue.images.filter((image) => {
        return !images.includes(image);
      });

      fetch(import.meta.env.VITE_API_BASE_URL + "/posts/" + id, {
        method: "PUT",
        body,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            const deletePromises = needsDeleteImages.map((item) => {
              return deleteImage(item.id);
            });
            Promise.all(deletePromises).then(() => {
              console.log("Successfully updated the post!");
              navigate("/posts");
            });
          } else {
            throw new Error("PUT FAILED");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(import.meta.env.VITE_API_BASE_URL + "/posts?populate=*", {
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("Successfully added the post!");
            location.reload();
          } else {
            throw new Error("POST FAILED");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleFilter = (name) => {
    const arr = images.filter((item) => item.name !== name);
    setImages(arr);
  };

  useEffect(() => {
    if (imageWatch) {
      setImages((prev) => [...prev, ...Array.from(imageWatch)]);
    }
  }, [imageWatch]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
      className={{
        base: "absolute bg-white border-2 outline-none p-[20px] w-1/2 top-[15%] left-1/4 animate-appear-modal",
        afterOpen: "",
        beforeClose: "",
      }}
    >
      <div className="flex flex-col border-t-2 border-navy-400 w-full py-8 px-8 gap-4">
        <>
          <div className="flex items-center gap-4">
            <label htmlFor="title" className="basis-1/12 text-sm">
              제목
            </label>
            <div className="basis-9/12 flex flex-col">
              <input
                type="text"
                {...register("title", { required: true })}
                className={`border-2 rounded-md py-2 px-2 ${
                  errors.title ? "border-red-300" : "border-gray-300"
                }`}
                defaultValue={defaultValue.title}
              />
              {errors.title && (
                <ErrorMessage message="제목을 입력해주세요" className="mt-2" />
              )}
            </div>
            <div className="ml-auto">
              <input
                type="checkbox"
                {...register("priority")}
                className="mr-2"
                defaultChecked={defaultValue.priority}
              />
              <label htmlFor="priority" className="font-bold">
                중요
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="content" className="basis-1/12 mr-4 text-sm">
              본문
            </label>
            <textarea
              {...register("content")}
              className="border-2 border-gray-300 rounded-md basis-9/12 py-2 px-2"
              rows={10}
              defaultValue={defaultValue.content}
            />
          </div>
          <div className="flex">
            <div className="basis-1/12 pt-2 mr-4 text-sm">첨부파일</div>
            <div className="flex flex-col basis-9/12 border-gray-300 rounded-md border-2 ">
              <label
                htmlFor="image"
                className="cursor-pointer text-gray-400 flex items-center justify-center flex-col gap-2 py-4 border-b-[1px] rounded-md border-gray-300 "
              >
                <CloudUpload className="w-12 h-12 fill-gray-400" />
                <span>첨부파일을 선택할 수 있습니다.</span>
              </label>
              <input
                type="file"
                id="image"
                {...register("images")}
                className="hidden"
                multiple
              />
              <div className="flex flex-col gap-2">
                {images.length === 0
                  ? ""
                  : images.map((image, index) => {
                      return (
                        <div key={image.name} className="flex px-4 py-2">
                          <span className="text-gray-400">{image.name}</span>
                          <div
                            className="ml-auto cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFilter(image.name);
                            }}
                          >
                            <X className="text-red-300" />
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 mt-4 ">
            <input
              type="submit"
              value={buttonDesc}
              className="py-2 px-4 bg-navy-400 text-white rounded-md text-md cursor-pointer"
              onClick={handleSubmit(onSubmit)}
            />
            <button
              type="button"
              className="py-2 px-4 bg-gray-300 rounded-md"
              onClick={(e) => {
                onRequestClose(e);
              }}
            >
              닫기
            </button>
          </div>
        </>
      </div>
    </Modal>
  );
};

export default PostModal;

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ContentCopyOutlined, TaskAlt } from "@mui/icons-material";

 
type CopyProps = {
  color: string;
};

const Copy = ({ color }: CopyProps) => {
   const [isCopied, setIsCopied] = useState(false);
 
   const handleCopyContent = async (text: string) => {
    try {
        setIsCopied(true);
        await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleCopyClick = () => {
    handleCopyContent("test")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <div className='copy-form' onClick={() => handleCopyContent(color)}>
        Copy the color 
        <IconButton aria-label="delete" size="small" onClick={handleCopyClick}>
         {isCopied ? (
          <TaskAlt style={{ color: "#13A206" }} />
        ) : (
          <ContentCopyOutlined />
        )}
        </IconButton>
    </div>
  );
};

export default Copy;

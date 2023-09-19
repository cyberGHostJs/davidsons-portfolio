import React, { useContext, useEffect, useState } from "react";
import { aboutMessageData, codingMessageData, gamingMessageData, highSchoolMessageData, skatingMessageData, universityMessageData } from "../utils/Data"; // Import your message data
import { viewContext } from "../home-screen/Home";

const MessageComponent = () => {
  const maxLineLength = 38; // Maximum characters per line
  const [messageDisplayed, setMessageDisplayed] = useState('null')
  const {view} = useContext(viewContext)
  useEffect(()=>{
    if (view === 'about-me'){
      setMessageDisplayed(aboutMessageData)
    } else if (view === 'coding'){
      setMessageDisplayed(codingMessageData)
    }else if (view === 'gaming'){
      setMessageDisplayed(gamingMessageData)
    }else if (view === 'skating'){
      setMessageDisplayed(skatingMessageData)
    }else if (view === 'high-school'){
      setMessageDisplayed(highSchoolMessageData)
    }else if (view === 'university'){
      setMessageDisplayed(universityMessageData)
    }
  },[view])


  const formatMessage = (message) => {
    const paragraphs = message.split("\n"); // Split message into paragraphs

    return paragraphs.map((paragraph, index) => {
      const lines = [];
      let remainingText = paragraph;

      while (remainingText.length > maxLineLength) {
        // Split the paragraph into lines of maxLineLength characters
        const line = remainingText.slice(0, maxLineLength);
        lines.push(`* ${line}`);
        remainingText = remainingText.slice(maxLineLength);
      }

      if (remainingText.length > 0) {
        if (!remainingText.includes('/**') && !remainingText.includes('**/')) {
          // Check if the line doesn't start with '**' or '*/'
          lines.push(`* ${remainingText}`);
        } else {
          lines.push(remainingText); // Keep the line as is
        }
      }
  

      return (
        <p key={index} style={{ padding: "0", margin: "0" }}>
          {lines.map((line, lineIndex) => (
            <span key={lineIndex}>
              {line}
              <br />
            </span>
          ))}
        </p>
      );
    });
  };

  return (
    <div>
      {formatMessage(messageDisplayed).map((formattedMessage, index) => (
        <div className="MessageComponentContainer" key={index}>
          <div className="index ssNoDisplay">{index + 1}</div>
          <div className="formattedMessage ">{formattedMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageComponent;

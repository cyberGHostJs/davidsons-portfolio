import React from "react";
import { messageData } from "../utils/Data"; // Import your message data

const MessageComponent = () => {
  const maxLineLength = 38; // Maximum characters per line

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
      {formatMessage(messageData).map((formattedMessage, index) => (
        <div className="" style={{ display: 'flex' }} key={index}>
          <div className="" style={{ width: '5%', display: 'flex', marginRight: '5%', justifyContent: 'center'}}>{index + 1}</div>
          <div className="" style={{ width: '85%'}}>{formattedMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageComponent;

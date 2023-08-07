import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const CodeSnippet = ({
  codeString = `resource "aws_instance" "example" {
  ami = "abc123"

  network_interface {
    # ...
  }
}`,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };
  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  if (!codeString) return null;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SyntaxHighlighter
        language="hcl"
        style={oneDark}
        customStyle={{ fontSize: 14 }}
      >
        {codeString}
      </SyntaxHighlighter>
      <CopyToClipboard text={codeString} onCopy={handleCopy}>
        <button
          className={`absolute top-4 right-4 bg-gray-500 p-1 px-2 rounded-md ${
            isHovering ? 'opacity-100' : 'opacity-0'
          } transition-opacity hover:border-white border border-gray-500`}
        >
          {isCopied ? (
            <span>Copied!</span>
          ) : (
            <div className="flex justify-center items-center">
              <span>Copy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy ml-2"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </div>
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeSnippet;

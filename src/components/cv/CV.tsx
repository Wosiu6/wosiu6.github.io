import './CV.css'; // Import the CSS file
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const CV: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="cv">
      <Document file="cv.pdf">
        <Page pageNumber={1} scale={1.4} renderTextLayer={false} renderAnnotationLayer={true} />
      </Document>
      <div className='buttons'><a
        href="https://www.overleaf.com/read/csrkvckzjnyk#96031f"
        target="_blank"
        rel="noopener noreferrer"
        className="cvLink"
      >CV Source Code</a><a download
        href="cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cvLink"
      >Download CV</a></div>
    </div>
  );
};

export default CV;

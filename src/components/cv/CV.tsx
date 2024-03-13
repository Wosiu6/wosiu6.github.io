import './CV.css'; // Import the CSS file
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV: React.FC = () => {
  return (
    <div className="cv">
      <Document file="cv.pdf">
        <Page pageNumber={1} scale={1.4} renderTextLayer={false} renderAnnotationLayer={true} />
      </Document>
      <div className='buttons'><a
        href="https://www.overleaf.com/read/nqffmtpvswng#038d1d"
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

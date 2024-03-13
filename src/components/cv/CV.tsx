import './CV.css'; // Import the CSS file
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();



const CV: React.FC = () => {
  return (
    <div className="cv">
      <Document file="cv.pdf">
        <Page pageNumber={1} scale={1.5} renderTextLayer={false} renderAnnotationLayer={true} />
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

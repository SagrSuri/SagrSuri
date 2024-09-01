// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import './Certificate.css'
import pdfData from './pdfData.js'
import certificates from './CertificateData.js';

function Certificates() {


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
      if (selectedImage === src) {
        // Close modal if the same image is clicked again
        setSelectedImage(null);
      } else {
        // Open modal with the selected image
        setSelectedImage(src);
      }
    };
  
    const handleCloseModal = () => {
      setSelectedImage(null);
    };
  
    // Effect to handle page scroll
    useEffect(() => {
      if (selectedImage) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }
  
      // Cleanup function to ensure scrolling is re-enabled
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [selectedImage]);


    return (
        <Home>
            <section id="Certificate" className="project bg-slate-200 w-full h-full py-3 dark:bg-slate-900">
                {/* <h1 className="text-center text-4xl font-bold">Certificate</h1> */}

                <div className="flex mt-14 justify-center align-middle flex-wrap gap-10">
                    {certificates.map(certificate => (

                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <img
                                key={certificate.id}
                                className='certificate cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-[1.01] '
                                src={certificate.src}
                                alt={certificate.alt}
                                onClick={() => handleImageClick(certificate.src)}
                            />
                            <a className='font-bold text-blue-500 hover:text-blue-700' target='_blank' href={certificate.verify}>{certificate.verifyText}</a>
                        </div>
                    ))}

                </div>
                <div className="flex mt-14 justify-center align-middle flex-wrap gap-10">
                    {pdfData.map(pdf => (
                        <a key={pdf.id} href={pdf.source}>
                            <img
                                key={pdf.id}
                                className='w-52 pdf cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-[1.01] '
                                src={pdf.src}
                                alt={pdf.alt}
                            // onClick={() => handleImageClick(certificate.src)}
                            />
                        </a>
                    ))}
                </div>

                {selectedImage && (
                    <div className="modal fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out opacity-100" onClick={handleCloseModal}>
                        <img src={selectedImage} alt="Certificate" className="modal-image max-w-full max-h-full object-contain transition-transform duration-500 ease-in-out transform scale-100" />
                    </div>
                )}
            </section>
        </Home>
    )
}

export default Certificates;
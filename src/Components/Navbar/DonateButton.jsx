// eslint-disable-next-line no-unused-vars
import React from 'react';
import toast from 'react-hot-toast';

const DonateButton = () => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor click behavior

    // Custom toast for confirmation
    const confirmDonation = () => {
      toast(
        (t) => (
          <div className="toast-content">
            <p>Are you sure you want to donate?</p>
            <div className="toast-buttons">
              <button
                className="btn-confirm"
                onClick={() => {
                  handleConfirmDonation(true);
                  toast.dismiss(t.id); // Close the toast after user confirmation
                }}
              >
                Yes
              </button>
              <button
                className="btn-cancel"
                onClick={() => {
                  handleConfirmDonation(false);
                  toast.dismiss(t.id); // Close the toast if canceled
                }}
              >
                No
              </button>
            </div>
          </div>
        ),
        { duration: Infinity }
      );
    };

    confirmDonation();
  };

  // Function to handle confirmation response
  const handleConfirmDonation = (confirmed) => {
    if (confirmed) {
      window.open("https://www.buymeacoffee.com/sagarsuri", "_blank", "noopener noreferrer");
      toast.success('Thank you for your support!');
    } else {
      toast.error('Donation cancelled.');
    }
  };

  return (
    <div className="flex items-center xm:hidden sm:hidden md:block xl:block">
      <a
        href="#"
        onClick={handleClick}
        className="relative inline-block group"
      >
        <img
          className="relative z-10 w-20 h-auto sm:w-24 md:w-32 rounded-full shadow-sm transition-transform duration-500 group-hover:scale-110"
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=sagarsuri&button_colour=40DCA5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
          alt="Buy Me A Coffee"
        />
      </a>
    </div>
  );
};

export default DonateButton;

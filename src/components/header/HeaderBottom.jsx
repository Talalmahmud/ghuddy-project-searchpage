"use client";

import React from "react";

const HeaderBottom = () => {
  return (
    <div className=" flex items-start gap-x-4 my-6">
      <button className=" h-[36px] w-[224px] gap-x-2 text-btn-secondary flex justify-center items-center  border-[1px] border-btn-secondary rounded-[70px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <g clip-path="url(#clip0_23908_13395)">
            <path
              d="M11.2423 5.48764L5.99976 8.63364L0.757256 5.48764C0.643544 5.41941 0.507387 5.39915 0.378737 5.43131C0.250087 5.46347 0.139483 5.54543 0.0712556 5.65914C0.00302869 5.77285 -0.0172321 5.90901 0.0149304 6.03766C0.0470929 6.16631 0.129044 6.27691 0.242756 6.34514L5.74276 9.64514C5.82052 9.69186 5.90953 9.71654 6.00026 9.71654C6.09098 9.71654 6.17999 9.69186 6.25776 9.64514L11.7578 6.34514C11.8715 6.27691 11.9534 6.16631 11.9856 6.03766C12.0177 5.90901 11.9975 5.77285 11.9293 5.65914C11.861 5.54543 11.7504 5.46347 11.6218 5.43131C11.4931 5.39915 11.357 5.41941 11.2433 5.48764H11.2423Z"
              fill="#2E6980"
            />
            <path
              d="M11.2423 7.77142L5.99975 10.9169L0.757254 7.77142C0.70095 7.73764 0.638543 7.71528 0.573597 7.70561C0.50865 7.69595 0.442436 7.69917 0.378735 7.7151C0.315034 7.73102 0.255094 7.75934 0.202336 7.79843C0.149578 7.83752 0.105037 7.88662 0.0712541 7.94292C0.0374716 7.99923 0.0151098 8.06163 0.00544548 8.12658C-0.00421883 8.19153 -0.000996362 8.25774 0.0149289 8.32144C0.0470914 8.45009 0.129043 8.5607 0.242754 8.62892L5.74275 11.9289C5.82052 11.9757 5.90953 12.0003 6.00026 12.0003C6.09098 12.0003 6.17999 11.9757 6.25775 11.9289L11.7578 8.62892C11.8715 8.5607 11.9534 8.45009 11.9856 8.32144C12.0177 8.19279 11.9975 8.05663 11.9293 7.94292C11.861 7.82921 11.7504 7.74726 11.6218 7.7151C11.4931 7.68293 11.357 7.70319 11.2433 7.77142H11.2423Z"
              fill="#2E6980"
            />
            <path
              d="M5.99984 7.38671C5.73013 7.38656 5.46553 7.31311 5.23434 7.17421L0.242342 4.17871C0.168416 4.13426 0.107247 4.07144 0.0647822 3.99635C0.0223171 3.92127 0 3.83647 0 3.75021C0 3.66395 0.0223171 3.57916 0.0647822 3.50407C0.107247 3.42899 0.168416 3.36616 0.242342 3.32171L5.23434 0.326211C5.46553 0.187326 5.73014 0.113953 5.99984 0.113953C6.26954 0.113953 6.53415 0.187326 6.76534 0.326211L11.7573 3.32171C11.8313 3.36616 11.8924 3.42899 11.9349 3.50407C11.9774 3.57916 11.9997 3.66395 11.9997 3.75021C11.9997 3.83647 11.9774 3.92127 11.9349 3.99635C11.8924 4.07144 11.8313 4.13426 11.7573 4.17871L6.76534 7.17421C6.53415 7.31311 6.26955 7.38656 5.99984 7.38671ZM1.47184 3.75021L5.74984 6.31671C5.8254 6.36191 5.9118 6.38578 5.99984 6.38578C6.08789 6.38578 6.17428 6.36191 6.24984 6.31671L10.5278 3.75021L6.24984 1.18371C6.17428 1.13851 6.08789 1.11465 5.99984 1.11465C5.9118 1.11465 5.8254 1.13851 5.74984 1.18371L1.47184 3.75021Z"
              fill="#2E6980"
            />
          </g>
          <defs>
            <clipPath id="clip0_23908_13395">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className=" text-base14">Sort By</p>
      </button>
      <button className=" h-[36px] w-[224px] text-btn-secondary  gap-x-2 flex justify-center items-center  border-[1px] border-btn-secondary rounded-[70px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <g clip-path="url(#clip0_23908_84855)">
            <path
              d="M6.5 0C5.31331 0 4.15328 0.351894 3.16658 1.01118C2.17989 1.67047 1.41085 2.60754 0.956726 3.7039C0.5026 4.80026 0.38378 6.00666 0.615291 7.17054C0.846802 8.33443 1.41825 9.40353 2.25736 10.2426C3.09648 11.0818 4.16558 11.6532 5.32946 11.8847C6.49335 12.1162 7.69975 11.9974 8.7961 11.5433C9.89246 11.0892 10.8295 10.3201 11.4888 9.33342C12.1481 8.34673 12.5 7.18669 12.5 6C12.4983 4.40923 11.8656 2.88411 10.7407 1.75926C9.6159 0.634414 8.09077 0.00172054 6.5 0V0ZM11.5 6C11.5006 6.97986 11.2115 7.93801 10.669 8.754L10.073 8.1575C10.0263 8.11065 10 8.04718 10 7.981V7.5C10 7.10218 9.84197 6.72064 9.56066 6.43934C9.27936 6.15804 8.89783 6 8.5 6H7C6.86739 6 6.74022 5.94732 6.64645 5.85355C6.55268 5.75979 6.5 5.63261 6.5 5.5V5.25C6.5 5.1837 6.52634 5.12011 6.57323 5.07322C6.62011 5.02634 6.6837 5 6.75 5C7.08152 5 7.39947 4.8683 7.63389 4.63388C7.86831 4.39946 8 4.08152 8 3.75V3.25C8 3.1837 8.02634 3.12011 8.07323 3.07322C8.12011 3.02634 8.1837 3 8.25 3H8.9395C9.2707 2.99906 9.58816 2.86754 9.823 2.634L10.0115 2.4455C10.4831 2.90954 10.8576 3.46282 11.1131 4.07309C11.3687 4.68335 11.5002 5.33839 11.5 6ZM1.5245 6.4815L3.1035 8.0605C3.24245 8.20035 3.40779 8.31121 3.58993 8.38666C3.77206 8.4621 3.96736 8.50063 4.1645 8.5H5.5C5.63261 8.5 5.75979 8.55268 5.85356 8.64645C5.94732 8.74022 6 8.86739 6 9V10.9745C4.8501 10.8571 3.7762 10.3456 2.96047 9.52666C2.14473 8.70774 1.63739 7.63185 1.5245 6.4815ZM7 10.9745V9C7 8.60218 6.84197 8.22064 6.56066 7.93934C6.27936 7.65804 5.89783 7.5 5.5 7.5H4.1645C4.09876 7.50005 4.03366 7.48714 3.97291 7.462C3.91217 7.43686 3.85698 7.39999 3.8105 7.3535L1.5815 5.1245C1.72459 4.3111 2.06737 3.54595 2.57909 2.89769C3.09081 2.24943 3.75546 1.73835 4.5134 1.41031C5.27134 1.08226 6.09887 0.947508 6.92173 1.01814C7.7446 1.08877 8.53705 1.36258 9.228 1.815L9.116 1.927C9.06894 1.97341 9.0056 1.99961 8.9395 2H8.25C7.91848 2 7.60054 2.1317 7.36612 2.36612C7.1317 2.60054 7 2.91848 7 3.25V3.75C7 3.8163 6.97366 3.87989 6.92678 3.92678C6.8799 3.97366 6.81631 4 6.75 4C6.41848 4 6.10054 4.1317 5.86612 4.36612C5.6317 4.60054 5.5 4.91848 5.5 5.25V5.5C5.5 5.89783 5.65804 6.27936 5.93934 6.56066C6.22065 6.84197 6.60218 7 7 7H8.5C8.63261 7 8.75979 7.05268 8.85356 7.14645C8.94732 7.24022 9 7.36739 9 7.5V7.981C9.00095 8.3122 9.13246 8.62966 9.366 8.8645L10.0345 9.533C9.22023 10.3501 8.14781 10.8595 7 10.9745Z"
              fill="#2E6980"
            />
          </g>
          <defs>
            <clipPath id="clip0_23908_84855">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className=" text-base14">Map</p>
      </button>
    </div>
  );
};

export default HeaderBottom;

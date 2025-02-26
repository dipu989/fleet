import React from "react";
import { COLORS, Colors } from "styles/var/colors";
import { ICON_SIZES, IconSizes } from "styles/var/icon_sizes";

const Android = ({
  size = "medium",
  color = "ui-fleet-black-75",
}: {
  size: IconSizes;
  color?: Colors;
}) => {
  return (
    <svg
      width={ICON_SIZES[size]}
      height={ICON_SIZES[size]}
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.2229 27.609C36.2264 27.6311 36.2299 27.6532 36.2334 27.6755L36.2308 27.6771C36.2708 27.9395 36.3052 28.2038 36.334 28.4697H0.333984C0.362614 28.2048 0.397264 27.9406 0.437906 27.6773L0.441441 27.6544C0.451523 27.589 0.461687 27.5231 0.472641 27.4579C0.547458 27.0082 0.638975 26.5615 0.747 26.1186C1.09124 24.714 1.60318 23.356 2.2718 22.0737C2.65903 21.3295 3.09792 20.6134 3.58523 19.9305C4.47919 18.6776 5.52815 17.5429 6.70711 16.5534C7.3662 16.0006 8.06372 15.4953 8.79441 15.0413C8.79303 15.0386 8.7914 15.0359 8.78975 15.0332C8.7882 15.0307 8.78663 15.0281 8.78527 15.0255C8.60378 14.7119 8.42216 14.3985 8.24054 14.0851C8.05879 13.7715 7.87703 13.4578 7.69542 13.144C7.59975 12.979 7.50411 12.814 7.40846 12.649C7.14896 12.2014 6.88945 11.7538 6.62948 11.3061C6.37513 10.8658 6.12018 10.4259 5.86462 9.98624C5.8043 9.88189 5.75719 9.77389 5.72077 9.66336C5.59985 9.28573 5.61806 8.8773 5.77209 8.51192C5.80163 8.44077 5.83692 8.37144 5.87644 8.30478C6.01706 8.06962 6.21412 7.87324 6.44977 7.73342C6.66437 7.60538 6.90529 7.52786 7.1543 7.50674C7.4671 7.47933 7.78122 7.54172 8.0598 7.68659C8.33838 7.83146 8.56986 8.05279 8.72705 8.32461C8.98116 8.76435 9.23625 9.20492 9.49191 9.64452L10.5573 11.4825C10.747 11.8104 10.9371 12.138 11.1271 12.4657C11.3007 12.7651 11.4744 13.0645 11.6478 13.364C11.6703 13.4037 11.6933 13.4433 11.7164 13.4829C11.7306 13.5074 11.7449 13.5318 11.7589 13.5563C11.9646 13.4752 12.1718 13.3982 12.3805 13.3254C14.1903 12.6954 16.1302 12.3442 18.1492 12.3241C18.2118 12.3233 18.2732 12.3233 18.3354 12.3233C20.6062 12.3233 22.7786 12.7409 24.7811 13.5045C24.8326 13.5241 24.8836 13.5446 24.9351 13.5652L24.9459 13.5695C24.9738 13.5204 25.0021 13.4718 25.0302 13.4233C25.0419 13.4033 25.0535 13.3832 25.0651 13.3632C25.2549 13.0353 25.4449 12.7077 25.6349 12.38C25.8086 12.0806 25.9823 11.7812 26.1557 11.4816L27.2211 9.64382L27.238 9.61462C27.4869 9.18471 27.7363 8.75391 27.9858 8.32391C28.1165 8.09796 28.299 7.90625 28.5183 7.76452C28.7375 7.62278 28.9872 7.53506 29.2469 7.50857C29.3506 7.49806 29.455 7.49722 29.5588 7.50603C29.8074 7.52787 30.0478 7.60524 30.2625 7.73244C30.5665 7.91219 30.8043 8.18522 30.9407 8.51094C31.0404 8.74712 31.0838 9.00322 31.0677 9.25905C31.0515 9.51489 30.9762 9.76348 30.8476 9.98525C30.5937 10.4248 30.3386 10.8656 30.0829 11.3052L29.0175 13.1428C28.8348 13.4587 28.6517 13.7742 28.4687 14.0898C28.288 14.4013 28.1074 14.7128 27.927 15.0244C27.9235 15.0302 27.9203 15.0361 27.9171 15.0421C27.9139 15.048 27.9108 15.0539 27.9073 15.0596C29.0636 15.781 30.135 16.6304 31.1013 17.5915C32.4247 18.9062 33.5371 20.4175 34.399 22.0718C35.2795 23.7602 35.8867 25.5775 36.1981 27.4561C36.2067 27.507 36.2147 27.5578 36.2229 27.609ZM27.9322 21.0133C28.5237 21.9021 28.4189 23.0116 27.6987 23.4911C26.9788 23.9706 25.9154 23.6388 25.3243 22.7497C24.7329 21.8609 24.8378 20.7513 25.5581 20.2718C26.2781 19.7924 27.3412 20.1241 27.9322 21.0133ZM11.1423 20.275C11.8626 20.7546 11.9675 21.8639 11.376 22.7528C10.785 23.6419 9.72172 23.9737 9.00144 23.4942C8.28144 23.0147 8.17667 21.9053 8.76772 21.0161C9.35919 20.1274 10.4219 19.7955 11.1423 20.275Z"
        fill={COLORS[color]}
      />
    </svg>
  );
};

export default Android;

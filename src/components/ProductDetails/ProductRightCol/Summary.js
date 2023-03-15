import React, { useState } from "react";
import ShippingDet from "./Policy";

const Summary = ({ product }) => {
  const [descriptionIsShown, setDescriptionIsShown] = useState(true);

  const [shippingIsShown, setShippingIsShown] = useState(false);

  const hiddenClasses = "hidden";
  const activeClasses =
    "block border border-customBorder p-4 text-sm text-textColor rounded-sm";
  return (
    <div className="mt-14 mb-6">
      <div className="my-4 flex gap-2">
        <button
          className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
            descriptionIsShown ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => {
            setDescriptionIsShown(true);

            setShippingIsShown(false);
          }}
        >
          Description
        </button>

        <button
          className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
            shippingIsShown ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => {
            setDescriptionIsShown(false);

            setShippingIsShown(true);
          }}
        >
          Shipping Details
        </button>
      </div>

      <div className={`${descriptionIsShown ? activeClasses : hiddenClasses}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
        rhoncus felis, vitae imperdiet neque. Maecenas convallis nibh est, a
        semper ex accumsan ac. Integer tincidunt eros dignissim lacus lobortis
        iaculis. Donec est dolor, efficitur sit amet nunc a, consequat porta
        dolor. Vestibulum eu nisi quis dolor tempor placerat. Sed porttitor eu
        sem eget finibus. Pellentesque id arcu lacus. Vivamus condimentum cursus
        elit non pharetra. Sed fermentum luctus mauris, ut mollis mauris
        malesuada quis. In sed rhoncus velit, in sagittis tortor. Curabitur
        hendrerit ex sit amet ante laoreet porttitor. Praesent fringilla nibh
        est, eget bibendum risus vulputate eu. Duis viverra pulvinar eleifend.
        Fusce ut diam arcu. Donec nunc erat, lobortis id ultrices et, molestie
        vel nisi. Aliquam gravida, leo id cursus iaculis, ligula neque convallis
        diam, at dapibus neque lectus nec risus. Suspendisse neque urna,
        pulvinar sed vehicula a, rhoncus et dolor. Ut egestas rhoncus
        condimentum. Donec egestas in nisl vel bibendum. Sed dictum est laoreet
        sem eleifend, sit amet accumsan ante consectetur. Donec et bibendum
        dolor. Curabitur mattis, neque ut eleifend consectetur, lorem erat porta
        eros, a viverra lectus nunc bibendum eros. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Aliquam enim magna, lacinia ac dictum
        eget, faucibus quis tellus. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Mauris auctor tempus
        elit, vitae malesuada ex vulputate sit amet. Vivamus in ornare augue.
        Duis vel libero viverra massa eleifend lacinia at quis augue. Phasellus
        euismod mattis diam at ornare. Proin cursus ligula et erat pulvinar,
        quis aliquam augue mollis. Etiam pulvinar, nisi vel imperdiet vehicula,
        odio ipsum condimentum nisi, vel laoreet urna turpis lacinia eros. Donec
        dolor mi, tincidunt at maximus a, aliquet sed nunc.
      </div>

      <div
        className={`px-6 ${shippingIsShown ? activeClasses : hiddenClasses}`}
      >
        <ShippingDet />
      </div>
    </div>
  );
};

export default Summary;

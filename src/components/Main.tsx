import { useEffect, useState } from "react";
import Subscription from "./Subscription";
import Device from "./Device";

const STORAGE_KEY = "host-onboarding-form";

type CardDetails = {
  number: string;
  expiry: string;
  cvc: string;
};

type DeviceItem = {
  deviceType: string;
  bringYourOwnDevice: boolean;
  serialNumber: string;
  deviceImageName: string;
};

type FormState = {
  selectedPlan: string;
  selectedAdds: string;
  cardDetails: CardDetails;
  devices: DeviceItem[];
};

const getDefaultDevices = (): DeviceItem[] =>
  Array.from({ length: 4 }, () => ({
    deviceType: "",
    bringYourOwnDevice: false,
    serialNumber: "",
    deviceImageName: ""
  }));

const defaultFormState: FormState = {
  selectedPlan: "Best mates",
  selectedAdds: "",
  cardDetails: {
    number: "",
    expiry: "",
    cvc: ""
  },
  devices: getDefaultDevices()
};

const getInitialFormState = (): FormState => {
  if (typeof window === "undefined") {
    return defaultFormState;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return defaultFormState;
    }

    const parsed = JSON.parse(saved) as Partial<FormState>;
    return {
      selectedPlan: parsed.selectedPlan ?? defaultFormState.selectedPlan,
      selectedAdds: parsed.selectedAdds ?? defaultFormState.selectedAdds,
      cardDetails: {
        number: parsed.cardDetails?.number ?? "",
        expiry: parsed.cardDetails?.expiry ?? "",
        cvc: parsed.cardDetails?.cvc ?? ""
      },
      devices:
        parsed.devices?.map((device) => ({
          deviceType: device.deviceType ?? "",
          bringYourOwnDevice: Boolean(device.bringYourOwnDevice),
          serialNumber: device.serialNumber ?? "",
          deviceImageName: device.deviceImageName ?? ""
        })) ?? defaultFormState.devices
    };
  } catch {
    return defaultFormState;
  }
};

const Main = () => {
  const [content] = useState([
    "Location",
    "About",
    "Features",
    "Rules",
    "Pricing",
    "Promotions",
    "Pictures",
    "Insurance",
    "Subscription",
    "Device",
    "Easy Access"
  ]);
  const [completed] = useState([
    "Location",
    "About",
    "Features",
    "Rules",
    "Pricing",
    "Promotions",
    "Pictures",
    "Insurance"
  ]);
  const [selected, setSelected] = useState("Subscription");
  const [formState, setFormState] = useState<FormState>(getInitialFormState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
  }, [formState]);

  const updateCardDetails = (field: keyof CardDetails, value: string) => {
    setFormState((prev) => ({
      ...prev,
      cardDetails: {
        ...prev.cardDetails,
        [field]: value
      }
    }));
  };

  const updateDevice = (index: number, updates: Partial<DeviceItem>) => {
    setFormState((prev) => ({
      ...prev,
      devices: prev.devices.map((device, deviceIndex) =>
        deviceIndex === index ? { ...device, ...updates } : device
      )
    }));
  };

  return (
    <div className="bg-[#FCFCFC]">
      <div className="flex justify-center mt-[68px] mb-[140px]">
        <div className="hidden lg:flex items-center flex-col gap-2.5 mt-[32px]">
          {content.map((val, ind) => {
            return (
              <div
                className={`min-w-[200px] flex items-center justify-between cursor-pointer p-2.5 w-full font-bold ${
                  selected === val
                    ? "text-[#00A3AD] border-l-2 border-l-[#00A3AD] "
                    : completed.includes(val)
                      ? "text-[#026786]"
                      : "text-[#B2B2B2]"
                }`}
                onClick={() => {}}
                key={ind}
              >
                <p>{val}</p>
                {completed.includes(val) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                  >
                    <linearGradient
                      id="ONeHyQPNLkwGmj04dE6Soa_2Tv2g4T4Wtu0_gr1"
                      x1="16"
                      x2="16"
                      y1="2.888"
                      y2="29.012"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#36eb69"></stop>
                      <stop offset="1" stopColor="#1bbd49"></stop>
                    </linearGradient>
                    <circle
                      cx="16"
                      cy="16"
                      r="13"
                      fill="url(#ONeHyQPNLkwGmj04dE6Soa_2Tv2g4T4Wtu0_gr1)"
                    ></circle>
                    <linearGradient
                      id="ONeHyQPNLkwGmj04dE6Sob_2Tv2g4T4Wtu0_gr2"
                      x1="16"
                      x2="16"
                      y1="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopOpacity=".02"></stop>
                      <stop offset="1" stopOpacity=".15"></stop>
                    </linearGradient>
                    <path
                      fill="url(#ONeHyQPNLkwGmj04dE6Sob_2Tv2g4T4Wtu0_gr2)"
                      d="M16,3.25c7.03,0,12.75,5.72,12.75,12.75 S23.03,28.75,16,28.75S3.25,23.03,3.25,16S8.97,3.25,16,3.25 M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13s13-5.82,13-13S23.18,3,16,3 L16,3z"
                    ></path>
                    <g opacity=".2">
                      <linearGradient
                        id="ONeHyQPNLkwGmj04dE6Soc_2Tv2g4T4Wtu0_gr3"
                        x1="16.502"
                        x2="16.502"
                        y1="11.26"
                        y2="20.743"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopOpacity=".1"></stop>
                        <stop offset="1" stopOpacity=".7"></stop>
                      </linearGradient>
                      <path
                        fill="url(#ONeHyQPNLkwGmj04dE6Soc_2Tv2g4T4Wtu0_gr3)"
                        d="M21.929,11.26 c-0.35,0-0.679,0.136-0.927,0.384L15,17.646l-2.998-2.998c-0.248-0.248-0.577-0.384-0.927-0.384c-0.35,0-0.679,0.136-0.927,0.384 c-0.248,0.248-0.384,0.577-0.384,0.927c0,0.35,0.136,0.679,0.384,0.927l3.809,3.809c0.279,0.279,0.649,0.432,1.043,0.432 c0.394,0,0.764-0.153,1.043-0.432l6.813-6.813c0.248-0.248,0.384-0.577,0.384-0.927c0-0.35-0.136-0.679-0.384-0.927 C22.608,11.396,22.279,11.26,21.929,11.26L21.929,11.26z"
                      ></path>
                    </g>
                    <path
                      fill="#fff"
                      d="M10.325,14.825L10.325,14.825c0.414-0.414,1.086-0.414,1.5,0L15,18l6.179-6.179	c0.414-0.414,1.086-0.414,1.5,0l0,0c0.414,0.414,0.414,1.086,0,1.5l-6.813,6.813c-0.478,0.478-1.254,0.478-1.732,0l-3.809-3.809	C9.911,15.911,9.911,15.239,10.325,14.825z"
                    ></path>
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        {selected === "Subscription" && (
          <Subscription
            selectedPlan={formState.selectedPlan}
            selectedAdds={formState.selectedAdds}
            cardDetails={formState.cardDetails}
            onPlanChange={(plan) => {
              setFormState((prev) => ({ ...prev, selectedPlan: plan }));
            }}
            onAddsChange={(adds) => {
              setFormState((prev) => ({ ...prev, selectedAdds: adds }));
            }}
            onCardChange={updateCardDetails}
          />
        )}
        {selected === "Device" && (
          <Device devices={formState.devices} onDeviceChange={updateDevice} />
        )}
      </div>
      <div
        className="w-full flex items-center justify-center"
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px -3px 6px #00000014",
          zIndex: 1000
        }}
      >
        <div className="max-w-[1200px] w-full flex justify-end px-5">
          <button
            className="w-full lg:w-[300px] h-[60px] bg-[#FFCD05] flex items-center justify-center text-[#026786] text-[20px] my-5 font-bold rounded-sm cursor-pointer"
            onClick={() => {
              if (selected === "Subscription") {
                setSelected("Device");
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

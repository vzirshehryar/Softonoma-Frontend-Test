import LockIcon from "../assets/icons/Lock.svg";
import LocationIcon from "../assets/icons/Group 5171.svg";
import MeterIcon from "../assets/icons/e.svg";

type CardDetails = {
  number: string;
  expiry: string;
  cvc: string;
};

type SubscriptionProps = {
  selectedPlan: string;
  selectedAdds: string;
  cardDetails: CardDetails;
  onPlanChange: (plan: string) => void;
  onAddsChange: (addon: string) => void;
  onCardChange: (field: keyof CardDetails, value: string) => void;
};

const Subscription = ({
  selectedPlan,
  selectedAdds,
  cardDetails,
  onPlanChange,
  onAddsChange,
  onCardChange
}: SubscriptionProps) => {
  return (
    <div className="max-w-[1000px] flex flex-col rounded-[8px] lg:border lg:border-[#E6E6E6]">
      <div className="w-full p-5 lg:px-10 lg:py-8">
        <h1 className="text-[32px] text-[#026786] font-bold">
          Subscription plan
        </h1>
        <p className="text-[22px] text-[#4A4A4A]">
          Select the ideal subscription plan for your listing.
        </p>
      </div>

      <div className="p-5 lg:px-10 lg:py-[30px] lg:border lg:border-[#E6E6E6]">
        <h3 className="text-[22px] text-[#4A4A4A] mb-5">Select your plan</h3>
        <div className="flex lg:items-center lg:justify-center flex-col lg:flex-row gap-[15px]">
          <div
            className={`border ${selectedPlan === "Just mates" ? "border-[#00A3AD] bg-[#F2FAFB]" : "border-[#E6E6E6] bg-[#FCFCFC]"} p-[15px] rounded-lg cursor-pointer`}
            onClick={() => onPlanChange("Just mates")}
          >
            <p className="text-[#026786] text-[22px] font-bold">Just mates</p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={LocationIcon} alt="" />
              <span>Bring your own GPS</span>
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={MeterIcon} alt="" />
              <span>Mileage reporting to be done by you</span>
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={LockIcon} alt="" />
              <span>In-person key handover to guests</span>
            </p>
            <p className="text-[22px] text-[#026786] font-bold mt-1">Free</p>
          </div>
          <div
            className={`border ${selectedPlan === "Good mates" ? "border-[#00A3AD] bg-[#F2FAFB]" : "border-[#E6E6E6] bg-[#FCFCFC]"} p-[15px] rounded-lg cursor-pointer`}
            onClick={() => onPlanChange("Good mates")}
          >
            <p className="text-[#026786] text-[22px] font-bold">Good mates</p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={LocationIcon} alt="" />
              <span>Primary GPS included</span>
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={MeterIcon} alt="" />
              <span>Automated mileage calculations</span>
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={LockIcon} alt="" />
              <span>In-person key handover to guests</span>
            </p>
            <p className="text-[22px] text-[#026786] font-bold mt-1">
              $10
              <span className="text-[#026786] text-sm font-normal">/month</span>
            </p>
          </div>
          <div
            className={`border ${selectedPlan === "Best mates" ? "border-[#00A3AD] bg-[#F2FAFB]" : "border-[#E6E6E6] bg-[#FCFCFC]"} p-[15px] rounded-lg cursor-pointer`}
            onClick={() => onPlanChange("Best mates")}
          >
            <p className="text-[#026786] text-[22px] font-bold">Best mates</p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={LocationIcon} alt="" />
              <span>Keyless access technology</span>
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={MeterIcon} alt="" />
              <span>Automated mileage calculations</span>
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#4A4A4A]">
              <img src={LockIcon} alt="" />
              <span>Remote handover to guests</span>
            </p>
            <p className="text-[22px] text-[#026786] font-bold mt-1">
              $30
              <span className="text-[#026786] text-sm font-normal">/month</span>
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="p-5 lg:px-10 lg:py-[30px] lg:border lg:border-[#E6E6E6]">
        <h3 className="text-[22px] text-[#4A4A4A] mb-5">
          Select add-ons for your subscription
        </h3>
        <div className="flex lg:items-center lg:justify-center flex-col lg:flex-row gap-[15px]">
          <div
            className={`border ${selectedAdds === "1" ? "border-[#00A3AD] bg-[#F2FAFB]" : "border-[#E6E6E6] bg-[#FCFCFC]"} border-[#E6E6E6] p-[15px] rounded-lg flex justify-between items-center w-full cursor-pointer`}
            onClick={() => onAddsChange("1")}
          >
            <span className="text-xl text-[#026786] font-bold">
              BYO secondary GPS - $5/month
            </span>
            <div
              className={`w-[18px] h-[18px] rounded-full border border-[#00A3AD] ${selectedAdds === "1" ? "bg-[#00A3AD]" : ""}`}
            />
          </div>
          <div className="border border-[#E6E6E6] p-[15px] rounded-lg flex justify-between items-center w-full relative">
            <span className="absolute top-[-14px] left-4 text-[12px] text-[#7C7C7C] bg-[#E8E8E8] rounded-sm px-[5px] py-[3px]">
              Coming soon
            </span>
            <span className="text-xl text-[#026786] font-bold">
              Between trip insurance
            </span>
            <div
              className={`w-[18px] h-[18px] rounded-full border border-[#00A3AD]`}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="p-5 lg:px-10 lg:py-[30px] lg:border lg:border-[#E6E6E6]">
        <h3 className="text-[22px] text-[#4A4A4A] mb-5">Add card details</h3>
        <div className="border border-[#B2B2B2] px-5 py-4 flex items-center w-fit rounded-sm">
          <span>&#128179;</span>
          <input
            type="text"
            placeholder="1234 5678 1234 5678"
            value={cardDetails.number}
            onChange={(e) => {
              onCardChange("number", e.target.value);
            }}
            className="ml-2 mr-20 w-[190px] text-lg"
          />
          <input
            type="text"
            placeholder="MM/YY"
            value={cardDetails.expiry}
            onChange={(e) => {
              onCardChange("expiry", e.target.value);
            }}
            className="w-16 text-lg"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cardDetails.cvc}
            onChange={(e) => {
              onCardChange("cvc", e.target.value);
            }}
            className="ml-10 w-9 text-lg"
          />
        </div>
        <p className="text-[15px] text-[#B2B2B2] mt-2.5">
          You will not be charged right now. Subscription will only start once
          your listing is published and live.
        </p>
      </div>

      <hr />

      <div className="p-5 lg:px-10 lg:py-[30px] lg:border lg:border-[#E6E6E6] text-[20px] text-[#4A4A4A]">
        <p>
          Learn more about the plans here -{" "}
          <span className="text-[#00A3AD] font-bold">
            What is the right plan for me?
          </span>
        </p>
        <p>
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarifications.
        </p>
      </div>
    </div>
  );
};

export default Subscription;

type DeviceItem = {
  deviceType: string;
  bringYourOwnDevice: boolean;
  serialNumber: string;
  deviceImageName: string;
};

type DeviceProps = {
  devices: DeviceItem[];
  onDeviceChange: (index: number, updates: Partial<DeviceItem>) => void;
};

const Device = ({ devices, onDeviceChange }: DeviceProps) => {
  return (
    <div className="max-w-[1000px] flex flex-col rounded-[8px]">
      <div
        className=""
        style={{
          border: "1px solid #E6E6E6",
          padding: "30px 40px",
          width: "100%"
        }}
      >
        <h1 className="text-[32px] text-[#026786] font-bold">
          Device Management
        </h1>
        <p className="text-[22px] text-[#4A4A4A]">
          Add details of the device, if any already installed on your car. If
          none, then continue to next step.
        </p>
      </div>
      {devices.map((device, index) => {
        return (
          <DeviceInfo
            value={index + 1}
            device={device}
            onChange={(updates) => onDeviceChange(index, updates)}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Device;

const DeviceInfo = ({
  value,
  device,
  onChange
}: {
  value: number;
  device: DeviceItem;
  onChange: (updates: Partial<DeviceItem>) => void;
}) => {
  const uploadInputId = `device-upload-${value}`;

  return (
    <div style={{ border: "1px solid #E6E6E6", padding: "30px 40px" }}>
      <h3 style={{ color: "#4A4A4A", fontSize: "22px" }}>Device {value}</h3>
      <div className="flex_center" style={{ gap: "20px", alignItems: "start" }}>
        <div>
          <div
            style={{ color: "#4A4A4A", fontSize: "16px", marginBottom: "5px" }}
          >
            Device Type
          </div>
          <input
            value={device.deviceType}
            onChange={(e) => onChange({ deviceType: e.target.value })}
            type="text"
            placeholder="Enter device type"
            className="px-3 py-2"
            style={{
              fontSize: "20px",
              width: "450px",
              height: "54px",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #E6E6E6",
              borderRadius: "4px",
              opacity: 1
            }}
          />
        </div>
        <div>
          <div className="flex_space_between">
            <p style={{ color: "#4A4A4A", fontSize: "20px", margin: 0 }}>
              Bringing your own device?
            </p>
            <label className="switch">
              <input
                type="checkbox"
                checked={device.bringYourOwnDevice}
                onChange={(e) =>
                  onChange({ bringYourOwnDevice: e.target.checked })
                }
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <p style={{ fontSize: "16px", color: "#4A4A4A", margin: 0 }}>
              Toggle this on if you're bringing your own device. Leave it off if
              Drive mate is to provide the device.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex_center"
        style={{ gap: "20px", marginTop: "20px", alignItems: "start" }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{ color: "#4A4A4A", fontSize: "16px", marginBottom: "5px" }}
          >
            Serial number
          </div>
          <input
            value={device.serialNumber}
            onChange={(e) => onChange({ serialNumber: e.target.value })}
            type="text"
            placeholder="Enter the serial number of the device"
            className="px-3 py-2"
            style={{
              fontSize: "20px",
              width: "450px",
              height: "54px",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #E6E6E6",
              borderRadius: "4px",
              opacity: 1
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div className="flex_space_between">
            <p style={{ fontSize: "16px", color: "#4A4A4A", margin: 0 }}>
              Upload an image of the device
            </p>
          </div>
          <div
            style={{
              width: "335px",
              height: "160px",
              background: "#FCFCFC 0% 0% no-repeat padding-box",
              border: "1px solid #E6E6E6",
              borderRadius: "4px",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative"
            }}
            onClick={() => document.getElementById(uploadInputId)?.click()}
          >
            <input
              id={uploadInputId}
              type="file"
              onChange={(e) => {
                const fileName = e.target.files?.[0]?.name ?? "";
                onChange({ deviceImageName: fileName });
              }}
              style={{
                display: "none"
              }}
            />
            <span
              style={{
                color: "#026786",
                fontWeight: "700",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              {device.deviceImageName || "Click to upload"}
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

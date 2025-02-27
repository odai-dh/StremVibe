import "../../../css/devices.css";

export default function Devices() {
  // Array of device objects with id, name, image, and content
  const devices = [
    {
      id: 1,
      name: "Smartphones",
      imageVar: "var(--smartphone)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 2,
      name: "Tablet",
      imageVar: "var(--tablet)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 3,
      name: "Smart IV",
      imageVar: "var(--smart-tv)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 4,
      name: "Laptops",
      imageVar: "var(--laptop)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 5,
      name: "Gaming Consoles",
      imageVar: "var(--gaming-console)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 6,
      name: "VR",
      imageVar: "var(--vr)",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
  ];
  return (
    <div className="devicesContainer">
      <div className="devicesHead">
        <h2 className="subtitle">
          We Provide you with the best experience across various devices.
        </h2>
        <p className="smallWords">
          With StreamVibe, you can find your favorite movies anytime.
        </p>
      </div>
      {/* Map through the devices array and display each device */}
      <div className="cardContainer">
        {devices.map((device) => (
          <div key={device.id} className="deviceCard ">
            <div className="thirdTitle cardTitle">
              <div className="imgBox">
                <img
                  src={device.imageVar}
                  alt={device.name}
                  style={{ content: device.imageVar }}
                />
              </div>
              <h3>{device.name}</h3>
            </div>
            <p className="smallWords">{device.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Logo from "../Images/logo.png";
import {
  AppstoreAddOutlined,
  BlockOutlined,
  TeamOutlined,
  UserAddOutlined,
  OrderedListOutlined,
  SketchOutlined,
  InfoCircleOutlined,
  PropertySafetyOutlined,
  QuestionCircleFilled,
  StarFilled,
  EditFilled,
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  ArrowLeftOutlined,
  DeleteOutlined,
  LinkOutlined,
  PaperClipOutlined,
  ClusterOutlined,
} from "@ant-design/icons";
import { Tabs, Drawer } from "antd";

const BodySection = () => {
  return (
    <div className="bodyfull">
      <SideBar />
      <RightSection />
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="side-logo-name">
        <img src={Logo} alt="logo" width="65px" height="40px" />
        <p>A.T. lnks</p>
      </div>
      <div className="side-menus">
        <div>
          <AppstoreAddOutlined
            style={{ fontSize: "22px", marginLeft: "10px" }}
          />
          <p>Dashboard</p>
        </div>
        <div>
          <BlockOutlined style={{ fontSize: "22px", marginLeft: "10px" }} />
          <p>Orders</p>
        </div>
        <div>
          <TeamOutlined style={{ fontSize: "22px", marginLeft: "10px" }} />
          <p>Team Members</p>
        </div>
        <div>
          <UserAddOutlined style={{ fontSize: "22px", marginLeft: "10px" }} />
          <p>Partners</p>
        </div>
        <div>
          <OrderedListOutlined
            style={{ fontSize: "22px", marginLeft: "10px" }}
          />
          <p>Product Listing</p>
        </div>
        <div>
          <SketchOutlined style={{ fontSize: "22px", marginLeft: "10px" }} />
          <p>Awards & Honours</p>
        </div>
        <div className="selected-menu">
          <InfoCircleOutlined
            style={{ fontSize: "22px", marginLeft: "10px" }}
          />
          <p>About Us</p>
        </div>
        <div>
          <PropertySafetyOutlined
            style={{ fontSize: "22px", marginLeft: "10px" }}
          />
          <p>Payment info</p>
        </div>
      </div>
      <div className="side-help">
        <QuestionCircleFilled style={{ fontSize: "22px", color: "#909090" }} />
        <p>Need Help?</p>
        <p>Our support team is at your disposal</p>
        <button style={{ backgroundColor: "#000", color: "#fff" }}>
          Get Help
        </button>
      </div>
    </div>
  );
};

const RightSection = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";
  const [displayText, setDisplayText] = useState(lorem);
  const [editText, setEditText] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const [team, setTeam] = useState([
    {
      teamName: "Sales Team",
      teamEmail: "salesteam@br.in",
      teamPhone: "9876543210",
    },
    {
      teamName: "Marketing Team",
      teamEmail: "marketing@br.in",
      teamPhone: "9569243210",
    },
  ]);
  const [addressOpen, setAddressOpen] = useState(false);
  const addressShowDrawer = () => {
    setAddressOpen(true);
  };
  const [floorNum, setFloorNum] = useState("C-1/351");
  const [area, setArea] = useState("GICD");
  const [landmark, setLandmark] = useState("Vadodara");
  const [city, setCity] = useState("India");
  const [pincode, setPincode] = useState("598746");

  return (
    <div className="rightsection">
      <h2>About Us</h2>
      <div className="right-logo-name">
        <img src={Logo} alt="logo" width="80px" height="50px" />
        <div>
          <p>A.T. Inks</p>
          <p>Digital Inks</p>
        </div>
        <div className="verify">
          <StarFilled />
          <a href="/">Verify Company</a>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {editText ? (
          <>
            <textarea
              className="company-text-area"
              rows="2"
              onChange={(e) => setDisplayText(e.target.value)}
            >
              {displayText}
            </textarea>
            <button
              className="text-submit-btn"
              onClick={() => setEditText(false)}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <p style={{ maxWidth: "70%" }}>{displayText}</p>
            <EditFilled
              style={{
                margin: "1rem 0 0 1rem",
                fontSize: "22px",
                color: "#ff0000",
                cursor: "pointer",
              }}
              onClick={() => setEditText(true)}
            />
          </>
        )}
      </div>
      <DrawerAll open={open} setOpen={setOpen} team={team} setTeam={setTeam} />
      <AddressDrawer
        addressOpen={addressOpen}
        setAddressOpen={setAddressOpen}
        setFloorNum={setFloorNum}
        setArea={setArea}
        setLandmark={setLandmark}
        setCity={setCity}
        setPincode={setPincode}
      />
      <AllTabs
        showDrawer={showDrawer}
        team={team}
        addressShowDrawer={addressShowDrawer}
        floorNum={floorNum}
        area={area}
        landmark={landmark}
        city={city}
        pincode={pincode}
      />
    </div>
  );
};

const DrawerAll = (props) => {
  const onClose = () => {
    props.setOpen(false);
  };

  // const [addName, setAddName] = useState("Default Team");
  const [addEmail, setAddEmail] = useState("Default@email");
  const [addPhone, setAddPhone] = useState("9569243210");

  const addContact = () => {
    const allTeam = props.team.concat([
      {
        teamName: "Default Team",
        teamEmail: addEmail,
        teamPhone: addPhone,
      },
    ]);
    props.setTeam(allTeam);
    setInsideOpen(false);
  };
  const deleteContact = (teams) => {
    const allTeamDT = props.team.filter((tm) => tm !== teams);
    props.setTeam(allTeamDT);
  };

  const [insideOpen, setInsideOpen] = useState(false);
  const insideShowDrawer = () => {
    setInsideOpen(true);
  };
  const insideOnClose = () => {
    setInsideOpen(false);
  };

  return (
    <>
      <Drawer
        title="Contacts"
        placement="right"
        onClose={onClose}
        open={props.open}
        closeIcon={<ArrowLeftOutlined style={{ fontSize: "24px" }} />}
        headerStyle={{ borderBottom: "none" }}
        bodyStyle={{ padding: "0 24px 24px 24px" }}
      >
        <p style={{ marginTop: "0" }}>
          Please provide the company's email & contacts.
        </p>
        <div style={{ marginTop: "40px" }}>
          {props.team.map((teams, i) => {
            return (
              <div className="contact-side" key={i}>
                <div className="info-content-edit">
                  <ContactsOutlined
                    style={{ fontSize: "18px", color: "#909090" }}
                  />
                  <h4>{teams.teamName}</h4>
                  <DeleteOutlined
                    style={{
                      marginLeft: "10px",
                      fontSize: "18px",
                      color: "#ff0000",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteContact(teams)}
                  />
                  <EditFilled
                    style={{
                      marginLeft: "10px",
                      fontSize: "18px",
                      color: "#ff0000",
                      cursor: "pointer",
                    }}
                    onClick={insideShowDrawer}
                  />
                  <Drawer
                    title="Contacts"
                    placement="right"
                    onClose={insideOnClose}
                    open={insideOpen}
                    closeIcon={
                      <ArrowLeftOutlined style={{ fontSize: "24px" }} />
                    }
                    headerStyle={{ borderBottom: "none" }}
                    bodyStyle={{ padding: "0 24px 24px 24px" }}
                  >
                    <div className="add-save-contacts">
                      <div>
                        <p style={{ marginTop: "0" }}>
                          Please provide the company's email & contacts.
                        </p>
                        <p>Email ID</p>
                        <input
                          className="add-inputs"
                          placeholder="eg: abcfdr@fgh.as"
                          onChange={(e) => setAddEmail(e.target.value)}
                        />
                        <button className="add-more">Add More</button>
                        <p>Contact Number</p>
                        <input
                          type="number"
                          className="add-inputs"
                          placeholder="eg: 258794613"
                          onChange={(e) => setAddPhone(e.target.value)}
                        />
                        <button className="add-more">Add More</button>
                      </div>
                      <button
                        className="btn-save-contact"
                        onClick={() => addContact()}
                      >
                        Save
                      </button>
                    </div>
                  </Drawer>
                </div>
                <div className="info-content-edit">
                  <MailOutlined
                    style={{ fontSize: "22px", color: "#909090" }}
                  />
                  <p>{teams.teamEmail}</p>
                </div>
                <div className="info-content-edit">
                  <PhoneOutlined
                    style={{ fontSize: "22px", color: "#909090" }}
                  />
                  <p>{teams.teamPhone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
};

const AddressDrawer = (props) => {
  const addressOnClose = () => {
    props.setAddressOpen(false);
  };
  return (
    <Drawer
      title="Address"
      placement="right"
      onClose={addressOnClose}
      open={props.addressOpen}
      closeIcon={<ArrowLeftOutlined style={{ fontSize: "24px" }} />}
      headerStyle={{ borderBottom: "none" }}
      bodyStyle={{ padding: "0 24px 24px 24px" }}
    >
      <div className="add-save-contacts">
        <div>
          <input
            className="add-inputs marg-4"
            placeholder="Floor Number / Block No / Office Name"
            onChange={(e)=>props.setFloorNum(e.target.value)}
          />
          <input
            className="add-inputs marg-4"
            placeholder="Area / Locality"
            onChange={(e)=>props.setArea(e.target.value)}
          />
          <input
            className="add-inputs marg-4"
            placeholder="Nearest Landmark"
            onChange={(e)=>props.setLandmark(e.target.value)}
          />
          <input
            className="add-inputs marg-4"
            placeholder="Town / City"
            onChange={(e)=>props.setCity(e.target.value)}
          />
          <input
            className="add-inputs marg-4"
            placeholder="Pincode"
            onChange={(e)=>props.setPincode(e.target.value)}
          />
        </div>
        <button className="btn-save-contact" onClick={addressOnClose}>Save</button>
      </div>
    </Drawer>
  );
};

const AllTabs = (props) => {
  const Information = (
    <div>
      <div className="information">
        <div className="contact">
          <div className="info-content-edit">
            <ContactsOutlined style={{ fontSize: "22px", color: "#909090" }} />
            <h2>Contact</h2>
            <EditFilled
              style={{
                marginLeft: "1rem",
                fontSize: "22px",
                color: "#ff0000",
                cursor: "pointer",
              }}
              onClick={props.showDrawer}
            />
          </div>
          <div className="info-content-edit">
            <MailOutlined style={{ fontSize: "22px", color: "#909090" }} />
            <p>salesteam@br.in</p>
            <div className="contact-num">+{props.team.length}</div>
          </div>
          <div className="info-content-edit">
            <PhoneOutlined style={{ fontSize: "22px", color: "#909090" }} />
            <p>9876543210</p>
          </div>
        </div>
        <div className="contact">
          <div className="info-content-edit">
            <ThunderboltOutlined
              style={{ fontSize: "22px", color: "#909090" }}
            />
            <h2>Address</h2>
            <EditFilled
              style={{
                marginLeft: "1rem",
                fontSize: "22px",
                color: "#ff0000",
                cursor: "pointer",
              }}
              onClick={props.addressShowDrawer}
            />
          </div>
          <div className="info-content-edit">
            <p>
              {props.floorNum} {props.area} {props.landmark}
              <br />
              {props.city} {props.pincode}
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="info-content-edit">
            <ClusterOutlined style={{ fontSize: "22px", color: "#909090" }} />
            <h2>Hours of operations</h2>
            <EditFilled
              style={{
                marginLeft: "1rem",
                fontSize: "22px",
                color: "#ff0000",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="info-content-edit">
            <p>Monday to Friday - 9:00 am to 6:00 pm</p>
          </div>
        </div>
      </div>
      <div className="information-2">
        <div className="content-2">
          <div className="info-content-edit">
            <LinkOutlined style={{ fontSize: "22px", color: "#909090" }} />
            <h2>Social Media & Links</h2>
            <EditFilled
              style={{
                marginLeft: "1rem",
                fontSize: "22px",
                color: "#ff0000",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="info-content-edit">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="dis-flex">
                <GlobalOutlined
                  style={{ fontSize: "22px", color: "#909090" }}
                />
                <p>Website</p>
              </div>
              <div className="dis-flex">
                <InstagramOutlined
                  style={{ fontSize: "22px", color: "#909090" }}
                />
                <p>Instagram</p>
              </div>
              <div className="dis-flex">
                <FacebookOutlined
                  style={{ fontSize: "22px", color: "#909090" }}
                />
                <p>Facebook</p>
              </div>
              <div className="dis-flex">
                <TwitterOutlined
                  style={{ fontSize: "22px", color: "#909090" }}
                />
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-2">
          <div className="info-content-edit">
            <PaperClipOutlined style={{ fontSize: "22px", color: "#909090" }} />
            <h2>Statement</h2>
            <EditFilled
              style={{
                marginLeft: "1rem",
                fontSize: "22px",
                color: "#ff0000",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="info-content-edit">
            <p>You think it we ink it.</p>
            <div className="contact-num">+2</div>
          </div>
        </div>
      </div>
    </div>
  );
  const PrivacyPolicy = (
    <div>
      <h3>Your Privacy Matters</h3>
      <div className="flex-tcp">
        <div>
          <h4>1. Introduction</h4>
          <p style={{ color: "#909090" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            mattis vulputate enim nulla aliquet porttitor. Id semper risus in
            hendrerit gravida rutrum quisque non tellus. Lectus quam id leo in
            vitae. Volutpat commodo sed egestas egestas fringilla phasellus.
            Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
            vehicula. Congue eu consequat ac felis donec et. Elit eget gravida
            cum sociis. Velit ut tortor pretium viverra suspendisse potenti
            nullam. Laoreet suspendisse interdum consectetur libero id faucibus.
            Nisl rhoncus mattis rhoncus urna neque viverra. In ante metus dictum
            at tempor. Purus semper eget duis at tellus at. Tincidunt eget
            nullam non nisi. Velit ut tortor pretium viverra suspendisse potenti
            nullam. Vitae nunc sed velit dignissim sodales. Leo integer
            malesuada nunc vel risus commodo viverra maecenas. Bibendum est
            ultricies integer quis. At erat pellentesque adipiscing commodo elit
            at imperdiet dui accumsan. Dolor sit amet consectetur adipiscing
            elit.
          </p>
        </div>
        <div>
          <div>
            <h4>Table of Contents:</h4>
            <p>Introduction</p>
            <p style={{ color: "#909090" }}>Data we collect</p>
            <p style={{ color: "#909090" }}>How we use your data</p>
            <p style={{ color: "#909090" }}>How we share info</p>
            <p style={{ color: "#909090" }}>Your choices</p>
          </div>
        </div>
      </div>
    </div>
  );
  const TermsConditions = (
    <div>
      <h3>Terms & Conditions</h3>
      <div className="flex-tcp">
        <div>
          <h4>1. Agreement</h4>
          <p style={{ color: "#909090" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            mattis vulputate enim nulla aliquet porttitor. Id semper risus in
            hendrerit gravida rutrum quisque non tellus. Lectus quam id leo in
            vitae. Volutpat commodo sed egestas egestas fringilla phasellus.
            Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
            vehicula. Congue eu consequat ac felis donec et. Elit eget gravida
            cum sociis. Velit ut tortor pretium viverra suspendisse potenti
            nullam. Laoreet suspendisse interdum consectetur libero id faucibus.
            Nisl rhoncus mattis rhoncus urna neque viverra. In ante metus dictum
            at tempor. Purus semper eget duis at tellus at. Tincidunt eget
            nullam non nisi. Velit ut tortor pretium viverra suspendisse potenti
            nullam. Vitae nunc sed velit dignissim sodales.
          </p>
        </div>
        <div>
          <div>
            <h4>Table of Contents:</h4>
            <p>Agreement</p>
            <p style={{ color: "#909090" }}>Service and paid subscription</p>
            <p style={{ color: "#909090" }}>Right & Laws</p>
            <p style={{ color: "#909090" }}>3rd party apps</p>
            <p style={{ color: "#909090" }}>Rights you grant us</p>
          </div>
        </div>
      </div>
    </div>
  );
  const items = [
    {
      key: "1",
      label: `Info`,
      children: Information,
    },
    {
      key: "2",
      label: `FAQ`,
      children: `FAQ No Data`,
    },
    {
      key: "3",
      label: `Complaints and feedback`,
      children: `Complaints and feedback No Data`,
    },
    {
      key: "4",
      label: `Privacy Policy`,
      children: PrivacyPolicy,
    },
    {
      key: "5",
      label: `Terms & Conditions`,
      children: TermsConditions,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      tabBarStyle={{ borderBottomColor: "red" }}
    />
  );
};

export default BodySection;

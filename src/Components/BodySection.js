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
} from "@ant-design/icons";
import { Tabs, Button, Drawer } from "antd";

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
          <a href="#">Verify Company</a>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {editText ? (
          <>
            <textarea
              style={{ width: "70%", marginTop: "1rem" }}
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
      <DrawerAll open={open} setOpen={setOpen} />
      <AllTabs showDrawer={showDrawer} />
    </div>
  );
};

const DrawerAll = (props) => {
  const onClose = () => {
    props.setOpen(false);
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

  const addContact = () => {
    const allTeam = team.concat([
      {
        teamName: "Hello Team",
        teamEmail: "Hello@br.in",
        teamPhone: "9569243210",
      },
    ]);
    setTeam(allTeam);
  };
//   const deleteContact = (teams) => {
//     const allTeamDT = team.filter((tm) => tm.teamEmail !== teams.teamEmail);
//     console.log("setTeam", allTeamDT);
//   };

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
          {team.map((teams, i) => {
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
                    // onClick={() => deleteContact()}
                  />
                  <EditFilled
                    style={{
                      marginLeft: "10px",
                      fontSize: "18px",
                      color: "#ff0000",
                      cursor: "pointer",
                    }}
                    onClick={(teams) => addContact(teams)}
                  />
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
            <div className="contact-num">+5</div>
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
            />
          </div>
          <div className="info-content-edit">
            <p>c1/hj/6565, abcd, asdfghjk, India</p>
          </div>
        </div>
        <div className="contact">
          <div className="info-content-edit">
            <ThunderboltOutlined
              style={{ fontSize: "22px", color: "#909090" }}
            />
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
            <ThunderboltOutlined
              style={{ fontSize: "22px", color: "#909090" }}
            />
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
            <ThunderboltOutlined
              style={{ fontSize: "22px", color: "#909090" }}
            />
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
      children: `Privacy Policy No Data`,
    },
    {
      key: "5",
      label: `Terms & Conditions`,
      children: `Terms & Conditions No Data`,
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

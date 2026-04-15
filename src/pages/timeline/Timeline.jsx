import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContex";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CallList from "../../components/friendlist/CallList";
import TextList from "../../components/friendlist/TextList";
import VideoList from "../../components/friendlist/VideoList";

const Timeline = () => {
  const { call, text, video } = useContext(FriendContext);
  console.log(call, text, video, "friend data");
  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className=" text-2xl font-bold">Timeline</h2>
      <Tabs>
        <TabList>
          <Tab>call</Tab>
          <Tab>text</Tab>
          <Tab>video</Tab>
        </TabList>

        <TabPanel>
          <CallList></CallList>
        </TabPanel>
        <TabPanel>
          <TextList></TextList>
        </TabPanel>
        <TabPanel>
          <VideoList></VideoList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Timeline;

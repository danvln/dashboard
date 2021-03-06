import React from "react";
import { storiesOf } from "@storybook/react";

import { connectedWidgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";

const Story = () => {
  return (
    <Widget
      {...connectedWidgetProps}
      id="youtube-stats-01"
      type="youtube-stats"
      options={{
        query: "https://www.youtube.com/c/darekkay",
      }}
      data={{
        channelTitle: "Darek Kay",
        subscriberCount: 1642,
        viewCount: 2047174,
      }}
      meta={initialMeta("youtube-stats")}
    />
  );
};

storiesOf("Widgets/YoutubeStats", module).add("Variants", () => <Story />);

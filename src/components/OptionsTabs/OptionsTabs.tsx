import React from "react";
import {options} from "./Options";
import {Tabs} from "antd";
function OptionsTabs() {
    return (
        <Tabs
            defaultActiveKey="2"
            items={options.map((option, i) => {
                const {Icon} = option;
                const id = String(i + 1);

                return {
                    label: (
                        <span>
                            <Icon />
                            Tab {id}
                        </span>
                    ),
                    key: id,
                    children: `Tab ${id}`
                };
            })}
        />
    );
}

export default OptionsTabs;

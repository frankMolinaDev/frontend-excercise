import React from "react";
import {options} from "./Options";
import {Tabs} from "antd";
import TransformationsGrid from "./TransformationsGrid/TransformationsGrid";

function OptionsTabs() {
    return (
        <Tabs
            className="tabs"
            defaultActiveKey="1"
            items={options.map((option, i) => {
                const {Icon, title, transformations, type} = option;
                const id = String(i + 1);

                return {
                    label: (
                        <span>
                            <Icon />
                            {title}
                        </span>
                    ),
                    key: id,
                    children: <TransformationsGrid transformations={transformations} type={type} />
                };
            })}
        />
    );
}

export default OptionsTabs;

import React from "react";
import {options} from "./Options";
import {Tabs} from "antd";
import EffectsGrid from "./EffectsGrid/EffectsGrid";

function OptionsTabs() {
    return (
        <Tabs
            defaultActiveKey="2"
            items={options.map((option, i) => {
                const {Icon, title, effects} = option;
                const id = String(i + 1);

                return {
                    label: (
                        <span>
                            <Icon />
                            {title}
                        </span>
                    ),
                    key: id,
                    children: <EffectsGrid effects={effects} />
                };
            })}
        />
    );
}

export default OptionsTabs;


import { Select, Tag } from "@oceanbase/design";
import React from "react";

const options = [{value: 'gold'}, {value: 'green'}, {value: 'red'}, {value: 'cyan'}];

const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
        >
            {label}
        </Tag>
    );
}

const App: React.FC = () => (
    <>
        <Select
            mode="multiple"
            tagRender={tagRender}
            defaultValue={['gold', 'cyan']}
            style={{width: '100%'}}
            options={options}
        />
    </>
  );
  

export default App;

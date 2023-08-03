import {TagSelect} from '@oceanbase/ui';
import { useState } from 'react';

export default () => {

    const option = [
        {
            label: '标签1',
            value: 1
        },
        {
            label: '标签2',
            value: 2
        },
        {
            label: '标签3',
            value: 3
        }
    ];
    const [checked, setChecked] = useState();
    const handleChange = v => {
        setChecked(v);
    };

    return (
        <TagSelect.Group
            title='我是一个标题'
            options={option}
            onChange={handleChange}
            value={checked}
        />
    );
};
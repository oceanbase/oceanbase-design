import {TagSelect} from '@oceanbase/ui';
import { useState } from 'react';

export default () => {

    const option = [
        {
            label: '未选中选项',
            value: 1
        },
        {
            label: '未选中选项',
            value: 2
        },
        {
            label: '未选中选项',
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
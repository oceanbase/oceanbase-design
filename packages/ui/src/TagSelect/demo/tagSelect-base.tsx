import React from 'react';
import {TagSelect} from '@oceanbase/ui';

export default () => {

    const handleChange = checked => {
        console.log(checked);
    }

    return(
        <TagSelect.Item value="tag3" onChange={handleChange}>未选中项</TagSelect.Item>
    );
}
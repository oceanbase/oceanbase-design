
import React from 'react';
import {TagSelect} from '@oceanbase/ui';

export default () => {

    const option = [
        {
            label: '未选中项',
            value: 1
        },
        {
            label: '未选中项',
            value: 2
        },
        {
            label: '未选中项',
            value: 3
        },
        {
            label: '未选中项',
            value: 4
        }
    ];

    return (
        <div>
            <TagSelect.Group
                title="默认"
                options={option}
            />
            <TagSelect.Group
                title="选中"
                defaultValue={1}
            >
                <TagSelect.Item value={1}>已选中项</TagSelect.Item>
                <TagSelect.Item value={2}>未选中项</TagSelect.Item>
                <TagSelect.Item value={3}>未选中项</TagSelect.Item>
                <TagSelect.Item value={4}>未选中项</TagSelect.Item>
            </TagSelect.Group>
            <TagSelect.Group
                title="禁用"
                defaultValue={4}
                disabled
            >
                <TagSelect.Item value={1}>禁用选项</TagSelect.Item>
                <TagSelect.Item value={2}>禁用选项</TagSelect.Item>
                <TagSelect.Item value={3}>禁用选项</TagSelect.Item>
                <TagSelect.Item value={4}>禁用选项</TagSelect.Item>
            </TagSelect.Group>
        </div>
    );
}
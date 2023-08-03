import {TagSelect} from '@oceanbase/ui';

export default () => {

    const option = [
        {
            label: '多选标签一',
            value: 1
        },
        {
            label: '多选标签二',
            value: 2
        },
        {
            label: '多选标签三',
            value: 3
        }
    ];
    return (
        <div>
            <div>
                <TagSelect.Group
                    title='small'
                    size='small'
                    defaultValue={1}
                >
                    <TagSelect.Item value={1}>单选标签一</TagSelect.Item>
                    <TagSelect.Item value={2}>单选标签二</TagSelect.Item>
                    <TagSelect.Item value={3}>单选标签三</TagSelect.Item>
                </TagSelect.Group>
            </div>
            <div>
                <TagSelect.Group
                    title='middle'
                    multiple
                    size='middle'
                    defaultValue={['tag1']}
                >
                    <TagSelect.Item value='tag1'>多选标签一</TagSelect.Item>
                    <TagSelect.Item value='tag2'>多选标签二</TagSelect.Item>
                    <TagSelect.Item value='tag3'>多选标签三</TagSelect.Item>
                </TagSelect.Group>
            </div>
            <div>
                <TagSelect.Group
                    title='large'
                    multiple
                    options={option}
                    defaultValue={[1]}
                    size='large'
                />
            </div>
        </div>
    );
};
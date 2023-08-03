
import {TagSelect} from '@oceanbase/ui';

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
    return (
        <div>
            <div>
                <TagSelect.Group
                    title='单选'
                    options={option}
                    defaultValue={1}
                    disabled
                />
            </div>
            <div>
                <TagSelect.Group
                    title='多选'
                    multiple
                    options={option}
                    defaultValue={[1]}
                    disabled
                />
            </div>
        </div>
    );
};
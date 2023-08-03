import {TagSelect} from '@oceanbase/ui';

export default () => {

    const handleChange = (checked:boolean) => {
        console.log(`checked: ${checked}`);
    };


    return(
        <div>
            <TagSelect.Item
                value="tag1"
                defaultChecked
                onChange={e => handleChange(e.target.checked)}
            >标签式选择</TagSelect.Item>
            <TagSelect.Item value="tag2" disabled>标签式选择</TagSelect.Item>
            <TagSelect.Item value="tag3">标签式选择</TagSelect.Item>
        </div>
    );
}
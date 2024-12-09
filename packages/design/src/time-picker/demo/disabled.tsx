import React from 'react';
import { TimePicker } from '@oceanbase/design';
import dayjs from 'dayjs';

const App: React.FC = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;

export default App;

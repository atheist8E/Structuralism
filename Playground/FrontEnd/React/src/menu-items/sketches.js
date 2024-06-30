// assets
import { AndroidOutlined } from '@ant-design/icons';

// icons
const icons = {
  AndroidOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const sketches = {
  id: 'sketches',
  title: 'Sketches',
  type: 'group',
  children: [
    {
      id: 'test_0',
      title: 'Test 0',
      type: 'item',
      url: 'sketches/test_0',
      icon: icons.AndroidOutlined,
    },
    {
      id: 'test_1',
      title: 'Test 1',
      type: 'item',
      url: 'sketches/test_1',
      icon: icons.AndroidOutlined,
    }
  ]
};

export default sketches;

// assets
import { DownloadOutlined } from '@ant-design/icons';

// icons
const icons = {
  DownloadOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const extractors = {
  id: 'group-extractor',
  title: 'Extractors',
  type: 'group',
  children: [
    {
      id: 'alignment',
      title: 'Alignment',
      type: 'item',
      url: 'extractors/alignment',
      icon: icons.DownloadOutlined,
      breadcrumbs: false
    },
    {
      id: 'overlay',
      title: 'Overlay',
      type: 'item',
      url: 'extractors/overlay',
      icon: icons.DownloadOutlined,
      breadcrumbs: false
    }
  ]
};

export default extractors;

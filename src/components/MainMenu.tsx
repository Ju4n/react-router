import { FormOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import { useNavigate } from 'react-router-dom';

export default function MainMenu() {
  const items: MenuItemType[] = [
    {
      key: 'form-one',
      label: 'Navigation One',
      icon: <FormOutlined/>
    },
    {
      key: 'form-two',
      label: 'Navigation Two',
      icon: <FormOutlined/>
    },
    {
      key: 'form-three',
      label:  'Navigation Three',
      icon: <FormOutlined/>
    },
  ];

  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigate(e.key)
  };

  return <Menu items={items} onClick={onClick} theme="dark" mode="inline" />;
};
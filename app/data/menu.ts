import { Home, MessageCircle, Plus, Users, User, Settings } from 'lucide-react';
import { Menu } from '../types/menu';

export const NAV_ITEM: Menu[] = [
  { id: 'home', icon: Home, label: 'Home', url: '/' },
  {
    id: 'messages',
    icon: MessageCircle,
    label: 'Messages',
    count: 3,
    url: '/messages',
  },
  { id: 'create', icon: Plus, label: 'Create', special: true, url: '/create' },
  { id: 'friends', icon: Users, label: 'Friends', count: 5, url: '/friends' },
  { id: 'profile', icon: User, label: 'Profile', url: '/profile' },
];

// {
//   id: 'settings',
//   icon: Settings,
//   label: 'Settings',
//   count: null,
//   url: '/settings',
// },

import { Home, MessageCircle, Plus, Users, User, Settings } from 'lucide-react';
import { MobileMenu, PcMenu } from '../types/menu';

export const MOBILE_NAV_ITEM: MobileMenu[] = [
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

export const PC_NAV_ITEM: PcMenu[] = [
  {
    id: 'home',
    icon: Home,
    label: 'Home',
    count: null,
    url: '/',
  },
  {
    id: 'messages',
    icon: MessageCircle,
    label: 'Messages',
    count: 3,
    url: '/messages',
  },
  {
    id: 'create',
    icon: Plus,
    label: 'Create',
    count: null,
    url: '/create',
  },
  {
    id: 'friends',
    icon: Users,
    label: 'Friends',
    count: 5,
    url: '/friends',
  },
  {
    id: 'profile',
    icon: User,
    label: 'profile',
    count: null,
    url: '/profile',
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
    count: null,
    url: '/settings',
  },
];
